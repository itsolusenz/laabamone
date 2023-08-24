
import {TextField,Typography ,Button,Box,Link,Select,InputLabel,FormControl,MenuItem} from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

import { useEffect, useState } from 'react';
import { styled ,useTheme} from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import FuseScrollbars from '@fuse/core/FuseScrollbars';

import { motion } from 'framer-motion';
import Card from '@mui/material/Card';
import ProductImagesTab  from './ProductImagesTab';
import CardContent from '@mui/material/CardContent';
import { darken } from '@mui/material/styles';
import clsx from 'clsx';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import  Grid  from '@mui/material/Grid';
//import Link from '@mui/material/Link';

import Autocomplete from '@mui/material/Autocomplete';

import FuseSvgIcon from '@fuse/core/FuseSvgIcon';



import IconButton from '@mui/material/IconButton';



import { position } from 'stylis';




import InputAdornment from '@mui/material/InputAdornment';


//import Switch from '@mui/material/Switch';
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


<>

<div className="relative flex flex-col flex-auto min-w-0 overflow-hidden" >
      <div className="relative pt-32 pb-48 sm:pt-10 sm:pb-96 px-10 sm:px-20 overflow-hidden">
       

        <div className="flex justify-center mt-2 sm:mt-0">
        <div className="w-full max-w-sm md:max-w-6xl">
          
        <motion.div
      
              variants={container}
              initial="hidden"
              animate="show"
              className="items-center grid grid-cols-1 md:grid-cols-2  gap-y-1 lg:gap-y-0 md:gap-x-24 lg:gap-x-30"
            >
               <div   className={clsx(
                    'flex-col  max-w-sm md:max-w-none  p-4 sm:py-14 sm:px-14 lg:rounded-4xl',
                    'lg:rounded-l-0'
                  )}
                  style={{border:'1px solid #c9c6c6',borderRadius:'20px'}} >

                <div  className="mt-4 text-2xl sm:text-2xl sm:py-14 font-bold tracking-tight leading-tight ">
                       {t('Basic info')} 
                </div>

               <div  style={{cursor:'pointer'}} className="hover">
                   
                   <div style={{paddingTop:'0px'}} className="mt-4 text-1xl sm:text-1xl font-bold tracking-tight leading-tight ">
                        <Typography className="font-semibold mb-4 text-15"> {t('First name')}</Typography>
                        <TextField
                            fullWidth
                            placeholder={t('First name')} variant="outlined"
                          />
                        </div>
                    </div>
                    <div  style={{cursor:'pointer'}} className="hover">
                   
                   <div style={{paddingTop:'0px'}} className="mt-4 text-1xl sm:text-1xl font-bold tracking-tight leading-tight ">
                        
                   <Typography className="font-semibold mb-4 text-15">{t('Last name')}</Typography>
                    <TextField fullWidth id="outlined-basic"placeholder={t('Last name')} variant="outlined" />
             
                       
                        </div>
                      
                    </div>
                    <div  style={{cursor:'pointer'}} className="hover">
                   
                   <div style={{paddingTop:'0px'}} className="mt-4 text-1xl sm:text-1xl font-bold tracking-tight leading-tight ">
                        
                   <Typography className="font-semibold mb-4 text-15"> {t('Notes')}</Typography>
                    <TextField fullWidth
          id="outlined-multiline-static"
         // label={t('Add Private Notes address')}
          multiline
          rows={6}
         // defaultValue="Default Value"
          placeholder={t('Add private notes viewable in team member settings only')}
        />      
                        </div>
                      
                    </div>
                    <div  style={{cursor:'pointer'}} className="hover">
                   
                   <div style={{paddingTop:'0px'}} className="mt-4 text-1xl sm:text-1xl font-bold tracking-tight leading-tight ">
                        
                   <Typography className="font-semibold mb-4 text-15"> {t('Profile Image')}</Typography>
                    <ProductImagesTab />
                        </div>
                      
                    </div>

               </div>
               <div   className={clsx(
                    'flex-col  max-w-sm md:max-w-none  p-4 sm:py-14 sm:px-14 lg:rounded-4xl',
                    'lg:rounded-l-0'
                  )}                  
                  style={{border:'1px solid #c9c6c6',borderRadius:'20px'}}
                  >

                <div  className="mt-4 text-2xl sm:text-2xl sm:py-14 font-bold tracking-tight leading-tight ">
                       {t('Contact')} 
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
                <div  style={{cursor:'pointer'}} className="hover">
                   
                   <div style={{paddingTop:'0px'}} className="mt-4 text-1xl sm:text-1xl font-bold tracking-tight leading-tight ">
                   <Typography className="font-semibold mb-4 text-15"> {t('Email address')}</Typography>
                    <TextField
            fullWidth
            placeholder={t('Email address')} variant="outlined"
            />
                        </div>
                </div>
                <div  className="mt-4 text-2xl sm:text-2xl sm:py-14 font-bold tracking-tight leading-tight ">
                       {t('Employment')} 
                </div>
              
               <div  style={{cursor:'pointer'}} className="hover">
                   
                   <div style={{paddingTop:'0px'}} className="mt-4 text-1xl sm:text-1xl font-bold tracking-tight leading-tight ">
                   <Typography className="font-semibold mb-4 text-15"> {t('Start Date')}</Typography>
                    <TextField
            fullWidth
            placeholder={t('Email address')} variant="outlined"
            />
                        </div>
                    </div>
                
                    <div  className="mt-4 text-2xl sm:text-2xl sm:py-14 font-bold tracking-tight leading-tight ">
                       {t('Booking')} 
                </div>
              
               <div  style={{cursor:'pointer'}} className="hover">
                   
                   <div style={{paddingTop:'0px'}} className="mt-4 text-1xl sm:text-1xl font-bold tracking-tight leading-tight ">
                  <Box className='flex'> <Switch  defaultChecked />
                   <Typography > {t('Allow calendar bookings')}<br/>Allow this team member to receive bookings on the calendar.</Typography>
                   </Box>
                        </div>
                    </div>
               </div>
              
       
          </motion.div> 
        

       
        </div>
 </div>
 </div>
 </div>









   
    </>
  );
}

export default Newclient;
