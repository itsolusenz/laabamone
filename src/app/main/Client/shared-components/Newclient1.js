
import {TextField,Typography ,Button,Box,Link,Select,InputLabel,FormControl,MenuItem} from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

import { useEffect, useState } from 'react';
import { styled ,useTheme} from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import FuseScrollbars from '@fuse/core/FuseScrollbars';

import { motion } from 'framer-motion';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { darken } from '@mui/material/styles';


import Divider from '@mui/material/Divider';
import  Grid  from '@mui/material/Grid';
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
    label:"Female"
  },
  {
    label:"Male"
  },
  {
    label:"Non-binary "

  },
  {
    label:"Prefer not to stay"
  }
 
 
];
const clientsource = [
  {
    label:"Existing Customer"
  },
  {
    label:"Google"
  },
  {
    label:"Locanto"

  },
  {
    label:"Agent-Arun Spa"
  },
  {
      label:"Agent-Prakash"
    },
    {
      label:"Agent-Hari"
    },
    {
      label:"Walk-In"

    }
 
 
];
const language = [
  {
    label:"Select language"
  },
  {
    label:"Bulgarian"
  },
  {
    label:"Czech(cestina)"

  },
  {
    label:"Danish(dansk)"
  },
  {
      label:"German(Deutsch)"
    },
    {
      label:"Greek"
    },
    {
      label:"English(English)"

    },
    {
      label:"Spanish(espanol)"
    },
    {
      label:"Bulgarian"
    },
    {
      label:"Finnish(suomi)"

    },
    {
      label:"French(francais)"
    },
    {
        label:"Croatian(hrvaski)"
      },
      {
        label:"Hungarian(magyar)"
      },
      {
        label:"Italian(italiano)"
  
      },
      {
          label:"Lithuanian(lietuviu)"
        },
        {
          label:"Norwegian Bokmal(norsk bokmal)"
    
        },
        {
          label:"Dutch(Nederlands)"
        },
        {
          label:"Polish(polski)"
    
        },
        {
          label:"Portuguese(portugues)"
        },
        {
          label:"Romanian(romana)"
    
        },
        {
          label:"Swedish(svenska)"
        },
        {
          label:"Russian(pycckNN)"
    
        },
        {
          label:"Ukrainian(ykpaiHCbKa)"
        },
        {
          label:"Slovenian(slovenscina)"
    
        },
   
 
 
];





