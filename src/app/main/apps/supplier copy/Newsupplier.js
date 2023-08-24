/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable import/no-duplicates */
/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable prefer-template */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import { React, useEffect, useState, useRef } from 'react';
import {
    TextField,
    Typography,
    Button,
    Box,
    Link,
    Select,
    InputLabel,
    FormControl,
    MenuItem,
    IconButton
} from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { styled, useTheme } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import FusePageSimple from '@fuse/core/FusePageSimple';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import { motion } from 'framer-motion';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { darken } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';

import Input from '@mui/material/Input';

import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

import {
    selectFilteredContacts,
    selectSearchText,
    setContactsSearchText,
} from './store/contactsSlice';


import FormControlLabel from '@mui/material/FormControlLabel';
import 'react-phone-input-2/lib/style.css';
import Checkbox from '@mui/material/Checkbox';
import { useTranslation } from 'react-i18next';




const Root = styled(FusePageSimple)(({ theme }) => ({
    '& .FusePageSimple-header': {
        backgroundColor: theme.palette.background.paper,
    },
}));

function Newclient(props) {

    const methods = useFormContext();
    const { t } = useTranslation('ClientPage');
    const searchText = useSelector(selectSearchText);
    const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
    const [OpenAddressmodal, setOpenAddressmodal] = useState(false);
    const [Openmodal, setOpenModal] = useState(false);
    const [Countrylist, setCountrylist] = useState([]);
    const [suppliername, setsuppliername] = useState([]);
    const [description, setdescription] = useState([]);
    const [Firstname, setFirstname] = useState([]);
    const [Lastname, setLastname] = useState();
    const [Email, setEmail] = useState();
    const [Mobno, setMobno] = useState();
    const [Mobno1, setMobno1] = useState();
    const [Mobcode, setMobcode] = useState('1');
    const [Mobcode1, setMobcode1] = useState('1');
    const [Info, setInfo] = useState();
    const [Source, setSource] = useState();
    const [website, setwebsite] = useState();
    const [Postcode, setPostcode] = useState();

    const [Add1name, setAdd1name] = useState('');
    const [Add2name, setAdd2name] = useState('');
    const [Adddistrict, setAdddistrict] = useState('');
    const [Addcity, setAddcity] = useState('');
    const [Addcountry, setAddcountry] = useState('');
    const [Addstate, setAddstate] = useState('');
    const [checkedsameas, setcheckedsameas] = useState(true);
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

    useEffect(() => {

        const getcountylist = async () => {
            const response = await fetch('https://www.laabamone.com/appoint_api.php?eventtype=countylist');
            const json = await response.json();
            console.log(json.length);
            setCountrylist(json);
            // return json;
        }

        getcountylist();
    }, [])






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
        height: '60px',
    }));
    const setClose = () => {

        setOpenModal(false);
    };
    const savesupplier = async () => {
        console.log(Firstname);
        console.log(Lastname);
        console.log(Email);
        console.log(Mobno);
        console.log(Mobcode);
        console.log(checkedsameas);
        let sameas = '1';
        if (checkedsameas == false) {
            sameas = '0';
        }

        fetch(
            'https://www.laabamone.com/appoint_api.php?eventtype=supplieradd&firstname=' +
            Firstname +
            '&lastname=' +
            Lastname +
            '&suppliername=' +
            suppliername +
            '&description=' +
            description +
            '&website=' +
            website +
            '&email=' +
            Email +
            '&mob_code=' +
            Mobcode +
            '&mob_no=' +
            Mobno +
            '&mob_code1=' +
            Mobcode1 +
            '&mob_no1=' +
            Mobno1 +
            '&sameas=' +
            sameas +
            '&address1=' +
            Add1name +
            '&address2=' +
            Add2name +
            '&city=' +
            Addcity +
            '&state=' +
            Addstate +
            '&postcode=' +
            Postcode +
            '&country=' +
            Addcountry

        )
            .then((res) => res.json())
            .then(
                (result) => {
                    console.log('yes');
                    console.log(result);
                },
                (error) => {
                    console.log('no');
                    console.log(error);
                }
            );
    };
    return (




        <>









            <Root
                header=
                {
                    <Box sx={{ width: '100%' }} marginTop={5} marginBottom={5}  >

                        <IconButton className="m-4 absolute top-0  z-999" onClick={(e) => (setClose())} size="large">

                        </IconButton>

                        <Typography align={'center'} className="text-28 font-semibold leading-none">Add a new Supplier</Typography>


                        <Button
                            className="m-4 absolute top-0 right-0 z-999 whitespace-nowrap"
                            variant="contained"
                            color="primary"
                            sx={{ padding: '0px 50px' }}
                            onClick={() => savesupplier()}
                        //  startIcon={<FuseSvgIcon size={20}>heroicons-solid:mail</FuseSvgIcon>}
                        >
                            Save
                        </Button>
                    </Box>

                }
                content={<div className="w-full" style={{ padding: '0px 90px', backgroundColor: '#fff' }}>
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-6 gap-24 w-full min-w-0 p-24"
                        variants={container}
                        initial="hidden"
                        animate="show"
                    >
                        <motion.div variants={item} className="sm:col-span-3 lg:col-span-4">
                            <motion.div variants={item} className="sm:col-span-4">
                                <Card component={motion.div} variants={item} className="w-full mb-32"
                                    // sx={{ backgroundColor: (theme) => darken(theme.palette.background.default, 0.05) }}

                                    sx={{ backgroundColor: '#fff', border: '1px solid #f1f1f1' }}
                                >
                                    <div className="px-32 pt-24">
                                        <Typography className="text-2xl font-semibold leading-tight">
                                            {t('Supplier details')}

                                        </Typography>
                                    </div>
                                    <br />
                                    <Divider />
                                    <CardContent className="px-32 py-24">

                                        <div className="mb-24">
                                            <Grid container spacing={1}>
                                                <Grid item xs={12}>
                                                    <Typography className="font-semibold mb-4 text-15"> {t('Supplier name')}</Typography>
                                                    <TextField
                                                        fullWidth
                                                        placeholder={t('Supplier name')} value={suppliername} onChange={(e) => setsuppliername(e.target.value)} variant="outlined"
                                                    />
                                                </Grid>
                                                <Grid item xs={12} >
                                                    <Typography className="font-semibold mb-4 text-15">{t('Supplier Description')}</Typography>
                                                    <TextField fullWidth id="outlined-basic" placeholder={t('Description')} value={description} onChange={(e) => setdescription(e.target.value)} variant="outlined" />
                                                </Grid>
                                            </Grid>

                                        </div>









                                    </CardContent>
                                </Card>
                            </motion.div>


                        </motion.div>

                        <motion.div variants={item} className="sm:col-span-3 lg:col-span-4">
                            <motion.div variants={item} className="sm:col-span-4">
                                <Card component={motion.div} variants={item} className="w-full mb-32"
                                    // sx={{ backgroundColor: (theme) => darken(theme.palette.background.default, 0.05) }}

                                    sx={{ backgroundColor: '#fff', border: '1px solid #f1f1f1' }}
                                >
                                    <div className="px-32 pt-24">
                                        <Typography className="text-2xl font-semibold leading-tight">
                                            {t('Contact Info')}

                                        </Typography>
                                    </div>
                                    <br />
                                    <Divider />
                                    <CardContent className="px-32 py-24">

                                        <div className="mb-24">
                                            <Grid container spacing={1}>
                                                <Grid item xs={12}>
                                                    <Typography className="font-semibold mb-4 text-15"> {t('First name')}</Typography>
                                                    <TextField
                                                        fullWidth
                                                        placeholder={t('First name')} value={Firstname} onChange={(e) => setFirstname(e.target.value)} variant="outlined"
                                                    />
                                                </Grid>

                                            </Grid>

                                        </div>
                                        <div className="mb-24">
                                            <Grid container spacing={1}>
                                                <Grid item xs={12}>
                                                    <Typography className="font-semibold mb-4 text-15">{t('Last name')}</Typography>
                                                    <TextField fullWidth id="outlined-basic" placeholder={t('Last name')} value={Lastname} onChange={(e) => setLastname(e.target.value)} variant="outlined" />

                                                </Grid>

                                            </Grid>

                                        </div>

                                        <div className="mb-24">
                                            <Grid container spacing={1}>
                                                <Grid item xs={12} >
                                                    <Typography className="font-semibold mb-4 text-15">{t('Mobile number')}</Typography>
                                                </Grid>
                                                <Grid item xs={3} >
                                                    <FormControl fullWidth>

                                                        <Select
                                                            labelId="demo-simple-select-label"
                                                            id="demo-simple-select" value={Mobcode} onChange={(e) => setMobcode(e.target.value)}


                                                        >
                                                            <MenuItem value="1">India IN (+ 91)</MenuItem>
                                                            <MenuItem value="2">EN (+ 1)</MenuItem>
                                                            <MenuItem value="3">AU (+ 61)</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={9} >

                                                    <TextField value={Mobno} onChange={(e) => setMobno(e.target.value)}
                                                        fullWidth
                                                        variant="outlined"
                                                    />
                                                </Grid>


                                            </Grid>

                                        </div>
                                        <div className="mb-24">
                                            <Grid container spacing={1}>
                                                <Grid item xs={12} >
                                                    <Typography className="font-semibold mb-4 text-15">{t('Telephone')}</Typography>
                                                </Grid>
                                                <Grid item xs={3} >
                                                    <FormControl fullWidth>

                                                        <Select
                                                            labelId="demo-simple-select-label"
                                                            id="demo-simple-select" value={Mobcode1} onChange={(e) => setMobcode1(e.target.value)}


                                                        >
                                                            <MenuItem value="1">India IN (+ 91)</MenuItem>
                                                            <MenuItem value="2">EN (+ 1)</MenuItem>
                                                            <MenuItem value="3">AU (+ 61)</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={9} >

                                                    <TextField value={Mobno1} onChange={(e) => setMobno1(e.target.value)}
                                                        fullWidth
                                                        variant="outlined"
                                                    />
                                                </Grid>


                                            </Grid>

                                        </div>

                                        <div className="mb-24">
                                            <Grid container spacing={1}>
                                                <Grid item xs={12}>
                                                    <Typography className="font-semibold mb-4 text-15"> {t('Email address')}</Typography>
                                                    <TextField
                                                        fullWidth
                                                        placeholder={`eg.mail@example.com`} value={Email} onChange={(e) => setEmail(e.target.value)} variant="outlined"
                                                    />
                                                </Grid>

                                            </Grid>

                                        </div>


                                        <div className="mb-24">
                                            <Grid container spacing={1}>

                                                <Grid item xs={12}>
                                                    <Typography className="font-semibold mb-4 text-15">{t('Website')}</Typography>
                                                    <TextField value={website} onChange={(e) => setwebsite(e.target.value)}
                                                        fullWidth
                                                        placeholder={`eg.www.google.com`} variant="outlined"
                                                    />
                                                </Grid>

                                            </Grid>
                                        </div>


                                    </CardContent>
                                </Card>
                            </motion.div>
                            <motion.div variants={item} className="sm:col-span-4">
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


                                        <Grid container spacing={1}>
                                            <Grid items xs={12} md={12}>
                                                <Typography className="text-m font-semibold leading-tight">
                                                    Street</Typography>
                                                <TextField


                                                    style={{
                                                        fontWeight: 'bold',
                                                        color: 'red',
                                                    }}
                                                    className="mt-8 mb-16"
                                                    id="description"
                                                    placeholder={`Eg. 12 Main Street`}
                                                    type="text"
                                                    value={Add1name}
                                                    onChange={(e) => setAdd1name(e.target.value)}
                                                    variant="outlined"
                                                    fullWidth


                                                />
                                            </Grid>

                                            <Grid items xs={12} md={12}>
                                                <Typography className="text-m font-semibold leading-tight">
                                                    Suburb
                                                </Typography>
                                                <TextField

                                                    className="mt-8 mb-16"
                                                    id="description"
                                                    value={Add2name}
                                                    onChange={(e) => setAdd2name(e.target.value)}
                                                    type="text"
                                                    variant="outlined"
                                                    fullWidth
                                                />

                                            </Grid>


                                            <Grid items xs={12} md={6} >
                                                <Typography className="text-m font-semibold leading-tight">
                                                    City
                                                </Typography>

                                                <TextField
                                                    value={Addcity}
                                                    onChange={(e) => setAddcity(e.target.value)}
                                                    className="mt-8 mb-16"
                                                    id="description"

                                                    type="text"


                                                    variant="outlined"
                                                    fullWidth

                                                />
                                            </Grid>
                                            <Grid items xs={12} md={6} >
                                                <Typography className="text-m font-semibold leading-tight">
                                                    State
                                                </Typography>

                                                <TextField
                                                    value={Addstate}
                                                    onChange={(e) => setAddstate(e.target.value)}
                                                    className="mt-8 mb-16"
                                                    id="description"
                                                    type="text"


                                                    variant="outlined"
                                                    fullWidth

                                                />
                                            </Grid>
                                            <Grid items xs={12} md={12}>
                                                <Typography className="text-m font-semibold leading-tight">
                                                    Zip / Postalcode</Typography>
                                                <TextField


                                                    style={{
                                                        fontWeight: 'bold',
                                                        color: 'red',
                                                    }}
                                                    className="mt-8 mb-16"
                                                    id="description"
                                                    type="text"
                                                    value={Postcode} onChange={(e) => setPostcode(e.target.value)}
                                                    variant="outlined"
                                                    fullWidth


                                                />
                                            </Grid>
                                            <Grid items xs={12} md={12}>
                                                <Typography fullWidth className="text-m font-semibold leading-tight">
                                                    Country
                                                </Typography>
                                            </Grid>
                                            <Grid items xs={12} md={12}>


                                                <Select fullWidth className="mt-8 mb-16" value={Addcountry} onChange={(e) => setAddcountry(e.target.value)}>
                                                    {Countrylist.map((c, a) =>
                                                        <MenuItem value={c.id} key={a}>{c.name} {c.sortname} -{c.phonecode} </MenuItem>

                                                    )}

                                                </Select>



                                            </Grid>
                                            <Grid items xs={12} md={12}>
                                                <FormControlLabel
                                                    control={<Checkbox defaultChecked value={checkedsameas} onClick={() => setcheckedsameas(!checkedsameas)}
                                                    />}
                                                    label="Same as Postal Address"
                                                    labelPlacement="end"
                                                />


                                            </Grid>




                                        </Grid>


                                    </CardContent>
                                </Card>
                            </motion.div>

                        </motion.div>




                    </motion.div>
                </div>
                }


                scroll={isMobile ? 'normal' : 'content'}
            />


        </>

    );
}

export default Newclient;
