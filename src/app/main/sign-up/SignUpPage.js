import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import _ from '@lodash';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import FormHelperText from '@mui/material/FormHelperText';
import jwtService from '../../auth/services/jwtService';
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'
import SignUp from './SignUp';
import Grid from '@mui/material/Grid';
import PasswordChecklist from "react-password-checklist"
import Utf8 from 'crypto-js/enc-utf8';
import Base64 from 'crypto-js/enc-base64';
import HmacSHA256 from 'crypto-js/hmac-sha256';
import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { ReactSession } from 'react-client-session';


const jwtSecret = 'some-secret-code-goes-here';
ReactSession.setStoreType("localStorage");



function base64url(source) {
  // Encode in classical base64
  let encodedSource = Base64.stringify(source);

  // Remove padding equal characters
  encodedSource = encodedSource.replace(/=+$/, '');

  // Replace characters according to base64url specifications
  encodedSource = encodedSource.replace(/\+/g, '-');
  encodedSource = encodedSource.replace(/\//g, '_');

  // Return the base64 encoded string
  return encodedSource;
}

function generateJWTToken(tokenPayload) {
  // Define token header
  const header = {
    alg: 'HS256',
    typ: 'JWT',
  };

  // Calculate the issued at and expiration dates
  const date = new Date();
  const iat = Math.floor(date.getTime() / 1000);
  const exp = Math.floor(date.setDate(date.getDate() + 7) / 1000);

  // Define token payload
  const payload = {
    iat,
    iss: 'Fuse',
    exp,
    ...tokenPayload,
  };

  // Stringify and encode the header
  const stringifiedHeader = Utf8.parse(JSON.stringify(header));
  const encodedHeader = base64url(stringifiedHeader);

  // Stringify and encode the payload
  const stringifiedPayload = Utf8.parse(JSON.stringify(payload));
  const encodedPayload = base64url(stringifiedPayload);

  // Sign the encoded header and mock-api
  let signature = `${encodedHeader}.${encodedPayload}`;
  signature = HmacSHA256(signature, jwtSecret);
  signature = base64url(signature);

  // Build and return the token
  return `${encodedHeader}.${encodedPayload}.${signature}`;
}

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  companyname: yup.string().required('You must enter display name'),
  storename: yup.string().required('You must enter display name'),
  displayName: yup.string().required('You must enter display name'),
  email: yup.string().email('You must enter a valid email').required('You must enter a email'),
  password: yup
    .string()

    .required('Please enter your password.')
    .min(8, 'Password is too short - should be 8 chars minimum.'),

  passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
  acceptTermsConditions: yup.boolean().oneOf([true], 'The terms and conditions must be accepted.'),
});


const defaultValues = {
  companyname: '',
  storename: '',
  displayName: '',
  email: '',
  mobilenumber: '',
  password: '',
  passwordConfirm: '',
  acceptTermsConditions: false,
};


