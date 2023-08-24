import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { lighten } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { ReactSession } from 'react-client-session';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { EventAvailable, StarBorder, CalendarMonth } from '@mui/icons-material';
import * as yup from 'yup';
import PhoneInput from 'react-phone-input-2'
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormHelperText from '@mui/material/FormHelperText';
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

function TimelineTab() {
  const [data, setData] = useState(null);
  const [compdata, setcompData] = useState([]);
  const { control, formState, handleSubmit, reset } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { isValid, dirtyFields, errors, setError } = formState;
  const [Page, setPage] = useState('1');
  const [Errorval, setErrorval] = useState('');
  const [compname, setcompname] = useState('');
  const [storename, setstorename] = useState('');
  const [dispname, setdispname] = useState('');
  const [emailval, setemailval] = useState('');
  const [mobileval, setmobileval] = useState('');


  useEffect(() => {
    axios.get('/api/profile/timeline').then((res) => {
      setData(res.data);
    });
    const getcompdata = async () => {
      const compid = ReactSession.get("login_cid1");
      if (compid != '' && compid != null && compid != undefined) {
        const response = await fetch('https://www.laabamone.com/appoint_api.php?eventtype=getregistercompany&id=' + compid);
        const json = await response.json();
        console.log(json);

        setcompname(json[0]['companyname'])
        setstorename(json[0]['storename'])
        setdispname(json[0]['displayname'])
        setemailval(json[0]['email'])
        setmobileval(json[0]['mobile'])
        setcompData(json);
      }
    }
    getcompdata();


  }, []);
  const Root = styled('div')(({ theme }) => ({
    '& .username, & .email': {
      transition: theme.transitions.create('opacity', {
        duration: theme.transitions.duration.shortest,
        easing: theme.transitions.easing.easeInOut,
      }),
    },

    '& .avatar': {
      background: theme.palette.background.default,
      transition: theme.transitions.create('all', {
        duration: theme.transitions.duration.shortest,
        easing: theme.transitions.easing.easeInOut,
      }),
      bottom: 0,
      '& > img': {
        borderRadius: '50%',
      },
    },
  }));
  if (!data) {
    return null;
  }

  const container = {
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  function onSubmit({ companyname, storename, displayName, password, email }) {
    // alert();
    const compid = ReactSession.get("login_cid1");
    str = "&id=" + compid;
    fetch(
      'https://www.laabamone.com/appoint_api.php?eventtype=registercompany' + str + '&companyname='
      + compname +
      '&storename='
      + storename + '&dispname=' +
      displayName +
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
            ReactSession.set("login_cid1", id);
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
  const textChange = (e) => {
    const value = e.target.value
    this.setState({ value })
  }
  if (compdata.length > '0') {
    return (


      <motion.div variants={container} initial="hidden" animate="show" className="w-full">
        <div className="md:flex">
          <div className="flex flex-col w-full md:w-320 md:ltr:mr-32 md:rtl:ml-32">
            <Card component={motion.div} variants={item} className="flex flex-col w-full px-32 pt-24">
              <div className="flex justify-between items-center pb-16">
                <Grid container item xs={'12'} justifyContent={'center'}>
                  <Root className="user relative flex flex-col items-center justify-center p-16 pb-14 shadow-0">

                    <div className="flex items-center justify-center mb-24">
                      <Avatar
                        sx={{
                          backgroundColor: 'background.paper',
                          color: 'text.secondary',
                        }}
                        className="avatar text-32 font-bold w-96 h-96"
                        src={``}
                        alt={``}
                      >
                        S
                      </Avatar>
                    </div>



                    <Typography className="text-2xl font-semibold leading-tight whitespace-nowrap ">
                      {compdata[0]['displayname']}
                    </Typography>

                  </Root>


                </Grid>



              </div>

              <CardContent className="p-0">

                <Typography color="inherit" size="small" className="font-medium -mx-8" >
                  <ul>
                    <li style={{ padding: "5px 0px" }}>
                      <EventAvailable /> Joined  {compdata[0]['date']}
                    </li>
                    <li style={{ padding: "5px 0px" }}>
                      <StarBorder /> No reviews
                    </li>
                    <li style={{ padding: "5px 0px" }}>
                      <CalendarMonth /> No Appointment Booked Yey
                    </li>
                  </ul>
                </Typography>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col flex-1">


            <Card component={motion.div} variants={item} className="mb-32">


              <CardContent>
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
                        onChange={(e) => setcompname(e.target.value)}
                        value={compname}
                        className="mb-24"
                        label="Comapny name"
                        autoFocus
                        type="name"
                        // error={!!errors.companyname}
                        //  helperText={errors?.companyname?.message}
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
                        onChange={(e) => setstorename(e.target.value)}
                        value={storename}
                        autoFocus
                        type="name"
                        // error={!!errors.storename}
                        //  helperText={errors?.storename?.message}
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
                        onChange={(e) => setdispname(e.target.value)}
                        value={dispname}
                        // error={!!errors.displayName}
                        //helperText={errors?.displayName?.message}
                        variant="outlined"
                        required
                        fullWidth
                      />
                    )}
                  />

                  <Controller
                    name="mobile"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        className="mb-24"
                        label="Mobile"
                        type="text"
                        onChange={(e) => setmobileval(e.target.value)}
                        value={mobileval}
                        // error={!!errors.mobile}
                        //  helperText={errors?.email?.mobile}
                        variant="outlined"
                        required
                        fullWidth
                      />
                    )}
                  />

                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        className="mb-24"
                        label="Email"
                        type="email"
                        onChange={(e) => setemailval(e.target.value)}
                        value={emailval}
                        // error={!!errors.email}
                        // helperText={errors?.email?.message}
                        variant="outlined"
                        required
                        fullWidth
                      />
                    )}
                  />
                  {/*<SignUp />
            <br />*/}

                  <Button
                    variant="contained"
                    color="secondary"
                    className="w-full mt-24"
                    aria-label="Register"
                    // disabled={_.isEmpty(dirtyFields) || !isValid}
                    type="submit"
                    size="large"
                  >
                    Update
                  </Button>


                  <br />
                  <Box
                    className="card-footer flex flex-col px-32 py-24 border-t-1"
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                          ? lighten(theme.palette.background.default, 0.4)
                          : lighten(theme.palette.background.default, 0.02),
                    }}
                  >


                    <div className="flex flex-auto -mx-4">

                      <div className="flex flex-col flex-1 mx-4 items-end">

                        <div>

                        </div>
                      </div>
                    </div>
                  </Box>


                </form >



              </CardContent>




            </Card>

          </div>






        </div>
        <div className="md:flex">
          <div className="flex flex-col w-full md:w-320 md:ltr:mr-32 md:rtl:ml-32">
            <Card component={motion.div} variants={item} className="flex flex-col w-full px-32 pt-24">
              <div className="flex justify-between items-center pb-16">
                <Typography className="text-2xl font-semibold leading-tight">
                  Change password
                </Typography>

              </div>

              { }  <CardContent className="p-0">
                <List className="p-0">
                  To make an update, enter your existing password followed by a new one. If you don't know your existing password, you can log out and use the Reset Password link on the Log In page.              </List>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col flex-1">


            <Card component={motion.div} variants={item} className="mb-32">


              <CardContent>
                <TextField
                  className="p-12 w-full"
                  label="Current password"
                  placeholder="Current password"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <FuseSvgIcon size={20}>heroicons-solid:key</FuseSvgIcon>
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  className="p-12 w-full"

                  label="confirm password"
                  placeholder="confirm password"
                  id="Phone Number"
                  //  error={!!errors.address}
                  // helperText={errors?.address?.message}
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <FuseSvgIcon size={20}>heroicons-solid:eye</FuseSvgIcon>
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  className="p-12 w-full"

                  label="New password"
                  placeholder="New password"

                  variant="outlined"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <FuseSvgIcon size={20}>heroicons-solid:eye</FuseSvgIcon>
                      </InputAdornment>
                    ),
                  }}
                />
              </CardContent>

              <Box
                className="card-footer flex flex-col px-32 py-24 border-t-1"
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                      ? lighten(theme.palette.background.default, 0.4)
                      : lighten(theme.palette.background.default, 0.02),
                }}
              >


                <div className="flex flex-auto -mx-4">

                  <div className="flex flex-col flex-1 mx-4 items-end">

                    <div>
                      <Button variant="contained" color="secondary" size="small">
                        Save
                      </Button>
                    </div>
                  </div>
                </div>
              </Box>


            </Card>












          </div>
        </div>
      </motion.div>
    );
  } else { return (<>Loading....</>); }


}

export default TimelineTab;
