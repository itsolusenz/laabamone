
import { TextField, Typography, Button, Box, Link, Select, InputLabel, FormControl, MenuItem } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

import { useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import FusePageSimple from '@fuse/core/FusePageSimple';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import { motion } from 'framer-motion';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { darken } from '@mui/material/styles';


import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
//import Link from '@mui/material/Link';

import Autocomplete from '@mui/material/Autocomplete';

import FuseSvgIcon from '@fuse/core/FuseSvgIcon';



import IconButton from '@mui/material/IconButton';



import { position } from 'stylis';




import InputAdornment from '@mui/material/InputAdornment';


import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'
import Checkbox from '@mui/material/Checkbox';

import { useTranslation } from 'react-i18next';





const gender = [
  {
    label: "Female"
  },
  {
    label: "Male"
  },
  {
    label: "Non-binary "

  },
  {
    label: "Prefer not to stay"
  }


];
const clientsource = [
  {
    label: "Existing Customer"
  },
  {
    label: "Google"
  },
  {
    label: "Locanto"

  },
  {
    label: "Agent-Arun Spa"
  },
  {
    label: "Agent-Prakash"
  },
  {
    label: "Agent-Hari"
  },
  {
    label: "Walk-In"

  }


];
const language = [
  {
    label: "Select language"
  },
  {
    label: "Bulgarian"
  },
  {
    label: "Czech(cestina)"

  },
  {
    label: "Danish(dansk)"
  },
  {
    label: "German(Deutsch)"
  },
  {
    label: "Greek"
  },
  {
    label: "English(English)"

  },
  {
    label: "Spanish(espanol)"
  },
  {
    label: "Bulgarian"
  },
  {
    label: "Finnish(suomi)"

  },
  {
    label: "French(francais)"
  },
  {
    label: "Croatian(hrvaski)"
  },
  {
    label: "Hungarian(magyar)"
  },
  {
    label: "Italian(italiano)"

  },
  {
    label: "Lithuanian(lietuviu)"
  },
  {
    label: "Norwegian Bokmal(norsk bokmal)"

  },
  {
    label: "Dutch(Nederlands)"
  },
  {
    label: "Polish(polski)"

  },
  {
    label: "Portuguese(portugues)"
  },
  {
    label: "Romanian(romana)"

  },
  {
    label: "Swedish(svenska)"
  },
  {
    label: "Russian(pycckNN)"

  },
  {
    label: "Ukrainian(ykpaiHCbKa)"
  },
  {
    label: "Slovenian(slovenscina)"

  },



];


const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    backgroundColor: theme.palette.background.paper,
  },
}));