function Newclient(props) {
  const methods = useFormContext();
  const { t } = useTranslation('ClientPage');

  //const { control } = methods;
  const [Openmodal, setOpenModal] = useState(false);
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
    borderBottom:'1px solid #ffffff',
   // background: "linear-gradient(90deg, #387c9f 20%, #86bc55 80%)",
   // background:'#fff',
    height:'60px'
    
  }));
  return (
    <div style={{paddingTop:'20px'}}>
 
 

  <motion.div variants={container} marginTop={5} marginBottom={5} initial="hidden" animate="show" className="w-full">
      <div className="md:flex">
      <div className="flex flex-col md:w-120">&nbsp;</div>
        <div className="flex flex-col  md:ltr:pr-32 md:rtl:pl-32">
          
          
          <Card component={motion.div} variants={item} className="w-full mb-32" 
          // sx={{ backgroundColor: (theme) => darken(theme.palette.background.default, 0.05) }}
          
          sx={{backgroundColor:'#f1f5f9'}}
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
       placeholder={t('First name')} variant="outlined"
      />
                    </Grid>
                    <Grid item xs={6} >
                    <Typography className="font-semibold mb-4 text-15">{t('Last name')}</Typography>
                    <TextField fullWidth id="outlined-basic"placeholder={t('Last name')} variant="outlined" />
                    </Grid>
              </Grid>
             
             </div>
             <div className="mb-24">
              <Grid container spacing={1}>
                    <Grid item xs={12}>
                    <Typography className="font-semibold mb-4 text-15"> {t('Email address')}</Typography>
                    <TextField
            fullWidth
            placeholder={t('Email address')} variant="outlined"
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
                id="demo-simple-select"
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
                    <TextField
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
        
         {/*} <Card component={motion.div} variants={item} className="w-full mb-32" sx={{backgroundColor:'#f1f5f9'}}>
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
                <TextField fullWidth rows={5} size="small"id="outlined-basic" placeholder="E.g.allergy to shampoos with sodium" variant="outlined" />
     <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Display on all bookings" fontSize="28" />
      
    </FormGroup>
    
              </div>
             
            </CardContent>
          </Card>
     
          <Card component={motion.div} variants={item} className="w-full mb-32" 
          // sx={{ backgroundColor: (theme) => darken(theme.palette.background.default, 0.05) }}
          
          sx={{backgroundColor:'#f1f5f9'}}
          >
            <div className="px-32 pt-24">
                  <Typography className="text-2xl font-semibold leading-tight">
                  Additional info
                  </Typography> 
                 
           </div>
           <br />
           <Divider />
           <br/>
            <CardContent className="px-32 py-24">
              <div className="mb-24">
                <Typography className="font-semibold mb-4 text-15">Additional phone number</Typography>
                <PhoneInput  fullWidth/>
                
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
          </Card>*/}
          <Card component={motion.div} variants={item} className="w-full mb-32" 
          // sx={{ backgroundColor: (theme) => darken(theme.palette.background.default, 0.05) }}
          
          sx={{backgroundColor:'#f1f5f9'}}
          >
            <div className="px-32 pt-24">
                  <Typography className="text-2xl font-semibold leading-tight">
                  {t('Address')}
                  </Typography> 
                 
           </div>
           <br />
           <Divider />
           <br/>
            <CardContent className="px-32 py-24">
              <div className="mb-24">
              <AddCircleOutlineIcon style={{ color: "blue" ,fontSize:"20"}}/> 
 
              <Link underline={'none'}  sx={{ fontSize: '15px',fontWeight:'300' ,color:'blue'}}>Add new address</Link>
              </div>

             
          
         
             
              

           
            </CardContent>
          </Card>
       
          
        

       
        </div>
       
            

        <div className="flex flex-col md:w-320">
          <Card component={motion.div} variants={item} className="w-full mb-32" sx={{backgroundColor:'#f1f5f9'}}>
            <div className="flex items-center px-32 pt-24">
              <Typography className="flex flex-1 text-2xl font-semibold leading-tight">
              {t('Notifications')}
              </Typography>
              <br />
              
             {/*} <Button className="-mx-8" size="small">
                See 454 more
  </Button>*/}
            </div>

           
            <CardContent className="flex flex-wrap px-32">
            <Typography className=" mb-4 text-13">Choose how you'd like to keep this client up to date about their appointments and sales, like vouchers and memberships.</Typography>
              <br />
             <Divider />
             <div className="mb-24">
             <Typography className="font-semibold mb-4 text-15">{t('Client')} {t('Notifications')} </Typography>
             <FormGroup>
      <FormControlLabel control={<Switch defaultChecked />} label="Send email notifications"  />
      <FormControlLabel  control={<Switch defaultChecked />} label="Send text notifications"  />
    </FormGroup>
    <br/>
    <Divider/>
             </div>
             <div className="mb-24">
             <Typography className="font-semibold mb-4 text-15">{t('Marketing')} {t('Notifications')}</Typography>

             <FormGroup>
      <FormControlLabel control={<Switch defaultChecked />} label="Client accepts email marketing notifications" /><br />
      <FormControlLabel control={<Switch defaultChecked />} label="Client accepts sms marketing notifications" />
    </FormGroup>
    <br />
    <Divider/>
    <br />
    <Typography className="font-semibold mb-4 text-15">Preferred language</Typography>
    <Autocomplete
      id="tax"
     
      options={language}
      autoHighlight
      getOptionLabel={(option) => option.label}
      
      renderInput={(params) => (
        <TextField
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
           



            </CardContent>
          </Card>

         
        </div>

        
        <div className="flex flex-col md:w-120">&nbsp;</div>
      </div>
    </motion.div>


    

  
 


       
    </div>
   
  );
}

export default Newclient;
