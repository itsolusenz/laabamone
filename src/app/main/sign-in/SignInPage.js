import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import _ from '@lodash';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import jwtService from '../../auth/services/jwtService';
import { useParams } from 'react-router';
import React, { useEffect, useState, useRef } from 'react';
import { ReactSession } from 'react-client-session';
import TimelineTab from '../apps/profile/tabs/TimelineTab';
import { InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  email: yup.string().email('You must enter a valid email').required('You must enter a email'),
  password: yup
    .string()
    .required('Please enter your password.')
    .min(4, 'Password is too short - must be at least 4 chars.'),
});

const defaultValues = {
  email: '',
  password: '',
  remember: true,

};

function SignInPage() {
  const { cid } = useParams();

  const { control, formState, handleSubmit, setError, setValue } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;
  const [Storename, setStorename] = useState(cid);
  const [Storename1, setStorename1] = useState();
  const [err, seterr] = useState();
  const [Errorval, setErrorval] = useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  useEffect(() => {
    setValue('email', 'admin@fusetheme.com', { shouldDirty: true, shouldValidate: true });
    setValue('password', 'admin', { shouldDirty: true, shouldValidate: true });
    const listener = event => {
      setStorename1(event.target.value)
      //  alert(event.target.store_name.value);
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        // console.log("Enter key was pressed. Run your function.");
        event.preventDefault();
        Setname(event.target.value);
        // callMyFunction();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };


  }, [setValue]);

  const handleClickShowPassword = () => setShowPassword((show) => !show);


  const Call = (password, email, id, displayname) => {

    jwtService
      .signInWithEmailAndPassword(email, password, id, displayname)
      .then((user) => {

        // window.location.href = "/calendar";
        // No need to do anything, user data will be set at app/auth/AuthContext
      })
      .catch((_errors) => {
        _errors.forEach((error) => {
          // window.location.href = "/calendar";
          /*  setError(error.type, {
              type: 'manual',
              message: error.message,
            });*/
        });
      });
  }
  function onSubmit({ email, password }) {

    fetch(
      'https://www.laabamone.com/appoint_api.php?eventtype=loginregistercompany&email='
      + email +
      '&password='
      + password
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log('yes');


          const id = result[0]['id'];

          const message = result[0]['message'];

          if (id != undefined && message == 'success') {
            setErrorval('')
            const displayname = result[0]['displayname'];
            // alert();
            // setPage('2');
            // ReactSession.set("login_cid1", id);
            localStorage.setItem("login_cid1", id);
            localStorage.setItem("login_displayname", displayname);
            localStorage.setItem('jwt_access_token', id);
            //window.location.href = "/calendar";
            Call(password, email, id, displayname)
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
  const Setname = async (a) => {

    let Storename1 = a;


    alert(Storename1);

    if (Storename1 != '' && Storename1 != null && Storename1 != undefined) {

      const response = await fetch('https://www.laabamone.com/appoint_api.php?eventtype=getregistercompany&store=' + Storename1);
      const json = await response.json();
      const mess = json[0]['message'];
      console.log(json)

      if (mess == 'success') {
        setStorename(Storename1);
        window.location.href = "/" + Storename1 + "/";
      }
      else {
        const ermess = json[0]['errormsg'];
        seterr(ermess);
      }
    }
    else {
      seterr("enter store name");
    }

  }
  return (
    <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-1 min-w-0">
      <Paper className="h-full sm:h-auto md:flex md:items-center md:justify-end w-full sm:w-auto md:h-full md:w-1/2 py-8 px-16 sm:p-48 md:p-64 sm:rounded-2xl md:rounded-none sm:shadow md:shadow-none ltr:border-r-1 rtl:border-l-1">
        <div className="w-full max-w-320 sm:w-320 mx-auto sm:mx-0">
          <img className="w-150" src="assets/images/logo/logo.png" alt="logo" />

          {Storename != '' && Storename != undefined && Storename != null ?

            <>  <Typography className="mt-32 text-4xl font-extrabold tracking-tight leading-tight">
              Sign in
            </Typography>
              <div className="flex items-baseline mt-2 font-medium" style={{ paddingBottom: '10px' }}>
                <Typography>Don't have an account?</Typography>
                {/*/sign-up */}
                <Link target="_blank" className="ml-4" to="https://labbamonefront.vercel.app/signup">
                  Sign up
                </Link>
              </div>
              {Errorval != '' && Errorval != null && Errorval != undefined &&
                <Alert severity="error">{Errorval}</Alert>
              }
              {/*}  <Typography sx={{ color: 'red' }}> {Errorval}</Typography>*/}
              <form
                name="loginForm"
                noValidate
                className="flex flex-col justify-center w-full mt-32"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mb-24"
                      label="Email"
                      autoFocus
                      type="email"
                      error={!!errors.email}
                      helperText={errors?.email?.message}
                      variant="outlined"
                      required
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mb-24"
                      label="Password"
                      type={showPassword ? 'text' : 'password'}
                      InputProps={{
                        endAdornment: <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            //onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }}
                      error={!!errors.password}
                      helperText={errors?.password?.message}
                      variant="outlined"
                      required
                      fullWidth
                    />
                  )}
                />

                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between">
                  <Controller
                    name="remember"
                    control={control}
                    render={({ field }) => (
                      <FormControl>
                        <FormControlLabel
                          label="Remember me"
                          control={<Checkbox size="small" {...field} />}
                        />
                      </FormControl>
                    )}
                  />

                  <Link className="text-md font-medium" to="/forgot-password">
                    Forgot password?
                  </Link>
                </div>

                <Button
                  variant="contained"
                  color="secondary"
                  className=" w-full mt-16"
                  aria-label="Sign in"
                  disabled={_.isEmpty(dirtyFields) || !isValid}
                  type="submit"
                  size="large"
                >
                  Sign in
                </Button>

                <div className="flex items-center mt-32">
                  <div className="flex-auto mt-px border-t" />
                  <Typography className="mx-8" color="text.secondary">
                    Or continue with
                  </Typography>
                  <div className="flex-auto mt-px border-t" />
                </div>

                <div className="flex items-center mt-32 space-x-16">
                  <Button variant="outlined" className="flex-auto">
                    <FuseSvgIcon size={20} color="action">
                      feather:facebook
                    </FuseSvgIcon>
                  </Button>
                  <Button variant="outlined" className="flex-auto">
                    <FuseSvgIcon size={20} color="action">
                      feather:twitter
                    </FuseSvgIcon>
                  </Button>
                  <Button variant="outlined" className="flex-auto">
                    <FuseSvgIcon size={20} color="action">
                      feather:github
                    </FuseSvgIcon>
                  </Button>
                </div>
              </form></>
            :
            <form
              name="loginForm"
              noValidate
              className="flex flex-col justify-center w-full mt-32"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex items-baseline mt-2 font-medium">
                <Typography>Don't have an account?&nbsp;&nbsp;</Typography>

                <a target="_blank" href="https://labbamonefront.vercel.app/signup"> Sign up</a>

              </div>
              <Typography fullWidth sx={{ padding: '10px', fontWeight: 700, fontSize: '16px', textAlign: 'center' }}>Enter Company Name</Typography>
              <Controller
                name="store_name"
                control={control}
                render={({ field }) => (
                  <TextField
                    name="store_name"
                    className="mb-24"
                    // label="Store Name"
                    autoFocus
                    type="email"
                    error={err}
                    helperText={err}
                    variant="outlined"
                    value={Storename1}
                    onChange={(e) => setStorename1(e.target.value)}
                    required
                    fullWidth
                  />
                )}
              />
              <Button
                variant="contained"
                color="secondary"
                className=" w-full mt-16"
                aria-label="Next"
                onClick={Setname}
                //  disabled={_.isEmpty(dirtyFields) || !isValid}
                type="button"
                size="large"
              >
                Next
              </Button>
            </form>



          }
        </div>
      </Paper>

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
    </div>
  );
}

export default SignInPage;
