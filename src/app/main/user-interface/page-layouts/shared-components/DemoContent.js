import Button from '@mui/material/Button';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { useEffect, useState } from 'react';
import { styled ,useTheme} from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from '@mui/material/IconButton';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { position } from 'stylis';
import TextField from '@mui/material/TextField';
import { motion } from 'framer-motion';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { darken } from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import Divider from '@mui/material/Divider';
import  Grid  from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FormHelperText from '@mui/material/FormHelperText';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';



/*
import Button from '@mui/material/Button';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { useEffect, useState } from 'react';
import { styled ,useTheme} from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from '@mui/material/IconButton';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import Typography from '@mui/material/Typography';
import  Box  from '@mui/material/Box';
import  Divider  from '@mui/material/Divider';
import  Link  from '@mui/material/Link';

import Autocomplete from '@mui/material/Autocomplete';
import { position } from 'stylis';
import TextField from '@mui/material/TextField';
import { motion } from 'framer-motion';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { darken } from '@mui/material/styles';*/
import { lazy } from 'react';
const Product = lazy(() => import('../../../apps/e-commerce/product/Product'));
const Products = lazy(() => import('../../../apps/e-commerce/products/Products'));
function DemoContent() {
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
    <div className="flex-auto p-24 sm:p-40">
      <div className="h-7xl min-h-7xl max-h-7xl border-2 border-dashed rounded-2xl" >
   {/*}   <StyledSwipeableDrawer
      open={Openmodal}
      anchor="right"
      onOpen={(ev) => {}}
      onClose={(e) => (setOpenModal(!Openmodal))}
      disableSwipeToOpen
    >
      <DrawerHeader>
      <Box sx={{width:'100%'}}   >
      <IconButton className="m-4 absolute top-0  z-999" onClick={(e)=>(setOpenModal(false))} size="large">
             <FuseSvgIcon color="action">heroicons-outline:x</FuseSvgIcon>
       </IconButton> 
       <Typography align={'center'} className="text-28 font-semibold leading-none">New Product</Typography>
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
              </DrawerHeader>
  
    
  
  <FuseScrollbars>

  <motion.div variants={container} initial="hidden" animate="show" className="w-full">
      <div className="md:flex">
      <div className="flex flex-col md:w-120">&nbsp;</div>
        <div className="flex flex-col flex-1 md:ltr:pr-32 md:rtl:pl-32">
          
          
          <Card component={motion.div} variants={item} className="w-full mb-32" 
          // sx={{ backgroundColor: (theme) => darken(theme.palette.background.default, 0.05) }}
          
          sx={{backgroundColor:'#f1f5f9'}}
          >
            <div className="px-32 pt-24">
                  <Typography className="text-2xl font-semibold leading-tight">
                     Basic Info
                  </Typography> 
           </div>

            <CardContent className="px-32 py-24">
              <div className="mb-24">
                <Typography className="font-semibold mb-4 text-15">Product Name</Typography>
                      <TextField                     
                        required                     
                        label="Product Name"
                        autoFocus                      
                        variant="outlined"
                        fullWidth
                      />
                
              </div>

              <div className="mb-24">
              <Typography className="font-semibold mb-4 text-15">Product barcode</Typography>
                      <TextField                     
                        required                     
                        label="Product Name"
                        autoFocus                      
                        variant="outlined"
                        fullWidth
                      />
              
              </div>

             
            </CardContent>
          </Card>

          <Card component={motion.div} variants={item} className="w-full mb-32" sx={{backgroundColor:'#f1f5f9'}}>
            <div className="px-32 pt-24">
              <Typography className="text-2xl font-semibold leading-tight">Pricing</Typography>
            </div>

            <CardContent className="px-32 py-24">
              <div className="mb-24">
                <Typography className="font-semibold mb-4 text-15">Occupation</Typography>
               
              </div>

              <div className="mb-24">
                <Typography className="font-semibold mb-4 text-15">Skills</Typography>
               
              </div>

            
            </CardContent>
          </Card>
          <Card component={motion.div} variants={item} className="w-full mb-32" 
          // sx={{ backgroundColor: (theme) => darken(theme.palette.background.default, 0.05) }}
          
          sx={{backgroundColor:'#f1f5f9'}}
          >
            <div className="px-32 pt-24">
                  <Typography className="text-2xl font-semibold leading-tight">
                     Basic Info
                  </Typography> 
           </div>

            <CardContent className="px-32 py-24">
              <div className="mb-24">
                <Typography className="font-semibold mb-4 text-15">Product Name</Typography>
                      <TextField                     
                        required                     
                        label="Product Name"
                        autoFocus                      
                        variant="outlined"
                        fullWidth
                      />
                
              </div>

              <div className="mb-24">
              <Typography className="font-semibold mb-4 text-15">Product barcode</Typography>
                      <TextField                     
                        required                     
                        label="Product Name"
                        autoFocus                      
                        variant="outlined"
                        fullWidth
                      />
              
              </div>

             
            </CardContent>
          </Card>
            <Card component={motion.div} variants={item} className="w-full mb-32" 
          // sx={{ backgroundColor: (theme) => darken(theme.palette.background.default, 0.05) }}
          
          sx={{backgroundColor:'#f1f5f9'}}
          >
            <div className="px-32 pt-24">
                  <Typography className="text-2xl font-semibold leading-tight">
                     Basic Info
                  </Typography> 
           </div>

            <CardContent className="px-32 py-24">
              <div className="mb-24">
                <Typography className="font-semibold mb-4 text-15">Product Name</Typography>
                      <TextField                     
                        required                     
                        label="Product Name"
                        autoFocus                      
                        variant="outlined"
                        fullWidth
                      />
                
              </div>

              <div className="mb-24">
              <Typography className="font-semibold mb-4 text-15">Product barcode</Typography>
                      <TextField                     
                        required                     
                        label="Product Name"
                        autoFocus                      
                        variant="outlined"
                        fullWidth
                      />
              
              </div>

             
            </CardContent>
          </Card>  <Card component={motion.div} variants={item} className="w-full mb-32" 
          // sx={{ backgroundColor: (theme) => darken(theme.palette.background.default, 0.05) }}
          
          sx={{backgroundColor:'#f1f5f9'}}
          >
            <div className="px-32 pt-24">
                  <Typography className="text-2xl font-semibold leading-tight">
                     Basic Info
                  </Typography> 
           </div>

            <CardContent className="px-32 py-24">
              <div className="mb-24">
                <Typography className="font-semibold mb-4 text-15">Product Name</Typography>
                      <TextField                     
                        required                     
                        label="Product Name"
                        autoFocus                      
                        variant="outlined"
                        fullWidth
                      />
                
              </div>

              <div className="mb-24">
              <Typography className="font-semibold mb-4 text-15">Product barcode</Typography>
                      <TextField                     
                        required                     
                        label="Product Name"
                        autoFocus                      
                        variant="outlined"
                        fullWidth
                      />
              
              </div>

             
            </CardContent>
          </Card>  <Card component={motion.div} variants={item} className="w-full mb-32" 
          // sx={{ backgroundColor: (theme) => darken(theme.palette.background.default, 0.05) }}
          
          sx={{backgroundColor:'#f1f5f9'}}
          >
            <div className="px-32 pt-24">
                  <Typography className="text-2xl font-semibold leading-tight">
                     Basic Info
                  </Typography> 
           </div>

            <CardContent className="px-32 py-24">
              <div className="mb-24">
                <Typography className="font-semibold mb-4 text-15">Product Name</Typography>
                      <TextField                     
                        required                     
                        label="Product Name"
                        autoFocus                      
                        variant="outlined"
                        fullWidth
                      />
                
              </div>

              <div className="mb-24">
              <Typography className="font-semibold mb-4 text-15">Product barcode</Typography>
                      <TextField                     
                        required                     
                        label="Product Name"
                        autoFocus                      
                        variant="outlined"
                        fullWidth
                      />
              
              </div>

             
            </CardContent>
          </Card>
       
        </div>

        <div className="flex flex-col md:w-320">
          <Card component={motion.div} variants={item} className="w-full mb-32" sx={{backgroundColor:'#f1f5f9'}}>
            <div className="flex items-center px-32 pt-24">
              <Typography className="flex flex-1 text-2xl font-semibold leading-tight">
                Product photos
              </Typography>

             <Button className="-mx-8" size="small">
                See 454 more
  </Button>
            </div>

            <CardContent className="flex flex-wrap px-32">
             
            </CardContent>
          </Card>

          
        </div>
        <div className="flex flex-col md:w-120">&nbsp;</div>
      </div>
    </motion.div>


    
 </FuseScrollbars>
  
      </StyledSwipeableDrawer>

*/}






              <Product/>


    {/*}  <Button onClick={(e)=>(setOpenModal(!Openmodal))}
            className="whitespace-nowrap"
            variant="contained"
            color="primary"
            startIcon={<FuseSvgIcon size={20}>heroicons-solid:mail</FuseSvgIcon>}
          >
            Add Product
</Button>*/}
      </div>
    </div>
  );
}

export default DemoContent;