function SignUpPage() {
  const { control, formState, handleSubmit, reset } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors, setError } = formState;
  const [Page, setPage] = useState('1');
  const [Errorval, setErrorval] = useState('');


  const Call = (companyname, storename, displayName, password, email) => {
    jwtService
      .createUser({
        companyname,
        storename,
        displayName,
        password,
        email
      })
      .then((user) => {

        console.log(user);
        //alert();
        // window.location.href = "/calendar";
        // No need to do anything, registered user data will be set at app/auth/AuthContext
      })
      .catch((_errors) => {
        _errors.forEach((error) => {

        });
      });
  }


  function onSubmit({ companyname, storename, displayName, password, email }) {
    // alert();
    fetch(
      'https://www.laabamone.com/appoint_api.php?eventtype=registercompany&companyname='
      + companyname +
      '&storename='
      + storename + '&displayname=' +
      displayName +
      '&password=' +
      password +
      '&email=' +
      email




    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log('yes');


          const id = result[0]['id'];

          const message = result[0]['message'];

          if (id != undefined && message == 'success') {
            setErrorval('')
            setPage('2');
            //  ReactSession.set("login_cid1", id);
            localStorage.setItem('login_cid1', id);
            localStorage.setItem('jwt_access_token', id);
            //window.location.href = "/calendar";
            Call(companyname, storename, displayName, password, email)
          }
          else {
            const errormsg = result[0]['errormsg'];
            setErrorval(errormsg);
          }


          console.log(result);
        },
        (error) => {
          console.log('no');
          console.log(error);
        }
      );



  }

  return (
    <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-1 min-w-0">
      <Paper className="h-full sm:h-auto md:flex md:items-center md:justify-end w-full sm:w-auto md:h-full md:w-1/2 py-8 px-16 sm:p-48 md:p-64 sm:rounded-2xl md:rounded-none sm:shadow md:shadow-none ltr:border-r-1 rtl:border-l-1">
        <div className="w-full max-w-320 sm:w-320 mx-auto sm:mx-0">
          <img className="w-150" src="assets/images/logo/logo.png" alt="logo" />
          {Page == '1' &&
            <> <Typography className="mt-32 text-4xl font-extrabold tracking-tight leading-tight">
              Sign up
            </Typography>
              <div className="flex items-baseline mt-2 font-medium">
                <Typography>Already have an account?</Typography>
                <Link className="ml-4" to="/sign-in">
                  Sign in
                </Link>
              </div>
              <Typography sx={{ color: 'red' }}> {Errorval}</Typography>
              <form
                name="registerForm"
                noValidate
                className="flex flex-col justify-center w-full mt-32"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Controller
                  name="companyname"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mb-24"
                      label="Comapny name"
                      autoFocus
                      type="name"
                      error={!!errors.companyname}
                      helperText={errors?.companyname?.message}
                      variant="outlined"
                      required
                      fullWidth
                    />
                  )}
                />
                <Controller
                  name="storename"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mb-24"
                      label="Store name"
                      autoFocus
                      type="name"
                      error={!!errors.storename}
                      helperText={errors?.storename?.message}
                      variant="outlined"
                      required
                      fullWidth
                    />
                  )}
                />
                <Controller
                  name="displayName"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mb-24"
                      label="Display name"
                      autoFocus
                      type="name"
                      error={!!errors.displayName}
                      helperText={errors?.displayName?.message}
                      variant="outlined"
                      required
                      fullWidth
                    />
                  )}
                />

                <PhoneInput
                  inputStyle={{ color: 'green', height: '53px', width: '320px' }}
                  containerStyle={{ margin: '0px', height: '53px', width: '70px' }}
                />
                <br />
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mb-24"
                      label="Email"
                      type="email"
                      error={!!errors.email}
                      helperText={errors?.email?.message}
                      variant="outlined"
                      required
                      fullWidth
                    />
                  )}
                />
                {/*<SignUp />
            <br />*/}

                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mb-24"
                      label="Password"
                      type="password"
                      error={!!errors.password}
                      helperText={errors?.password?.message}
                      variant="outlined"
                      required
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="passwordConfirm"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mb-24"
                      label="Password (Confirm)"
                      type="password"
                      error={!!errors.passwordConfirm}
                      helperText={errors?.passwordConfirm?.message}
                      variant="outlined"
                      required
                      fullWidth
                    />
                  )}
                />

                <div>&nbsp;&nbsp;&nbsp;
                  <Controller
                    name="acceptTermsConditions"
                    control={control}
                    render={({ field }) => (
                      <FormControl className="items-center" error={!!errors.acceptTermsConditions}>
                        <FormControlLabel
                          label="&nbsp;I accept the new  Terms of Service."
                          control={<Checkbox size="medium"{...field} />}
                        />
                        <FormHelperText>{errors?.acceptTermsConditions?.message}</FormHelperText>
                      </FormControl>
                    )}
                  />
                </div>
                <br />

                <Button
                  variant="contained"
                  color="secondary"
                  className="w-full mt-24"
                  aria-label="Register"
                  disabled={_.isEmpty(dirtyFields) || !isValid}
                  type="submit"
                  size="large"
                >
                  Create your free account
                </Button>

              </form ></>
          }
          {
            Page == '2' &&
            <Grid container sx={{ border: '1px solid #f1f1f1' }}>
              <Grid item xs={12}>
                <Typography sx={{ padding: '50px' }} fullWidth className="mt-14 font-bold tracking-tight leading-tight">
                  Company Created Successfully.<br /><br />Please Check Your Email.
                </Typography> </Grid>
              <Grid item xs={12} sx={{ justifyContent: 'center', padding: '0px 130px' }}>

                <img src="assets/images/check.png" style={{ align: 'center' }} />
              </Grid>
            </Grid>
          }
        </div >
      </Paper >

      <Box
        className="relative hidden md:flex flex-auto items-center justify-center h-full p-64 lg:px-112 overflow-hidden"
        sx={{ backgroundColor: 'primary.main' }}
      >
        <svg
          className="absolute inset-0 pointer-events-none"
          viewBox="0 0 960 540"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMax slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Box
            component="g"
            sx={{ color: 'primary.light' }}
            className="opacity-20"
            fill="none"
            stroke="currentColor"
            strokeWidth="100"
          >
            <circle r="234" cx="196" cy="23" />
            <circle r="234" cx="790" cy="491" />
          </Box>
        </svg>
        <Box
          component="svg"
          className="absolute -top-64 -right-64 opacity-20"
          sx={{ color: 'primary.light' }}
          viewBox="0 0 220 192"
          width="220px"
          height="192px"
          fill="none"
        >
          <defs>
            <pattern
              id="837c3e70-6c3a-44e6-8854-cc48c737b659"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="220" height="192" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
        </Box>

        <div className="z-10 relative w-full max-w-2xl">
          <div className="text-7xl font-bold leading-none text-gray-100">
            <div>Welcome to</div>
            <div>our community</div>
          </div>
          <div className="mt-24 text-lg tracking-tight leading-6 text-gray-400">
            Laabamone business solution is a leading software developing company situated in Madurai.High achievement always takes place in the framework of high expectation.          </div>
          <div className="flex items-center mt-32">
            <AvatarGroup
              sx={{
                '& .MuiAvatar-root': {
                  borderColor: 'primary.main',
                },
              }}
            >
              <Avatar src="assets/images/avatars/female-18.jpg" />
              <Avatar src="assets/images/avatars/female-11.jpg" />
              <Avatar src="assets/images/avatars/male-09.jpg" />
              <Avatar src="assets/images/avatars/male-16.jpg" />
            </AvatarGroup>

            <div className="ml-16 font-medium tracking-tight text-gray-400">
              More than 17k people joined us, it's your turn
            </div>
          </div>
        </div>
      </Box>
    </div >
  );
}

export default SignUpPage;
