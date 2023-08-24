import InputAdornment from '@mui/material/InputAdornment';
import {TextField,Typography ,Button,Box,Link} from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { useEffect, useState } from 'react';
import { styled ,useTheme} from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from '@mui/material/IconButton';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
//import Typography from '@mui/material/Typography';
//import Box from '@mui/material/Box';
import { position } from 'stylis';
//import TextField from '@mui/material/TextField';
import { motion } from 'framer-motion';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { darken } from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete';
//import InputAdornment from '@mui/material/InputAdornment';
import Divider from '@mui/material/Divider';
import  Grid  from '@mui/material/Grid';
//import Link from '@mui/material/Link';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FormHelperText from '@mui/material/FormHelperText';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

function PricingTab(props) {
  const methods = useFormContext();
  const measure = [
    {
      label:"Milliliters (ml)"
    },
    {
      label:"Liters (l)"
    },
    {
      label:"Fluid ounces (Fl.oz.)"

    },
    {
      label:"Grams(g)"
    },
    {
      label:"Killograms(kg)"
    },
    {
      label:"Gallons(gal)"
    },
    {
      label:"Ounces(oz)"
    },
    {
      label:"Pounds(lb)"
    },
    {
      label:"Centimeters(cm)"
    },
    {
      label:"Feet(ft)"
    },
    {
      label:"Inches(in))"
    },
    {
      label:"A Whole product"
    },
  ];
  
  const tax = [
    {
      label:"Default: No tax"
    },
    {
      label:" No tax"
    },
    {
      label:"GST(12%)"
    }
  ];

  const { control } = methods;
  const [Openmodal, setOpenModal] = useState(false);
  const [Closemodal, setCloseModal] = useState(true);
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
  const setClose =() => {
    alert();
    setCloseModal(true);
    setOpenModal(false);
  }
  return (
    
   
  
   <Box sx={{width:'100%'}} marginTop={5} marginBottom={5}  >
     
      <IconButton className="m-4 absolute top-0  z-999" onClick={(e) => (setClose())} size="large">
             <FuseSvgIcon color="action">heroicons-outline:x</FuseSvgIcon>

       </IconButton> 

    <Typography   align={'center'} className="text-28 font-semibold leading-none">New Product</Typography>
    
    
 <Button 
            className="m-4 absolute top-0 right-0 z-999 whitespace-nowrap"
            variant="contained"
            color="primary"
            sx={{padding:'0px 50px'}}
          //  startIcon={<FuseSvgIcon size={20}>heroicons-solid:mail</FuseSvgIcon>}
          >
           Save
          </Button>
   </Box>
  
 


       
   
  );
}

export default PricingTab;
