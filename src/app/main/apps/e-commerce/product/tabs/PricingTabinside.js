import InputAdornment from '@mui/material/InputAdornment';
import { TextField, Typography, Button, Box, Link } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import React, { useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
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
import Grid from '@mui/material/Grid';
//import Link from '@mui/material/Link';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FormHelperText from '@mui/material/FormHelperText';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import FusePageSimple from '@fuse/core/FusePageSimple';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    backgroundColor: theme.palette.background.paper,
  },
}));
function PricingTab(props) {
  const methods = useFormContext();
  const measure = [
    {
      label: "Milliliters (ml)"
    },
    {
      label: "Liters (l)"
    },
    {
      label: "Fluid ounces (Fl.oz.)"

    },
    {
      label: "Grams(g)"
    },
    {
      label: "Killograms(kg)"
    },
    {
      label: "Gallons(gal)"
    },
    {
      label: "Ounces(oz)"
    },
    {
      label: "Pounds(lb)"
    },
    {
      label: "Centimeters(cm)"
    },
    {
      label: "Feet(ft)"
    },
    {
      label: "Inches(in))"
    },
    {
      label: "A Whole product"
    },
  ];

  const tax = [
    {
      label: "Default: No tax"
    },
    {
      label: " No tax"
    },
    {
      label: "GST(12%)"
    }
  ];

  // const { control } = methods;
  const [Openmodal, setOpenModal] = useState(false);
  const [Page, setPage] = useState('1');
  const [name, setname] = useState('');
  const [barcode, setbarcode] = useState('');
  const [brand, setbrand] = useState('1');
  const [measures, setmeasures] = useState('');
  const [amount, setamount] = useState('');
  const [shortdesc, setshortdesc] = useState('5');
  const [proddesc, setproddesc] = useState([]);
  const [prodcat, setprodcat] = useState([]);
  const [supplyprice, setsupplyprice] = useState('2');
  const [retailsprice, setretailsprice] = useState([]);
  const [markup, setmarkup] = useState([]);
  const [taxval, settaxval] = useState([]);
  const [commission, setcommission] = React.useState('1');
  const [stockqty, setstockqty] = React.useState([]);
  const [reorderquantity, setreorderquantity] = React.useState([]);
  const [stocknote, setstocknote] = React.useState(true);
  const [snackopen, setsnackopen] = React.useState(false);
  const [state, setState] = React.useState({
    snackopen: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal } = state;
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
  const saveProduct = async () => {


    const a = '';
    let stocknotification = '0';
    if (stocknote == true) {
      stocknotification = '1';
    }
    fetch(
      'https://www.laabamone.com/appoint_api.php?eventtype=productadd&id='
      + a + '&name=' +
      name +
      '&barcode=' +
      barcode +
      '&brand=' +
      brand +
      '&measures=' +
      measures +
      '&amount=' +
      amount +
      '&shortdesc=' +
      shortdesc +
      '&proddesc=' +
      proddesc +
      '&prodcat=' +
      prodcat +
      '&supplyprice=' +
      supplyprice +
      '&commission=' +
      supplyprice +
      '&retailsprice=' +
      retailsprice +
      '&markup=' +
      markup +
      '&taxval=' +
      taxval +
      '&stockqty=' +
      stockqty +
      '&reorderquantity=' +
      reorderquantity +
      '&stocknote=' +
      stocknote
    )
      .then((res) => res.json())
      .then(
        (result) => {

          console.log('yes');
          setsnackopen(true);
          console.log(result);
        },
        (error) => {
          console.log('no');
          console.log(error);
        }
      );




  }
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  return (


    <Root
      header=
      {
        <Box sx={{ width: '100%' }} marginTop={5} marginBottom={5}  >

          <IconButton className="m-4 absolute top-0  z-999" onClick={(e) => (setClose())} size="large">
            <FuseSvgIcon color="action">heroicons-outline:x</FuseSvgIcon>

          </IconButton>

          <Typography align={'center'} className="text-28 font-semibold leading-none">New Product</Typography>


          <Button onClick={() => saveProduct()}
            className="m-4 absolute top-0 right-0 z-999 whitespace-nowrap"
            variant="contained"
            color="primary"
            sx={{ padding: '0px 50px' }}
          //  startIcon={<FuseSvgIcon size={20}>heroicons-solid:mail</FuseSvgIcon>}
          >
            Save
          </Button>
        </Box>
      }

      content={


        <motion.div variants={container} marginTop={1} marginBottom={5} initial="hidden" animate="show" className="w-full">
          <div className="md:flex">
            <div className="flex flex-col md:w-120">&nbsp;</div>
            <div className="flex flex-col flex-1 md:ltr:pr-32 md:rtl:pl-32">


              <Card component={motion.div} variants={item} className="w-full mb-32"
                // sx={{ backgroundColor: (theme) => darken(theme.palette.background.default, 0.05) }}

                sx={{ backgroundColor: '#f1f5f9' }}
              >
                <div className="px-32 pt-24">
                  <Typography className="text-2xl font-semibold leading-tight">
                    Basic info
                  </Typography>
                </div>
                <br />
                <Divider />
                <CardContent className="px-32 py-24">
                  <div className="mb-24">
                    <Typography className="font-semibold mb-4 text-15">Product Name</Typography>
                    <TextField
                      required
                      value={name} onChange={(e) => setname(e.target.value)}
                      variant="outlined"
                      fullWidth
                    />

                  </div>

                  <div className="mb-24">
                    <Typography className="font-semibold mb-4 text-15">Product barcode</Typography>
                    <TextField
                      required
                      value={barcode} onChange={(e) => setbarcode(e.target.value)}
                      variant="outlined"
                      fullWidth
                      placeholder='UPC,EAN,GTIN'
                    />

                  </div>
                  <div className="mb-24">
                    <Typography className="font-semibold mb-4 text-15">Product brand</Typography>
                    <Link href="brand">Select a brand</Link>
                  </div>

                  <div className="mb-24">
                    <Grid container spacing={1}>
                      <Grid item xs={6} >
                        <Typography className="font-semibold mb-4 text-15">Measure</Typography>
                        <Autocomplete
                          id="measure"
                          value={measures} onChange={(e) => setmeasures(e.target.value)}
                          options={measure}
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
                      </Grid>

                      <Grid item xs={6} >
                        <Typography className="font-semibold mb-4 text-15">Amount</Typography>
                        <TextField
                          value={amount} onChange={(e) => setamount(e.target.value)}

                          InputProps={{
                            startAdornment: <InputAdornment position="start">ml</InputAdornment>,

                          }}

                          variant="outlined"
                          placeholder='0.00'

                        />

                      </Grid>

                    </Grid>
                  </div>
                  <div className="mb-24">
                    <Typography className="font-semibold mb-4 text-15"> Short description</Typography>
                    <TextField
                      required
                      value={shortdesc} onChange={(e) => setshortdesc(e.target.value)}

                      variant="outlined"
                      fullWidth
                    />

                  </div>

                  <Typography className="font-semibold mb-4 text-15"> Product description</Typography>
                  <TextField
                    required
                    rows={5}
                    value={proddesc} onChange={(e) => setproddesc(e.target.value)}
                    variant="outlined"
                    fullWidth
                  />



                  <div className="mb-24">
                    <Typography className="font-semibold mb-4 text-15">Product category</Typography>
                    <Link href="category">Select a category</Link>
                  </div>

                </CardContent>
              </Card>


              <Card component={motion.div} variants={item} className="w-full mb-32" sx={{ backgroundColor: '#f1f5f9' }}>
                <div className="px-32 pt-24">
                  <Typography className="text-2xl font-semibold leading-tight">Pricing</Typography>
                </div>
                <br />
                <Divider />
                <CardContent className="px-32 py-24">
                  <div className="mb-24">
                    <Typography className="font-semibold mb-4 text-15">Supply price</Typography>
                    <TextField

                      value={supplyprice} onChange={(e) => setsupplyprice(e.target.value)}
                      InputProps={{
                        startAdornment: <InputAdornment position="start">INR</InputAdornment>,

                      }}

                      variant="outlined"
                      placeholder='0.00'
                      fullWidth
                    />
                  </div>
                  <Divider />
                  <br />

                  <div className="mb-24">
                    <Typography className="font-semibold mb-4 text-15">Retail sales</Typography>
                    <Typography className=" mb-4 text-13">Allow sales of this product at checkout.</Typography>
                  </div>
                  <div className="mb-24">
                    <FormGroup>
                      <FormControlLabel control={<Switch defaultChecked />} label="Enable retail sales" />
                    </FormGroup>
                  </div>
                  <div className="mb-24">
                    <Grid container spacing={1}>
                      <Grid item xs={4} >
                        <Typography className="font-semibold mb-4 text-15">Retail price</Typography>
                        <TextField

                          value={retailsprice} onChange={(e) => setretailsprice(e.target.value)}
                          InputProps={{
                            startAdornment: <InputAdornment position="start">INR</InputAdornment>,

                          }}

                          variant="outlined"
                          placeholder='0.00'

                        />


                      </Grid>
                      <Grid item xs={4} >
                        <Typography className="font-semibold mb-4 text-15">Special price</Typography>
                        <TextField


                          InputProps={{
                            startAdornment: <InputAdornment position="start">INR</InputAdornment>,

                          }}

                          variant="outlined"
                          placeholder='0.00'

                        />
                      </Grid>
                      <Grid item xs={4} >
                        <Typography className="font-semibold mb-4 text-15">Markup</Typography>
                        <TextField

                          value={markup} onChange={(e) => setmarkup(e.target.value)}

                          InputProps={{
                            startAdornment: <InputAdornment position="start">%</InputAdornment>,

                          }}

                          variant="outlined"
                          placeholder='0.00'

                        />
                      </Grid>
                    </Grid>
                  </div>
                  <div className="mb-24">
                    <Typography className="font-semibold mb-4 text-15">Tax</Typography>
                    <Autocomplete
                      id="tax"
                      value={taxval} onChange={(e) => settaxval(e.target.value)}
                      options={tax}
                      autoHighlight
                      getOptionLabel={(option) => option.label}

                      renderInput={(params) => (
                        <TextField
                          size="small"

                          {...params}

                          inputProps={{
                            ...params.inputProps,
                            autoComplete: 'new-password', // disable autocomplete and autofill
                          }}
                          fullWidth
                        />
                      )}
                    />
                  </div>
                  <Divider />
                  <br />
                  <div className="mb-24">
                    <Typography className="font-semibold mb-4 text-15">Team member commission</Typography>
                    <Typography className=" mb-4 text-13">Calculate team member commission when the product is sold.</Typography>
                    <FormGroup>
                      <FormControlLabel control={<Switch defaultChecked />} label="Enable team member commission" />
                    </FormGroup>
                  </div>


                </CardContent>
              </Card>



              <Card component={motion.div} variants={item} className="w-full mb-32"
                // sx={{ backgroundColor: (theme) => darken(theme.palette.background.default, 0.05) }}

                sx={{ backgroundColor: '#f1f5f9' }}
              >
                <div className="px-32 pt-24">
                  <Typography className="text-2xl font-semibold leading-tight">
                    Inventory
                  </Typography>
                  <Typography className=" mb-4 text-13">Manage stock levels of this product through Fresha.</Typography>
                </div>
                <br />
                <Divider />
                <br />
                <CardContent className="px-32 py-24">
                  <div className="mb-24">
                    <Typography className="font-semibold mb-4 text-15">SKU (Stock Keeping Unit)</Typography>
                    <TextField
                      required


                      variant="outlined"
                      fullWidth
                    />

                  </div>

                  <div className="mb-24">

                    <Link>Generate SKU automatically</Link>
                    <br />
                    <AddCircleOutlineIcon style={{ color: "blue", fontSize: "20" }} /><Link > Add another SKU code</Link>
                  </div>
                  <Divider />

                  <div className="mb-24">
                    <Typography className="font-semibold mb-4 text-15">Supplier</Typography>
                    <Link href="supplier">Select a supplier</Link>
                  </div>

                  <Divider />
                  <div className="mb-24">
                    <Typography className="font-semibold mb-4 text-15">Stock quantity</Typography>
                    <FormGroup>
                      <FormControlLabel control={<Switch defaultChecked value={stockqty} onChange={(e) => setstockqty(e.target.value)} />} label="Track stock quantity" />
                    </FormGroup>
                    <Typography className="font-semibold mb-4 text-15">Current stock quantity</Typography>
                    <TextField
                      value={stockqty} onChange={(e) => setstockqty(e.target.value)}
                      required
                      InputProps={{
                        startAdornment: <InputAdornment position="start">0</InputAdornment>,

                      }}

                      variant="outlined"
                      fullWidth
                    />

                  </div>

                  <br />
                  <Divider />
                  <br />
                  <div className="mb-24">
                    <Typography className="font-semibold mb-4 text-15">Low stock and reordering</Typography>
                    <Typography className=" mb-4 text-13">Fresha will automatically notify you and pre-fill the reorder quantity set for future stock orders. <Link>Learn more</Link></Typography>
                    <br />
                  </div>

                  <div className="mb-24">
                    <Grid container spacing={1}>
                      <Grid item xs={6} >
                        <Typography className="font-semibold mb-4 text-15">Low stock level</Typography>
                        <TextField


                          InputProps={{
                            startAdornment: <InputAdornment position="start">0</InputAdornment>,

                          }}

                          variant="outlined"


                        />
                        <FormHelperText id="standard-weight-helper-text">Low stock level is required</FormHelperText>

                      </Grid>

                      <Grid item xs={6} >
                        <Typography className="font-semibold mb-4 text-15">Reorder quantity</Typography>
                        <TextField
                          value={reorderquantity} onChange={(e) => setreorderquantity(e.target.value)}

                          InputProps={{
                            startAdornment: <InputAdornment position="start">0</InputAdornment>,

                          }}

                          variant="outlined"


                        />
                        <FormHelperText id="standard-weight-helper-text">The default amount to order</FormHelperText>

                      </Grid>

                    </Grid>
                  </div>

                  <FormGroup>
                    <FormControlLabel control={<Switch defaultChecked />} label="Receive low stock notification" />
                  </FormGroup>




                </CardContent>
              </Card>


            </div>



            <div className="flex flex-col md:w-320">
              <Card component={motion.div} variants={item} className="w-full mb-32" sx={{ backgroundColor: '#f1f5f9' }}>
                <div className="flex items-center px-32 pt-24">
                  <Typography className="flex flex-1 text-2xl font-semibold leading-tight">
                    Product photos
                  </Typography>
                  <br />

                  {/*} <Button className="-mx-8" size="small">
                See 454 more
  </Button>*/}
                </div>

                <CardContent className="flex flex-wrap px-32">
                  <Typography className=" mb-4 text-13">Drag and drop a photo to change the order.</Typography>
                  <br />
                  <Divider />
                  <div style={{ marginLeft: '2%', marginTop: '2px', width: '100%', height: '100%' }}>
                    <Box color="black" bgcolor="#B2DFFB" p={1} border={1} borderColor="#DFDFDE">
                      <Grid container direction="row" justifyContent="center" alignItems="center">



                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br /><PhotoCameraIcon /><br /> <Typography className=" mb-4 text-13">Add a photo</Typography>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                      </Grid>
                    </Box>

                  </div>


                </CardContent>
              </Card>


            </div>
            <div className="flex flex-col md:w-120">&nbsp;</div>
          </div>
        </motion.div>




      }
      scroll={isMobile ? 'normal' : 'content'}
    />






  );
}

export default PricingTab;
