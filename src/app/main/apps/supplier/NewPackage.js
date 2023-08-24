/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable import/no-duplicates */
/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable prefer-template */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import React, { useEffect, useState, useRef } from 'react';
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
    IconButton,
    DialogTitle
} from '@mui/material';
import AccordionDetails from '@mui/material/AccordionDetails';
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
import MuiAlert from '@mui/material/Alert';
import Input from '@mui/material/Input';
import Switch from '@mui/material/Switch';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Snackbar from '@mui/material/Snackbar';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import {
    selectFilteredContacts,
    selectSearchText,
    setContactsSearchText,
} from './store/contactsSlice';
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';
import FormControlLabel from '@mui/material/FormControlLabel';
import 'react-phone-input-2/lib/style.css';
import Checkbox from '@mui/material/Checkbox';
import { useTranslation } from 'react-i18next';
import Paper from '@mui/material/Paper';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import ClearIcon from '@mui/icons-material/Clear';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import clsx from 'clsx';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
import DialogActions from '@mui/material/DialogActions';
const Root = styled(FusePageSimple)(({ theme }) => ({
    '& .FusePageSimple-header': {
        backgroundColor: theme.palette.background.paper,
    },
}));

function NewPackage(props) {

    const { typeval, onClosePackage, Packageid } = props;
    console.log(props);
    const methods = useFormContext();
    const { t } = useTranslation('ClientPage');
    const searchText = useSelector(selectSearchText);
    const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
    const [OpenAddressmodal, setOpenAddressmodal] = useState(false);
    const [Openmodal, setOpenModal] = useState(false);
    const [getPack, setPack] = useState([]);
    const [Cat, setCat] = useState([]);
    const [getTeam, setTeam] = useState([]);
    const [getTaxlist, setTaxlist] = useState([]);
    const [packcat, setpackcat] = useState([]);
    const [Countrylist, setCountrylist] = useState([]);
    const [servicename, setservicename] = useState([]);
    const [servicecat, setservicecat] = useState([]);
    const [serdescription, setserdescription] = useState([]);
    const [afterdescription, setafterdescription] = useState([]);
    const [seravail, setseravail] = useState([]);
    const [onlinebook, setonlinebook] = useState(true);
    const [teammem, setteammem] = useState();
    const [teammemcom, setteammemcom] = useState();
    const [extratime, setextratime] = useState();
    const [upsell, setupsell] = useState('1');
    const [taxval, settaxval] = useState('2');
    const [Openservicmodal, Servicmodal] = useState(false);

    const [checkedsameas, setcheckedsameas] = useState(true);
    const [expanded, setExpanded] = useState(false);
    const toggleAccordion = (panel) => (event, _expanded) => {
        setExpanded(_expanded ? panel : false);
    };
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
    const [totalpackprice, settotalpackprice] = useState('0');
    const [multiPackagelist, setmultiPackagelist] = useState([]);

    const [Pricinglist, setPricinglist] = useState([{ duration: "0", ptype: "0", price: "0", sprice: "0", pname: "" }]);
    const ChangePricinglist = (e, index) => {
        const { name, value } = e.target;
        const list = [...Pricinglist];
        list[index][name] = value;
        setPricinglist(list);
        console.log(Pricinglist);
    };
    const handleRemoveClickPricinglist = index => {

        const list = [...Pricinglist];
        list.splice(index, 1);
        setPricinglist(list);

    };
    const AddPricinglist = () => {


        setPricinglist([...Pricinglist, { duration: "0", ptype: "0", price: "0", sprice: "0", pname: "" }]);
    };
    const StyledAccordion = styled(Accordion)(({ theme }) => ({
        margin: 0,
        border: 'none!important',
        borderRadius: '8px!important',
        marginBottom: 24,
        '&:before': {
            display: 'none',
        },
        '&:first-of-type': {},
        '&:last-of-type': {
            marginBottom: 0,
        },
    }));
    useEffect(() => {

        // console.log()

        const getpackcat = async () => {

            const response = await fetch('https://www.laabamone.com/appoint_api.php?eventtype=packagecategorylist');
            const json = await response.json();
            // console.log(json);
            setpackcat(json);

        }
        const gettax = async () => {

            const response = await fetch('https://www.laabamone.com/appoint_api.php?eventtype=taxlist');
            const json = await response.json();
            // console.log(json);
            setTaxlist(json);

        }
        const getteam = async () => {

            const response = await fetch('https://www.laabamone.com/appoint_api.php?eventtype=teamlist');
            const json = await response.json();
            console.log(json);
            const len = json.length;
            let teamid = '';

            if (len > '0') {
                for (let i = 0; i < len; i++) {
                    teamid += json[i]['id'];
                    teamid += ',';
                }
                //  let f = teamid.slice(0, -1);

            }
            //  alert(teamid);
            setteammem(teamid);
            setTeam(json);

        }
        const getcountylist = async () => {
            const response = await fetch('https://www.laabamone.com/appoint_api.php?eventtype=countylist');
            const json = await response.json();
            console.log(json.length);
            setCountrylist(json);
            // return json;
        }
        const getpackpricinglist = async (a) => {

            let string = '';
            if (a != null && a != undefined && a != '' && a != '0') {
                string += '&id=' + a;
            }
            const response = await fetch('https://www.laabamone.com/appoint_api.php?eventtype=packagepricinglist' + string);
            const json = await response.json();
            console.log(json);
            setPricinglist(json);
        }
        const getpacklist = async (a) => {

            let string = '';
            if (a != null && a != undefined && a != '' && a != '0') {
                string += '&id=' + a;
            }

            const response = await fetch('https://www.laabamone.com/appoint_api.php?eventtype=packagelist' + string);
            const json = await response.json();
            // console.log('----------------' + json);
            setPack(json);
            //   alert(json[0]['servicename']);
            setservicename(json[0]['servicename']);
            setservicecat(json[0]['servicecategory']);
            setserdescription(json[0]['servicedescription']);
            setafterdescription(json[0]['afterdescription']);
            setonlinebook(json[0]['onlinebooking']);
            setteammem(json[0]['teammember']);
            setteammemcom(json[0]['teammembercommission']);
            setextratime(json[0]['extratime']);
            setupsell(json[0]['upsell']);
            setseravail(json[0]['serviceavaliable']);


            // return json;
        }
        if (Packageid != null && Packageid != undefined && Packageid != '' && Packageid != '0') {
            getpacklist(Packageid);
            getpackpricinglist(Packageid);
        }
        gettax();
        getteam();
        getpackcat();
        getcountylist();

    }, [typeval, props, Packageid])




    const setcheckedteammem = async (a) => {
        const teammem1 = teammem + ',' + a;
        setteammem(teammem1);



    }

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
    const handleClose = () => {
        setOpen(false);
    };

    const Calladdpricing = (a) => {

        console.log(Pricinglist.length);
        if (Pricinglist.length > '0') {
            let ii = '';
            let inc = '0';
            let duration = '0';
            let ptype = '0';
            let price = '0';
            let sprice = '0';
            let pname = '0';

            if (Pricinglist.length >= '1' && Pricinglist[0].duration != '0') {
                for (ii = '0'; ii < Pricinglist.length; ii++) {

                    if (Pricinglist[ii].duration != '' && Pricinglist[ii].duration != '0') {
                        duration += '--' + Pricinglist[ii].duration;
                        if (Pricinglist[ii].ptype != '') {
                            ptype += '--' + Pricinglist[ii].ptype;
                        }
                        else {
                            ptype += '--' + '0';
                        }
                        if (Pricinglist[ii].price != '') {
                            price += '--' + Pricinglist[ii].price;
                        }
                        else {
                            price += '--' + '0';
                        }
                        if (Pricinglist[ii].sprice != '') {
                            sprice += '--' + Pricinglist[ii].sprice;
                        }
                        else {
                            sprice += '--' + '0';
                        }
                        if (Pricinglist[ii].pname != '') {
                            pname += '--' + Pricinglist[ii].pname;
                        }
                        else {
                            pname += '--' + '0';
                        }


                    }
                    inc = parseInt(inc) + 1;

                }
                /* console.log('duration', duration);
                 console.log('ptype', ptype);
                 console.log('price', price);
                 console.log('sprice', sprice);
                 console.log('pname', pname);*/
                fetch(
                    'https://www.laabamone.com/appoint_api.php?eventtype=packagepriceingadd&pid=' + a + '&duration=' +
                    duration +
                    '&ptype=' +
                    ptype +
                    '&price=' +
                    price +
                    '&sprice=' +
                    sprice +
                    '&pname=' +
                    pname

                )
                    .then((res) => res.json())
                    .then(
                        (result) => {

                            console.log('yes');
                            //alert(inc);
                            // alert(Pricinglist.length);
                            console.log(Pricinglist.length);
                            console.log(inc);
                            if (inc == Pricinglist.length) {
                                onClosePackage('success');
                            }
                            // onClosePackage('success');
                            // setsnackopen(true);
                            console.log(result);
                        },
                        (error) => {
                            console.log('no');
                            console.log(error);
                        }
                    );
            }
            else {
                onClosePackage('success');
            }





        }
    }
    const savepackage = async () => {


        const packtype = typeval;


        let onlinebook1 = '1';
        if (onlinebook == false) {
            onlinebook1 = '0';
        }
        let teammemcom1 = '0';
        if (onlinebook == true) {
            teammemcom1 = '1'
        }
        let extratime1 = '0';
        if (extratime == true) {
            extratime1 = '1'
        }
        let upsell1 = '0';
        if (upsell == true) {
            upsell1 = '1'
        }
        console.log(servicename);
        console.log(servicecat);
        console.log(serdescription);
        console.log(afterdescription);
        console.log(seravail);
        console.log(onlinebook1);
        console.log(teammem);
        console.log(teammemcom1);
        console.log(extratime1);
        console.log(upsell1);
        console.log('--' + packtype);
        let groupserviceid = '';
        if (typeval == '2') {
            let k = '';
            {
                if (multiPackagelist.length > 0) {
                    for (k = '0'; k < multiPackagelist.length; k++) {
                        groupserviceid += multiPackagelist[k].id + ',';
                    }
                }
                groupserviceid = groupserviceid.substring(0, groupserviceid.length - 1)
            }
        }
        let string = '';
        if (Packageid != null && Packageid != undefined && Packageid != '' && Packageid != '0') {
            string += '&cid=' + Packageid;
        }

        fetch(
            'https://www.laabamone.com/appoint_api.php?eventtype=packageadd&servicetype='
            + packtype + ''
            + string + '&groupserviceid='
            + groupserviceid + '&servicename=' +
            servicename +
            '&servicecategory=' +
            servicecat +
            '&servicedescription=' +
            serdescription +
            '&afterdescription=' +
            afterdescription +
            '&serviceavaliable=' +
            seravail +
            '&onlinebooking=' +
            onlinebook1 +
            '&teammember=' +
            teammem +
            '&teammembercommission=' +
            teammemcom1 +
            '&extratime=' +
            extratime1 +
            '&upsell=' +
            upsell1 +
            '&pricing=1'



        )
            .then((res) => res.json())
            .then(
                (result) => {
                    console.log('yes');
                    if (typeval == '1') {
                        Calladdpricing(result[0]['id']);
                    }
                    else {
                        if (Packageid != undefined) {
                            onClosePackage('success');
                        }
                        else {
                            setClose(false);
                        }
                    }
                    // onClosePackage('success');
                    // setsnackopen(true);
                    console.log(result);
                },
                (error) => {
                    console.log('no');
                    console.log(error);
                }
            );
    };
    const IOSSwitch = styled((props) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
    ))(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
                transform: 'translateX(16px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
                    opacity: 1,
                    border: 0,
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: 0.5,
                },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
                color: '#33cf4d',
                border: '6px solid #fff',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
                color:
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[600],
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
            },
        },
        '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 22,
            height: 22,
        },
        '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
                duration: 500,
            }),
        },
    }));
    const boxSX = {
        "&:hover": {
            border: "1px solid #e6ece6",
            color: '#00aace',
            backgroundColor: '#f8f8fb',
            cursor: 'pointer'
        },
    };
    const Viewservice = async (a, b, c) => {
        let t = parseInt(totalpackprice) + c;
        settotalpackprice(t);
        setmultiPackagelist([...multiPackagelist, { id: b, pname: a, price: c }]);
        Servicmodal(false);


    }
    const handleRemoveservicelist = index => {

        const list = [...multiPackagelist];
        list.splice(index, 1);
        setmultiPackagelist(list);

    };
    return (




        <>

            <Dialog fullWidth
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                open={Openservicmodal}

            > <DialogTitle >
                    <Typography className="font-semibold mb-4 text-15">   Select Package</Typography>

                </DialogTitle >
                <DialogContent >
                    <Box
                        noValidate
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            m: 'auto',
                            width: '80%',
                        }}
                    >
                        {packcat.length > 0 && (
                            <motion.div fullWidth
                                variants={container}
                                initial="hidden"
                                animate="show"
                                className="flex flex-col flex-auto w-full max-h-full"
                            // className={clsx('', '')}

                            >
                                {/*} <Box
                                className="flex items-center mt-32 sm:mt-4 p-2 full overflow-hidden"
                                style={{ padding: '12px', backgroundColor: '#f8f8fb' }}
                            >
                                <Box
                                    component="button"
                                    className={clsx(
                                        'h-40 items-center px-16 cursor-pointer rounded-full font-medium',
                                        expanded === 1 && 'shadow'
                                    )}
                                    onClick={() => setExpanded(1)}
                                    sx={{ backgroundColor: expanded === 1 ? 'background.paper' : '' }}
                                    type="button"
                                >

                                </Box>

                                <Box
                                    component="button"
                                    className={clsx(
                                        'h-40 items-center px-16 cursor-pointer rounded-full font-medium',
                                        expanded === false && 'shadow'
                                    )}
                                    onClick={() => setExpanded(false)}
                                    sx={{ backgroundColor: expanded === false ? 'background.paper' : '' }}
                                    type="button"
                                >
                                    <ViewStreamIcon sx={{ color: '#00aace' }} />
                                </Box>
                            </Box>*/}

                                <br />
                                {packcat.map((m, i) =>

                                    <StyledAccordion key={i}
                                        component={motion.div}
                                        variants={item}
                                        style={{ border: '1px solid black' }}
                                        classes={{
                                            root: 'FaqPage-panel shadow',
                                        }}
                                        expanded={expanded === 1}
                                        onChange={toggleAccordion(1)}
                                    >
                                        <AccordionSummary
                                            expandIcon={<FuseSvgIcon >heroicons-outline:chevron-down</FuseSvgIcon>}
                                            style={{ cursor: 'pointer' }}
                                        // onClick={() => handleCloseCategory(`${m.id}`)}
                                        >
                                            <div className="flex  py-4">

                                                <Typography fullWidth className="text-19 px-12 font-bold">{m.name}</Typography>
                                            </div>
                                        </AccordionSummary>
                                        {m.packagedetails != null && m.packagedetails != undefined && m.packagedetails != '' > 0 &&
                                            m.packagedetails.map((pack, p) => (
                                                pack.id != '' && pack.id != null && pack.id != undefined &&
                                                <AccordionDetails style={{ borderBottom: '1px solid #b7babe' }} onClick={() => Viewservice(pack.servicename, pack.id, pack.price)} sx={boxSX} key={p}  >
                                                    <div className="flex  py-4">
                                                        <Typography fullWidth>{pack.servicename} - ₹{pack.price} </Typography>
                                                    </div>
                                                </AccordionDetails>
                                            ))}


                                    </StyledAccordion>
                                )}


                            </motion.div>
                        )}
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => Servicmodal(false)}>Cancel</Button>

                </DialogActions>
            </Dialog>

            <Snackbar style={{ paddingTop: '56px' }} open={snackopen} anchorOrigin={{ vertical, horizontal }} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={() => setsnackopen(false)} severity="success" sx={{ width: '100%' }}>
                    Successfully added.
                </Alert>
            </Snackbar>





            <Root
                header=
                {
                    <Box sx={{ width: '100%' }} marginTop={5} marginBottom={5}  >

                        <IconButton className="m-4 absolute top-0  z-999" onClick={(e) => (setClose())} size="large">

                        </IconButton>

                        <Typography align={'center'} className="text-28 font-semibold leading-none">Add a new single service</Typography>


                        <Button
                            className="m-4 absolute top-0 right-0 z-999 whitespace-nowrap"
                            variant="contained"
                            color="primary"
                            sx={{ padding: '0px 50px' }}
                            onClick={() => savepackage()}
                        //  startIcon={<FuseSvgIcon size={20}>heroicons-solid:mail</FuseSvgIcon>}
                        >
                            Save
                        </Button>
                    </Box>

                }
                content={

                    <div className="flex flex-col flex-auto items-center sm:justify-center min-w-0" style={{ backgroundColor: '#fff' }}>
                        <div className="w-full sm:w-auto min-h-full sm:min-h-auto rounded-0 py-32 px-16 sm:p-48 sm:rounded-2xl" >
                            <div className="w-full max-w-520 sm:w-520 mx-auto sm:mx-0" >
                                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 6, md: 12 }} sx={{ border: '1px solid #d1d0d4', padding: '0px 10px 10px 0px' }}>
                                    <Grid item xs={12}  >
                                        <Grid item xs={12}>
                                            <Typography className="text-2xl font-semibold leading-tight">
                                                {t('Basic info')}
                                                <br /><Typography underline="none" style={{ fontSize: '15px', color: '#878c93', fontWeight: 400 }} >Add a service name and choose the treatment type.</Typography>
                                            </Typography>

                                        </Grid>
                                        <br />
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={8}  >
                                        <Grid item xs={12}>

                                            <Typography className="font-semibold mb-4 text-15"> {t('Service name')}</Typography>
                                            <TextField
                                                fullWidth
                                                value={servicename} onChange={(e) => setservicename(e.target.value)} variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12} >
                                            <Typography className="font-semibold mb-4 text-15">{t('Service category')}</Typography>
                                            <FormControl fullWidth>

                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select" value={servicecat} onChange={(e) => setservicecat(e.target.value)}


                                                >
                                                    {packcat.map((item, a) =>
                                                        <MenuItem key={a} value={item.id}>{item.name}</MenuItem>
                                                    )}

                                                </Select>
                                            </FormControl>  </Grid>
                                        <Grid item xs={12} >
                                            <Typography className="font-semibold mb-4 text-15">{t('Service description')}</Typography>
                                            <TextField multiline rows="3" fullWidth value={serdescription} onChange={(e) => setserdescription(e.target.value)} variant="outlined" />
                                        </Grid>
                                        <Grid item xs={12} >
                                            <Typography className="font-semibold mb-4 text-15">{t('Aftercare description')}</Typography>
                                            <TextField multiline rows="3" fullWidth value={afterdescription} onChange={(e) => setafterdescription(e.target.value)} variant="outlined" />
                                        </Grid>
                                        <Grid item xs={12} >
                                            <Typography className="font-semibold mb-4 text-15">{t('Service available for')}</Typography>
                                            <FormControl fullWidth>

                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select" value={seravail} onChange={(e) => setseravail(e.target.value)}


                                                >
                                                    <MenuItem value="1">Everyone</MenuItem>
                                                    <MenuItem value="2">Females only</MenuItem>
                                                    <MenuItem value="3">Males only</MenuItem>
                                                </Select>
                                            </FormControl>  </Grid>


                                    </Grid>
                                    <Grid item xs={4}></Grid>
                                </Grid>


                                <br />
                                <br /> <br />


                                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 6, md: 12 }} style={{ border: '1px solid #d1d0d4' }}>
                                    <Grid container xs={12} sx={{ padding: '30px' }}>
                                        <Grid item xs={12}  >
                                            <Grid item xs={12}>
                                                <Typography className="text-2xl font-semibold leading-tight">
                                                    {t('Online booking')}

                                                </Typography>
                                                <Typography style={{ fontSize: '15px', color: '#878c93', fontWeight: 400 }} className="font-semibold mb-4 text-15">Enable online bookings, choose who the service is available for and add a short description.</Typography>


                                            </Grid>
                                            <br />
                                            <Divider />
                                        </Grid>
                                        <Grid item xs={8}  >
                                            <Grid item xs={12}>

                                                <FormControlLabel
                                                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked value={onlinebook} onChange={(e) => setonlinebook(!onlinebook)} />}
                                                    label="Enable online bookings"
                                                />
                                            </Grid>



                                        </Grid>
                                        <Grid item xs={4}></Grid>
                                    </Grid>

                                </Grid>
                                <br />
                                <br /> <br />
                                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 6, md: 12 }} sx={{ border: '1px solid #d1d0d4', padding: '0px 10px 10px 0px' }}>
                                    <Grid item xs={12}  >
                                        <Grid item xs={12}>
                                            <Typography className="text-2xl font-semibold leading-tight">
                                                {t('Team')}

                                            </Typography>
                                            <Typography style={{ fontSize: '15px', color: '#878c93', fontWeight: 400 }} className="font-semibold mb-4 text-15">Assign team members to the service and manage commission.</Typography>

                                        </Grid>
                                        <br />
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={8}  >
                                        <Grid item xs={12} >
                                            {getTeam.map((item, i) =>

                                                <Grid item xs={6} key={i} sx={{ padding: '20px' }}>
                                                    <FormControlLabel
                                                        control={<Checkbox defaultChecked value={item.id} onClick={() => setcheckedteammem(item.id)}
                                                        />}
                                                        label={<Typography display={'flex'} align={'center'}>
                                                            <Avatar sx={{ width: 56, height: 56, bgcolor: blue[400] }} alt={item.title} size={50} src={'/'} /> &nbsp;<Typography sx={{ paddingTop: '10px', fontSize: '17px', fontWeight: '700' }}>{item.title}</Typography>


                                                        </Typography>
                                                        }
                                                        labelPlacement="end"
                                                    />
                                                </Grid>
                                            )}
                                        </Grid>



                                    </Grid>
                                    <Grid item xs={4}></Grid>


                                </Grid>
                                <br />
                                <br /> <br />
                                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 6, md: 12 }} style={{ border: '1px solid #d1d0d4' }}>
                                    <Grid container xs={12} sx={{ padding: '30px' }}>
                                        <Grid item xs={12}  >
                                            <Grid item xs={12}>
                                                <Typography className="text-2xl font-semibold leading-tight">
                                                    {t('Team member commission')}

                                                </Typography>
                                                <Typography style={{ fontSize: '15px', color: '#878c93', fontWeight: 400 }} className="font-semibold mb-4 text-15">Calculate team member commission when the service is sold.</Typography>

                                            </Grid>
                                            <br />
                                            <Divider />
                                        </Grid>
                                        <Grid item xs={8}  >
                                            <Grid item xs={12}>

                                                <FormControlLabel
                                                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked value={teammemcom} onChange={(e) => setteammemcom(!teammemcom)} />}
                                                    label="Enable team member commission"
                                                />
                                            </Grid>



                                        </Grid>
                                        <Grid item xs={4}></Grid>
                                    </Grid>

                                </Grid>
                                <br />
                                <br /> <br />
                                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 6, md: 12 }} style={{ border: '1px solid #d1d0d4' }}>
                                    <Grid container xs={12} sx={{ padding: '30px' }}>
                                        <Grid item xs={12}  >
                                            <Grid item xs={12}>
                                                <Typography className="text-2xl font-semibold leading-tight">
                                                    {t('Extra time')}

                                                </Typography>
                                                <Typography style={{ fontSize: '15px', color: '#878c93', fontWeight: 400 }} className="font-semibold mb-4 text-15">Enable extra time after the service.</Typography>

                                            </Grid>
                                            <br />
                                            <Divider />
                                        </Grid>
                                        <Grid item xs={8}  >
                                            <Grid item xs={12}>

                                                <FormControlLabel
                                                    control={<IOSSwitch sx={{ m: 1 }} value={extratime} onChange={(e) => setextratime(!extratime)} />}
                                                    label="Enable extra time"
                                                />
                                            </Grid>



                                        </Grid>
                                        <Grid item xs={4}></Grid>
                                    </Grid>

                                </Grid>
                                <br />
                                <br /> <br />
                                {typeval == 1 &&
                                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 6, md: 12 }} style={{ border: '1px solid #d1d0d4' }}>
                                        <Grid container xs={12} sx={{ padding: '30px' }}>
                                            <Grid xs={12} sx={{ paddingBottom: '30px' }}>
                                                <Grid item xs={12}>
                                                    <Typography className="text-2xl font-semibold leading-tight">
                                                        {t('Pricing and Duration')}

                                                    </Typography>
                                                    <Typography style={{ fontSize: '15px', color: '#878c93', fontWeight: 400 }} className="font-semibold mb-4 text-15">
                                                        Add the pricing options and duration of the service.
                                                        .
                                                    </Typography>

                                                </Grid>

                                                <Grid item xs={12} >
                                                    <Divider />
                                                </Grid>

                                            </Grid>


                                            {Pricinglist.map((x, i) => (
                                                <Grid xs={12} sx={{ paddingBottom: '30px' }}>
                                                    <Grid container columns={{ xs: 3, sm: 4, md: 12 }} style={{ padding: '20px', border: '1px solid #d1d0d4', backgroundColor: '#f2f2f7' }}>
                                                        <Grid xs={11}>
                                                            <Typography className="text-2xl font-semibold leading-tight" >
                                                                Pricing Option {i + 1}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={12} md={1} >
                                                            {((Pricinglist.length !== 1) && (Pricinglist.length - 1 === i)) &&


                                                                <ClearIcon sx={{ color: 'red', cursor: 'pointer' }} onClick={() => handleRemoveClickPricinglist(i)} />


                                                            }
                                                        </Grid>
                                                        <Grid xs={3} sx={{ padding: '5px' }}>
                                                            <Typography className="font-semibold mb-4 text-15">{t('Duration')}</Typography>

                                                            <FormControl fullWidth>
                                                                <Select
                                                                    labelId="demo-simple-select-label"
                                                                    id="demo-simple-select" name="duration" value={x.duration} onChange={(e) => ChangePricinglist(e, i)}

                                                                >
                                                                    <MenuItem value="0">Select</MenuItem>
                                                                    <MenuItem value="5">5min</MenuItem><MenuItem value="10">10min</MenuItem>
                                                                    <MenuItem value="15">15min</MenuItem><MenuItem value="20">20min</MenuItem>
                                                                    <MenuItem value="25">25min</MenuItem><MenuItem value="30">30min</MenuItem>
                                                                    <MenuItem value="35">35min</MenuItem><MenuItem value="40">40min</MenuItem>
                                                                    <MenuItem value="45">45min</MenuItem><MenuItem value="50">50min</MenuItem>
                                                                    <MenuItem value="55">55min</MenuItem><MenuItem value="60">1h</MenuItem>
                                                                    <MenuItem value="65">1h 5min</MenuItem><MenuItem value="70">1h 10min</MenuItem>
                                                                    <MenuItem value="75">1h 15min</MenuItem><MenuItem value="80">1h 20min</MenuItem>
                                                                    <MenuItem value="85">1h 25min</MenuItem><MenuItem value="90">1h 30min</MenuItem>
                                                                    <MenuItem value="95">1h 35min</MenuItem><MenuItem value="100">1h 40min</MenuItem>
                                                                    <MenuItem value="105">1h 45min</MenuItem><MenuItem value="110">1h 50min</MenuItem>
                                                                    <MenuItem value="115">1h 55min</MenuItem><MenuItem value="120">2h</MenuItem>
                                                                    <MenuItem value="135">2h 15min</MenuItem><MenuItem value="150">2h 30min</MenuItem>
                                                                    <MenuItem value="165">2h 45min</MenuItem><MenuItem value="180">3h</MenuItem>
                                                                    <MenuItem value="195">3h 15min</MenuItem><MenuItem value="210">3h 30min</MenuItem>
                                                                    <MenuItem value="225">3h 45min</MenuItem><MenuItem value="240">4h</MenuItem>
                                                                    <MenuItem value="270">4h 30min</MenuItem><MenuItem value="300">5h</MenuItem>
                                                                    <MenuItem value="330">5h 30min</MenuItem><MenuItem value="360">6h</MenuItem>
                                                                    <MenuItem value="390">6h 30min</MenuItem><MenuItem value="420">7h</MenuItem>
                                                                    <MenuItem value="450">7h 30min</MenuItem><MenuItem value="480">8h</MenuItem>
                                                                    <MenuItem value="540">9h</MenuItem><MenuItem value="600">10h</MenuItem>
                                                                    <MenuItem value="660">11h</MenuItem><MenuItem value="720">12h</MenuItem>




                                                                </Select>
                                                            </FormControl>

                                                        </Grid>
                                                        <Grid xs={3} sx={{ padding: '5px' }}>
                                                            <Typography className="font-semibold mb-4 text-15">{t('Price type')}</Typography>

                                                            <FormControl fullWidth >
                                                                <Select
                                                                    labelId="demo-simple-select-label"
                                                                    id="demo-simple-select" name="ptype" value={x.ptype} onChange={(e) => ChangePricinglist(e, i)}
                                                                >
                                                                    <MenuItem value="0">Select</MenuItem>

                                                                    <MenuItem value={1}>Free</MenuItem>
                                                                    <MenuItem value={2}>From</MenuItem>
                                                                    <MenuItem value={3}>Fixed</MenuItem>



                                                                </Select>
                                                            </FormControl>
                                                        </Grid>
                                                        <Grid xs={3} sx={{ padding: '5px' }}>
                                                            <Typography className="font-semibold mb-4 text-15">{t('Price')}</Typography>
                                                            <FormControl fullWidth>
                                                                <OutlinedInput
                                                                    id="outlined-adornment-amount"
                                                                    startAdornment={<InputAdornment position="start">₹</InputAdornment>}

                                                                    fullWidth
                                                                    name="price" value={x.price} onChange={(e) => ChangePricinglist(e, i)}
                                                                /></FormControl>
                                                        </Grid>
                                                        <Grid xs={3} sx={{ padding: '5px' }}>
                                                            <Typography className="font-semibold mb-4 text-15">{t('Special price (optional)')}</Typography>
                                                            <FormControl fullWidth>
                                                                <OutlinedInput
                                                                    id="outlined-adornment-amount"
                                                                    startAdornment={<InputAdornment position="start">₹</InputAdornment>}

                                                                    fullWidth
                                                                    name="sprice" value={x.sprice} onChange={(e) => ChangePricinglist(e, i)}
                                                                /></FormControl>
                                                        </Grid>
                                                        <Grid xs={3} sx={{ padding: '5px' }}>
                                                            <Typography className="font-semibold mb-4 text-15">{t('Pricing name (optional)')}</Typography>
                                                            <FormControl fullWidth>
                                                                <TextField

                                                                    fullWidth
                                                                    name="pname"
                                                                    value={x.pname} onChange={(e) => ChangePricinglist(e, i)}
                                                                /></FormControl>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            ))}

                                            <Grid xs={12} sx={{ paddingTop: '30px', cursor: 'pointer' }} ><Link onClick={AddPricinglist}><AddCircleOutlineIcon /> Add pricing option</Link> </Grid>


                                        </Grid>

                                    </Grid>
                                }
                                {typeval == 2 &&
                                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 6, md: 12 }} style={{ border: '1px solid #d1d0d4' }}>
                                        <Grid container xs={12} sx={{ padding: '30px' }}>
                                            <Grid xs={12} sx={{ paddingBottom: '30px' }}>
                                                <Grid item xs={12}>
                                                    <Typography className="text-2xl font-semibold leading-tight">
                                                        {t('Services')}

                                                    </Typography>

                                                    <Typography style={{ fontSize: '15px', color: '#878c93', fontWeight: 400 }} className="font-semibold mb-4 text-15">
                                                        Assign services to your package
                                                        .
                                                    </Typography>

                                                </Grid>

                                                <Grid item xs={12} >
                                                    <Divider />
                                                </Grid>

                                            </Grid>
                                            {multiPackagelist.map((x, i) => (
                                                <Grid xs={12} sx={{ paddingBottom: '30px' }}>
                                                    <Grid container columns={{ xs: 3, sm: 4, md: 12 }} style={{ padding: '20px', border: '1px solid #d1d0d4', backgroundColor: '#f2f2f7' }}>


                                                        <Grid xs={9} sx={{ padding: '5px' }}>
                                                            <Typography className="text-2xl font-semibold leading-tight">{x.pname}</Typography>


                                                        </Grid>

                                                        <Grid xs={2} sx={{ padding: '5px' }}>
                                                            <Typography className="font-semibold mb-4 text-15">₹ {x.price}</Typography>

                                                        </Grid>
                                                        <Grid item xs={12} md={1} >
                                                            {((multiPackagelist.length !== 1) && (multiPackagelist.length - 1 === i)) &&


                                                                <ClearIcon sx={{ color: 'red', cursor: 'pointer' }} onClick={() => handleRemoveservicelist(i)} />


                                                            }
                                                        </Grid>

                                                    </Grid>
                                                </Grid>
                                            ))}

                                            <Grid xs={12} sx={{ paddingTop: '30px', cursor: 'pointer' }} >
                                                <Grid container columns={{ xs: 3, sm: 4, md: 12 }} style={{ padding: '20px' }}>
                                                    <Grid item xs={9} >
                                                        <Link onClick={() => Servicmodal(true)}><AddCircleOutlineIcon /> Select service</Link>
                                                    </Grid>
                                                    <Grid item xs={3} >
                                                        <Typography className="font-semibold mb-4 text-15">Total : ₹ {totalpackprice}</Typography>


                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                        </Grid>
                                    </Grid>
                                }
                                <br />
                                <br /> <br />
                                <br />
                                <br /> <br />
                                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 6, md: 12 }} style={{ border: '1px solid #d1d0d4', padding: '10px' }}>

                                    <Grid item xs={12}  >
                                        <Grid item xs={12}>
                                            <Typography className="text-2xl font-semibold leading-tight">
                                                {t('Sales settings')}

                                            </Typography>


                                        </Grid>
                                        <br />
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={8}  >
                                        <Grid item xs={12}>
                                            <br />
                                            <Typography className="text-2xl font-semibold leading-tight">
                                                {t('Set the tax rate')}
                                                <br />
                                            </Typography>
                                            <br />
                                            <Typography className="font-semibold mb-4 text-13"> {t('Tax (Included in price)')}</Typography>

                                            <FormControl fullWidth>

                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select" value={taxval} onChange={(e) => settaxval(e.target.value)}


                                                >{getTaxlist.map((tax, i) =>
                                                    <MenuItem value={tax.id}>{tax.name}</MenuItem>
                                                )}


                                                </Select>
                                            </FormControl>



                                        </Grid>
                                        <br />
                                        <Grid item xs={12}><Divider /></Grid>

                                        <Grid item xs={12}>
                                            <br />
                                            <Typography className="text-2xl font-semibold leading-tight">
                                                {t('Voucher sales')}
                                            </Typography>
                                            <br />

                                            <br />

                                        </Grid>
                                        <FormControlLabel
                                            control={<IOSSwitch sx={{ m: 1 }} />}
                                            label="Enable voucher sales"
                                        />

                                    </Grid>
                                    <Grid item xs={4}></Grid>


                                </Grid>
                                <br />
                                <br /> <br />
                                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 6, md: 12 }} style={{ border: '1px solid #d1d0d4' }}>
                                    <Grid container xs={12} sx={{ padding: '30px' }}>
                                        <Grid item xs={12}  >
                                            <Grid item xs={12}>
                                                <Typography className="text-2xl font-semibold leading-tight">
                                                    {t('Upselling')}

                                                </Typography>
                                                <Typography style={{ fontSize: '15px', color: '#878c93', fontWeight: 400 }} className="font-semibold mb-4 text-15">
                                                    Encourage clients to book additional services and buy suitable memberships when booking online.<br /> Manage your
                                                    &nbsp;<Link>global settings</Link>&nbsp;
                                                    or learn&nbsp;
                                                    &nbsp;<Link>how it works</Link>
                                                    .
                                                </Typography>

                                            </Grid>
                                            <br />
                                            <Divider />
                                        </Grid>
                                        <Grid item xs={8}  >
                                            <Grid item xs={12}>

                                                <FormControlLabel
                                                    control={<IOSSwitch sx={{ m: 1 }} value={upsell} onClick={() => setupsell(!upsell)} />}
                                                    label="Upsell services"
                                                />
                                            </Grid>



                                        </Grid>
                                        <Grid item xs={4}></Grid>
                                    </Grid>

                                </Grid>
                                <br />
                                <br /> <br />











                            </div>
                        </div>

                    </div>

                }


                scroll={isMobile ? 'normal' : 'content'}
            />


        </>

    );
}

export default NewPackage;