function Newclient(props) {
  const methods = useFormContext();
  const { t } = useTranslation('ClientPage');
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

  //const { control } = methods;
  const [Openmodal, setOpenModal] = useState(false);
  const [Firstname, setFirstname] = useState();
  const [Lastname, setLastname] = useState();
  const [Email, setEmail] = useState();
  const [Mobno, setMobno] = useState();
  const [Mobcode, setMobcode] = useState();
  const [Gender, setGender] = useState();
  const [Dob, setDob] = useState();
  const theme = useTheme();
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
  const StyledSwipeableDrawer = styled(SwipeableDrawer)(({ theme }) => ({
    '& .MuiDrawer-paper': {
      backgroundColor: theme.palette.background.default,
      width: '100%',
    },
  }));
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    //  padding: theme.spacing(0, 5),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    borderBottom: '1px solid #ffffff',
    // background: "linear-gradient(90deg, #387c9f 20%, #86bc55 80%)",
    // background:'#fff',
    height: '60px'

  }));
  const setClose = () => {
    setOpenModal(false);
  }
  const saveclient = async () => {

    console.log(Firstname);
    console.log(Lastname);
    console.log(Email);
    console.log(Mobno);
    console.log(Mobcode);
    console.log(Gender);
    console.log(Dob);

    fetch("https://www.laabamone.com/appoint_api.php?eventtype=clientadd&firstname=" + Firstname + "&lastname=" + Lastname + "&email=" + Email + "&mob_code=" + Mobcode + "&mob_no=" + Mobno + "&gender=" + Gender + "&dob=" + Dob)
      .then(res => res.json())
      .then(
        (result) => {
          console.log('yes');
          console.log(result);
        },
        (error) => {
          console.log('no');
          console.log(error);

        }
      )
  }
  return (



    <Root
      header=
      {
        <Box sx={{ width: '100%', borderBottom: '1px solid #bfc3c7', paddingBottom: '20px' }} marginTop={5} marginBottom={5} >

          <IconButton className="m-4 absolute top-0  z-999" onClick={(e) => (setClose())} size="large">
            <FuseSvgIcon color="action">heroicons-outline:x</FuseSvgIcon>

          </IconButton>

          <Typography align={'center'} className="text-28 font-semibold leading-none">{t('Add a new client')}</Typography>


          <Button onClick={() => saveclient()}
            className="m-4 absolute top-8 right-10 z-999 whitespace-nowrap"
            variant="contained"
            color="primary"
            sx={{ padding: '0px 50px' }}
          //  startIcon={<FuseSvgIcon size={20}>heroicons-solid:mail</FuseSvgIcon>}
          >
            {t('Save')}
          </Button>
        </Box>


      }
      content={

        <div className="w-full" style={{ paddingTop: '20px', backgroundColor: '#fff' }}>

          <motion.div initial="hidden" animate="show" className="w-full">
            <div className="w-full md:flex">
              <div className="flex flex-col md:w-120">&nbsp;</div>

              <div className="flex flex-col md:w-520">
                <div className="flex flex-col  md:ltr:pr-32 md:rtl:pl-32">
                  <Card component={motion.div} variants={item} className="w-full mb-32"
                    // sx={{ backgroundColor: (theme) => darken(theme.palette.background.default, 0.05) }}

                    sx={{ backgroundColor: '#fff', border: '1px solid #f1f1f1' }}
                  >
                    <div className="px-32 pt-24">
                      <Typography className="text-2xl font-semibold leading-tight">
                        {t('Basic info')}

                      </Typography>
                    </div>
                    <br />
                    <Divider />
                    <CardContent className="px-32 py-24">

                      <div className="mb-24">
                        <Grid container spacing={1}>
                          <Grid item xs={6}>
                            <Typography className="font-semibold mb-4 text-15"> {t('First name')}</Typography>
                            <TextField
                              fullWidth
                              placeholder={t('First name')} value={Firstname} onChange={(e) => setFirstname(e.target.value)} variant="outlined"
                            />
                          </Grid>
                          <Grid item xs={6} >
                            <Typography className="font-semibold mb-4 text-15">{t('Last name')}</Typography>
                            <TextField fullWidth id="outlined-basic" placeholder={t('Last name')} value={Lastname} onChange={(e) => setLastname(e.target.value)} variant="outlined" />
                          </Grid>
                        </Grid>

                      </div>
                      <div className="mb-24">
                        <Grid container spacing={1}>
                          <Grid item xs={12}>
                            <Typography className="font-semibold mb-4 text-15"> {t('Email address')}</Typography>
                            <TextField
                              fullWidth
                              placeholder={t('Email address')} value={Email} onChange={(e) => setEmail(e.target.value)} variant="outlined"
                            />
                          </Grid>

                        </Grid>

                      </div>
                      <div className="mb-24">
                        <Grid container spacing={1}>

                          <Grid item xs={3} >
                            <Typography className="font-semibold mb-4 text-15">{t('Code')}</Typography>
                            <FormControl fullWidth>
                              <InputLabel id="demo-simple-select-label">{t('Code')}</InputLabel>

                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select" value={Mobcode} onChange={(e) => setMobcode(e.target.value)}
                                //  value={age}
                                label="Age"
                              //  onChange={handleChange}
                              >
                                <MenuItem value={'1'}>IN (+ 91)</MenuItem>
                                <MenuItem value={'2'}>EN (+ 1)</MenuItem>
                                <MenuItem value={'3'}>AU (+ 61)</MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid item xs={9} >
                            <Typography className="font-semibold mb-4 text-15">{t('Mobile number')}</Typography>
                            <TextField value={Mobno} onChange={(e) => setMobno(e.target.value)}
                              fullWidth
                              placeholder={t('Mobile number')} variant="outlined"
                            />
                          </Grid>


                        </Grid>

                      </div>





                      <div className="mb-24">
                        <Grid container spacing={1}>
                          <Grid item xs={6}>
                            <Typography className="font-semibold mb-4 text-15">{t('Gender')}</Typography>
                            <FormControl fullWidth>

                              <InputLabel id="demo-simple-select-label">{t('Gender')}</InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                //  value={age} 
                                value={Gender} onChange={(e) => setGender(e.target.value)}
                                label={t('Gender')}
                              //  onChange={handleChange}
                              >
                                <MenuItem value={'1'}>{t('Male')}</MenuItem>
                                <MenuItem value={'2'}>{t('Female')}</MenuItem>
                                <MenuItem value={'3'}>{t('Not to Specify')}</MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography className="font-semibold mb-4 text-15">{t('Date of birth')}</Typography>
                            <TextField
                              fullWidth
                              id="date"
                              value={Dob} onChange={(e) => setDob(e.target.value)}
                              type="date"
                              defaultValue="2017-05-24"
                              InputLabelProps={{
                                shrink: true,
                              }}
                            />
                          </Grid>
                        </Grid>
                      </div>


                    </CardContent>
                  </Card>
                  <Card component={motion.div} variants={item} className="w-full mb-32"
                    // sx={{ backgroundColor: (theme) => darken(theme.palette.background.default, 0.05) }}

                    sx={{ backgroundColor: '#fff', border: '1px solid #f1f1f1' }}
                  >
                    <div className="px-32 pt-24">
                      <Typography className="text-2xl font-semibold leading-tight">
                        {t('Address')}
                      </Typography>

                    </div>
                    <br />
                    <Divider />
                    <br />
                    <CardContent className="px-32 py-24">
                      <div className="mb-24">


                        <Link underline={'none'} sx={{ fontSize: '15px', fontWeight: '300', color: 'blue' }}><AddCircleOutlineIcon />  {t('Add')} {t('New')} {t('Address')}</Link>
                      </div>








                    </CardContent>
                  </Card>
                  <Card component={motion.div} variants={item} className="w-full mb-32" sx={{ backgroundColor: '#fff', border: '1px solid #f1f1f1' }}>
                    <div className="px-32 pt-24">
                      <Typography className="text-2xl font-semibold leading-tight">Important client info</Typography>

                      <Typography className=" mb-4 text-13">Important client info will only be visible to you and team members.
                      </Typography>
                    </div>
                    <br />
                    <Divider />
                    <CardContent className="px-32 py-24">
                      <div className="mb-24">
                        <Typography className="font-semibold mb-4 text-15">Client info</Typography>
                        <TextField fullWidth rows={5} size="small" id="outlined-basic" placeholder="E.g.allergy to shampoos with sodium" variant="outlined" />
                        <FormGroup>
                          <FormControlLabel control={<Checkbox defaultChecked />} label="Display on all bookings" fontSize="28" />

                        </FormGroup>

                      </div>

                    </CardContent>
                  </Card>

                  <Card component={motion.div} variants={item} className="w-full mb-32"
                    // sx={{ backgroundColor: (theme) => darken(theme.palette.background.default, 0.05) }}

                    sx={{ backgroundColor: '#fff', border: '1px solid #f1f1f1' }}
                  >
                    <div className="px-32 pt-24">
                      <Typography className="text-2xl font-semibold leading-tight">
                        Additional info
                      </Typography>

                    </div>
                    <br />
                    <Divider />
                    <br />
                    <CardContent className="px-32 py-24">
                      <div className="mb-24">
                        <Typography className="font-semibold mb-4 text-15">Additional phone number</Typography>
                        <PhoneInput fullWidth />

                      </div>

                      <div className="mb-24">
                        <Typography className="font-semibold mb-4 text-15">Client source</Typography>
                        <Autocomplete
                          id="tax"

                          options={clientsource}
                          autoHighlight
                          getOptionLabel={(option) => option.label}

                          renderInput={(params) => (
                            <TextField
                              size="small"
                              placeholder='Select an option'
                              {...params}

                              inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password', // disable autocomplete and autofill
                              }}
                            />
                          )}
                        />
                      </div>



                    </CardContent>
                  </Card>






                </div>
              </div>


              <div className="flex flex-col md:w-320">
                <Card component={motion.div} variants={item} className="w-full mb-32"
                  sx={{ backgroundColor: '#fff', border: '1px solid #f1f1f1' }}>
                  <div className="flex items-center px-32 pt-24">
                    <Typography className="flex flex-1 text-2xl font-semibold leading-tight">
                      {t('Notifications')}
                    </Typography>
                    <br />


                  </div>


                  <CardContent className="flex flex-wrap px-32">
                    <Typography className=" mb-4 text-13">Choose how you'd like to keep this client up to date about their appointments and sales, like vouchers and memberships.</Typography>
                    <br />
                    <Divider />
                    <div className="mb-24">
                      <Typography className="font-semibold mb-4 text-15">{t('Client')} {t('Notifications')} </Typography>
                      <FormGroup>
                        <FormControlLabel control={<Switch defaultChecked />} label="Send email notifications" />
                        <FormControlLabel control={<Switch defaultChecked />} label="Send text notifications" />
                      </FormGroup>


                    </div>
                    <div className="flex flex-col md:w-320">
                      <Divider />
                    </div>
                    <div className="flex flex-col md:w-320">
                      <div className="mb-24" >
                        <br />


                        <Typography className="font-semibold mb-4 text-15">Preferred language</Typography>
                        <Autocomplete
                          id="tax"

                          options={language}
                          autoHighlight
                          getOptionLabel={(option) => option.label}

                          renderInput={(params) => (
                            <TextField fullWidth
                              size="small"
                              placeholder='Select language'
                              {...params}

                              inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password', // disable autocomplete and autofill
                              }}
                            />
                          )}
                        />





                      </div>
                    </div>



                  </CardContent>
                </Card>


              </div>


              <div className="flex flex-col md:w-120">&nbsp;</div>
            </div>
          </motion.div>









        </div>
      }
      scroll={isMobile ? 'normal' : 'content'}
    />

  );
}

export default Newclient;
