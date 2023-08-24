import React, { useEffect, useState, useRef } from 'react';
import Input from '@mui/material/Input';
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
    Dialog,
    DialogContent,
    DialogTitle,
    DialogActions,
    AccordionDetails,
    Grid,
    Divider, Toolbar, OutlinedInput, InputAdornment, FormControlLabel, Switch

} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { motion } from 'framer-motion';
import Snackbar from '@mui/material/Snackbar';
import { useTranslation } from 'react-i18next';
import { styled, useTheme } from '@mui/material/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';
import CloseIcon from '@mui/icons-material/Close';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import { ReactSession } from 'react-client-session';
import MuiAlert from '@mui/material/Alert';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
const Root = styled(FusePageSimple)(({ theme }) => ({
    '& .FusePageSimple-header': {
        backgroundColor: theme.palette.background.paper,
    },
}));
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

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
function Voucheradd(props) {

    const { onCloseVoucher, Voucherid } = props;
    const { t } = useTranslation('ClientPage');
    const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
    const [Page, setPage] = useState('1');
    const [Vouchername, setVouchername] = useState('');
    const [Vouchertitle, setVouchertitle] = useState('');
    const [Voucherdesc, setVoucherdesc] = useState('');
    const [vouchervalue, setvouchervalue] = useState('');
    const [voucherretailprice, setvoucherretailprice] = useState([]);
    const [Openservicmodal, Servicmodal] = useState(false);
    const [packcat, setpackcat] = useState([]);
    const [selectservice, setselectservice] = useState('All Services');


    const [validfor, setvalidfor] = useState([]);
    const [limitamt, setlimitamt] = useState(false);
    const [noofsales, setnoofsales] = useState([]);
    const [CompanyDetails, setCompanyDetails] = useState([]);
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
    const handleClose = () => {
        setsnackopen(false);
    };
    const savevoucher = async () => {
        if (Page == '1') {
            setPage(2);
        }
        else if (Page == '2') {
            let str = '';
            const cid = localStorage.getItem('login_cid1');
            if (cid != '' && cid != undefined && cid != null) {
                str = '&companyid=' + cid;
            }
            const a = '';
            let islimit = '0';
            if (limitamt == true) {
                islimit = '1';
            }
            console.log('https://www.laabamone.com/appoint_api.php?eventtype=voucheradd' + str + '&id='
                + a + '&name=' +
                Vouchername +
                '&value=' +
                vouchervalue +
                '&retails_price=' +
                voucherretailprice +
                '&limit_sale=' +
                islimit +
                '&no_of_sale=' +
                noofsales +
                '&voucher_title=' +
                Vouchertitle
                +
                '&voucher_desc=' +
                Voucherdesc);
            fetch(
                'https://www.laabamone.com/appoint_api.php?eventtype=voucheradd' + str + '&id='
                + a + '&name=' +
                Vouchername +
                '&value=' +
                vouchervalue +
                '&retails_price=' +
                voucherretailprice +
                '&limit_sale=' +
                islimit +
                '&no_of_sale=' +
                noofsales +
                '&voucher_title=' +
                Vouchertitle
                +
                '&voucher_desc=' +
                Voucherdesc

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

    }
    const ChangeLimit = () => {
        // alert();
        setlimitamt(true);
        // alert(limitamt);
    }
    const boxSXhead = {

        fontSize: "20px",
        fontWeight: 700,
        lineHeight: '28px',
        padding: '10px'


    };
    const boxSX = {

        fontSize: "15px",
        fontWeight: 400,
        lineHeight: '21px',
        padding: '10px'


    };
    const _0652e3166 = {
        width: "40px",
        height: "40px",
        minWidth: "40px",
        minHeight: "40px",
        borderRadius: "50%",
        "&:hover": {

            border: '2px solid #037aff'
        },
    }
    const [Pricinglist, setPricinglist] = useState([]);
    const ChangePricinglist = (e) => {
        const { name, value } = e.target;
        const list = [...Pricinglist];
        const index = Pricinglist.length;

        list[index][name] = value;
        setPricinglist(list);
        console.log(Pricinglist);
    };
    const handleRemoveClickPricinglist = index => {

        const list = [...Pricinglist];
        list.splice(index, 1);
        setPricinglist(list);

    };
    const GetService = () => {
        const cnt = Pricinglist.length;
        //alert(cnt);
        /* if (cnt > '1') {
             alert(res);*/
        const res = parseInt(cnt) + 1;

        const res1 = res + ' Services';
        setselectservice(res1);
        //  }

    }
    const AddPricinglist = (s, c) => {
        alert(Pricinglist.length);

        setPricinglist([...Pricinglist, { serviceid: s, catid: c }]);
        console.log(Pricinglist);
        GetService();
    };
    useEffect(() => {

        // console.log()
        const getpackcat = async () => {

            const response = await fetch('https://www.laabamone.com/appoint_api.php?eventtype=packagecategorylist');
            const json = await response.json();
            // console.log(json);
            setpackcat(json);

        }
        const getCompanydetails = async () => {
            //  alert(ReactSession.get("login_cid1"));
            const loginid = ReactSession.get("login_cid1");
            const response = await fetch('https://www.laabamone.com/appoint_api.php?eventtype=getregistercompanydetails&id=' + loginid);
            const json = await response.json();
            console.log(json[0].image);
            console.log(json.image);
            setCompanyDetails(json[0]);

        }
        getCompanydetails();
        getpackcat();
    }, [])


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
                                        {(m.packagedetails != null && m.packagedetails != undefined && m.packagedetails != '' && m.packagedetails.length > 0) ?
                                            m.packagedetails.map((pack, p) => (
                                                pack.servicecategoryid == m.id &&
                                                <AccordionDetails style={{ borderBottom: '1px solid #b7babe' }} sx={boxSX} key={p}  >
                                                    <div className="flex  py-4">

                                                        <Checkbox name="serviceid" value={pack.id} onChange={(e) => AddPricinglist(pack.id, pack.servicetype)}
                                                        />
                                                        <Typography fullWidth>{pack.servicename} - ₹{pack.price} </Typography>
                                                    </div>
                                                </AccordionDetails>
                                            ))
                                            : ''
                                        }


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

                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 6, md: 12 }} sx={{ border: '1px solid #d1d0d4', padding: '0px 10px 10px 0px' }}>

                        <Grid item xs={3} >
                            <IconButton sx={{ paddingTop: '20px' }}
                                edge="start"
                                color="inherit"
                                onClick={onCloseVoucher}
                                aria-label="close"
                                size="large"
                            >
                                <CloseIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs={7} >
                            <Typography sx={{ padding: '20px 0px 0px 0px' }} align={'center'} className="text-14 font-semibold leading-none">Step {Page} of 2: Add your voucher type info
                            </Typography>
                            <Typography sx={{ padding: '5px 0px' }} align={'center'} className="text-28 font-semibold leading-none">
                                Create a voucher type</Typography>

                        </Grid>
                        <Grid item xs={2} sx={{ justifyContent: 'center' }} >
                            <Typography sx={{ padding: '20px' }} align={'center'} >

                                <Button disabled={Page == '1' && Vouchername == '' ? true : Page == '2' || Vouchername != '' ? false : true}
                                    align={'center'}
                                    className=""
                                    variant="contained"
                                    color="primary"
                                    sx={{ padding: '25px' }}
                                    onClick={() => savevoucher()}
                                //  startIcon={<FuseSvgIcon size={20}>heroicons-solid:mail</FuseSvgIcon>}
                                >
                                    {Page == '1' ? 'Next Step' : Page == '2' ? 'Save' : ''}
                                </Button></Typography>
                        </Grid>


                    </Grid>

                }
                content={

                    <div className="flex flex-col flex-auto items-center sm:justify-center min-w-0" style={{ backgroundColor: '#fff' }}>
                        <div className="w-full sm:w-auto min-h-full sm:min-h-auto rounded-0 py-32 px-16 sm:p-48 sm:rounded-2xl" >
                            <div className="w-full max-w-520 sm:w-520 mx-auto sm:mx-0" >
                                <form>

                                    <Grid container spacing={{ xs: 6, md: 12 }} columns={{ xs: 6, sm: 6, md: 12 }} sx={{ padding: '0px 10px 10px 0px' }}>
                                        {Page == '1' &&
                                            <Grid item xs={6} sx={{ borderRight: '1px solid #ddd6d6', padding: '20px' }}>
                                                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 6, sm: 6, md: 12 }} >

                                                    <Grid item xs={12}>
                                                        <Typography className="text-2xl font-semibold leading-tight">
                                                            {t('Voucher info')}
                                                            <br /><Typography underline="none" style={{ fontSize: '15px', color: '#878c93', fontWeight: 400 }} >Add the voucher name, value and duration of the voucher. If the voucher value is higher than the retail price it will encourage more sales.</Typography>
                                                        </Typography>

                                                    </Grid>
                                                    <br />
                                                    <Divider />

                                                    <Grid item xs={12}>

                                                        <Typography className="font-semibold mb-4 text-15"> {t('Voucher name')}</Typography>
                                                        <TextField
                                                            fullWidth
                                                            value={Vouchername} onChange={(e) => setVouchername(e.target.value)} variant="outlined"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Typography className="font-semibold mb-4 text-15"> {t('Value')}</Typography>



                                                        <OutlinedInput fullWidth value={vouchervalue} onChange={(e) => setvouchervalue(e.target.value)}
                                                            id="outlined-adornment-amount"
                                                            startAdornment={<InputAdornment position="start">₹</InputAdornment>}

                                                        />

                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Typography className="font-semibold mb-4 text-15"> {t('Retail Price')}</Typography>



                                                        <OutlinedInput fullWidth required value={voucherretailprice} onChange={(e) => setvoucherretailprice(e.target.value)}
                                                            id="outlined-adornment-amount"
                                                            startAdornment={<InputAdornment position="start">₹</InputAdornment>}

                                                        />

                                                    </Grid>
                                                    <Grid item xs={12} >
                                                        <Typography className="font-semibold mb-4 text-15">{t('Valid for')}</Typography>
                                                        <FormControl fullWidth>

                                                            <Select
                                                                labelId="demo-simple-select-label"
                                                                id="demo-simple-select" value={validfor} onChange={(e) => setvalidfor(e.target.value)}
                                                            >

                                                                <MenuItem value={"days_14"}>14 Days</MenuItem><MenuItem value="months_1">1 month</MenuItem>
                                                                <MenuItem value="months_2">2 months</MenuItem><MenuItem value="months_3">3 months</MenuItem>
                                                                <MenuItem value="months_4">4 months</MenuItem><MenuItem value="months_6">6 months</MenuItem>
                                                                <MenuItem value="years_1">1 year</MenuItem><MenuItem value="years_3">3 years</MenuItem>
                                                                <MenuItem value="years_5">5 years</MenuItem>
                                                                <MenuItem value="never">Forever</MenuItem>

                                                            </Select>
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <FormControlLabel

                                                            control={<Switch sx={{ m: 1 }} checked={limitamt}
                                                                onClick={() => ChangeLimit()} />
                                                            }
                                                            label="Limit amount of sales"
                                                        />

                                                    </Grid>
                                                    <Grid item xs={12} >
                                                        <Typography className="font-semibold mb-4 text-15">{t('Number of sales')}</Typography>
                                                        <FormControl fullWidth>

                                                            <Select disabled={limitamt ? false : true}
                                                                labelId="demo-simple-select-label"
                                                                id="demo-simple-select" value={noofsales} onChange={(e) => setnoofsales(e.target.value)}
                                                            >
                                                                <MenuItem value="10">10</MenuItem><MenuItem value="20">20</MenuItem>
                                                                <MenuItem value="30">30</MenuItem><MenuItem value="50">50</MenuItem>
                                                                <MenuItem value="100">100</MenuItem><MenuItem value="250">250</MenuItem>
                                                                <MenuItem value="500">500</MenuItem><MenuItem value="1000">1000</MenuItem>

                                                            </Select>
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item xs={12} >
                                                        <Typography className="font-semibold mb-4 text-19">{t('Services included')}</Typography>

                                                        <Typography className="font-semibold mb-4 text-15">{t('Services included')}</Typography>
                                                        <Grid item container xs={'12'} style={{ padding: '20px 0px', }}>
                                                            <Box
                                                                component={motion.div}
                                                                initial={{ y: -1, opacity: 0 }}
                                                                animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
                                                                className="flex flex-1 w-full sm:w-auto items-center px-16 mx-8 border-1 full"
                                                            >


                                                                <Input
                                                                    placeholder={selectservice}
                                                                    className="flex flex-1 px-16"
                                                                    disableUnderline
                                                                    fullWidth
                                                                    //  value={searchText}
                                                                    inputProps={{
                                                                        // 'aria-label': 'All Services',
                                                                    }}
                                                                    onChange={(ev) => dispatch(setContactsSearchText(ev))}
                                                                />
                                                                <Typography onClick={() => Servicmodal(true)}>Edit</Typography>
                                                            </Box>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        }
                                        {Page == '2' &&
                                            <Grid item xs={6} sx={{ borderRight: '1px solid #ddd6d6', padding: '20px' }}>
                                                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 6, sm: 6, md: 12 }} >

                                                    <Grid item xs={12}>
                                                        <Typography className="text-2xl font-semibold leading-tight">
                                                            {t('Text')}
                                                            <br /><Typography underline="none" style={{ fontSize: '15px', color: '#878c93', fontWeight: 400 }} >Add a title and a message on the voucher.</Typography>
                                                        </Typography>

                                                    </Grid>
                                                    <br />
                                                    <Divider />

                                                    <Grid item xs={12}>

                                                        <Typography className="font-semibold mb-4 text-15"> {t('Voucher title')}</Typography>
                                                        <TextField
                                                            fullWidth
                                                            value={Vouchertitle} onChange={(e) => setVouchertitle(e.target.value)} variant="outlined"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>

                                                        <Typography className="font-semibold mb-4 text-15"> {t('Voucher description')}</Typography>
                                                        <TextField multiline
                                                            rows={3}
                                                            fullWidth
                                                            value={Voucherdesc} onChange={(e) => setVoucherdesc(e.target.value)} variant="outlined"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Typography className="text-2xl font-semibold leading-tight">
                                                            {t('Voucher colour')}
                                                            <br /><Typography underline="none" style={{ fontSize: '15px', color: '#878c93', fontWeight: 400 }} >Select a colour that matches your business.</Typography>
                                                        </Typography>
                                                        <Typography underline="none" style={{ fontSize: '15px', color: '#878c93', fontWeight: 400 }} ><br />Choose a colour</Typography>
                                                    </Grid>
                                                    <Grid item xs={1}>  <Box sx={_0652e3166} title="green" style={{ background: ` linear-gradient(-225deg, rgb(11, 109, 217) 0%, rgb(95, 171, 255) 100%)` }}></Box> </Grid>
                                                    <Grid item xs={1}>  <Box sx={_0652e3166} title="green" style={{ background: `linear-gradient(-225deg, rgb(16, 25, 40) 0%, rgb(32, 48, 71) 100%)` }}></Box> </Grid>
                                                    <Grid item xs={1}>  <Box sx={_0652e3166} title="green" style={{ background: `linear-gradient(-45deg, rgb(0, 166, 156) 0%, rgb(0, 157, 98) 100%)` }}></Box> </Grid>
                                                    <Grid item xs={1}>  <Box sx={_0652e3166} title="green" style={{ background: ` linear-gradient(-45deg, rgb(237, 176, 27) 0%, rgb(222, 100, 38) 100%)` }}></Box> </Grid>
                                                    <Grid item xs={1}>  <Box sx={_0652e3166} title="green" style={{ background: ` linear-gradient(-45deg, rgb(190, 74, 244) 0%, rgb(92, 55, 246) 100%)` }}></Box> </Grid>
                                                    <Grid item xs={1}>  <Box sx={_0652e3166} title="green" style={{ background: ` linear-gradient(-225deg, rgb(16, 25, 40) 0%, rgb(32, 48, 71) 100%` }}></Box> </Grid>

                                                    <br />
                                                    <Divider />
                                                </Grid>
                                            </Grid>
                                        }
                                        <Grid item xs={6}  >
                                            <Grid container>


                                                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 6, md: 12 }} sx={{ border: '1px solid #d1d0d4' }}>
                                                    <Grid item xs={12} sx={{ borderBottom: '1px solid #d6d3d3', backgroundColor: '#ededf4', paddingBottom: '13px' }}>
                                                        <Typography sx={{ textAlign: 'center' }} className="font-semibold mb-4 text-15"> {t('Voucher Preview')}</Typography>

                                                    </Grid>
                                                    <Grid item xs={12} sx={{ borderBottom: '1px solid #f1f1f1', backgroundColor: '#c1cad7', paddingBottom: '13px' }} >
                                                        <Typography sx={{ textAlign: 'center' }} className="font mb-4 text-15"> {t('Voucher email Subject')}</Typography>

                                                    </Grid>
                                                    <Grid container >
                                                        <Grid item xs={12} sx={{ padding: '60px' }}>
                                                            <Box fullWidth sx={{ padding: '20px', background: `linear-gradient(-225deg, #0b6dd9 0%, #5fabff 100%)`, color: '#fff', textAlign: 'center' }}>
                                                                <Typography fullWidth sx={{ padding: '0px 120px' }}><img src={CompanyDetails.image} style={{ width: '150px', alignItems: 'center' }}></img></Typography>
                                                                <Typography fullWidth sx={boxSXhead}>{CompanyDetails.company_name}</Typography>
                                                                <Typography fullWidth sx={boxSX}>{CompanyDetails.add1}{CompanyDetails.add2}</Typography>
                                                                <Divider fullWidth sx={{ padding: '20px' }}></Divider>
                                                                <Typography fullWidth sx={boxSX}><br /><br />Voucher value</Typography>
                                                                <Typography fullWidth sx={boxSXhead}> ₹ {vouchervalue != '' ? vouchervalue : '0.00'}</Typography>
                                                                <Divider fullWidth sx={{ padding: '20px' }}></Divider>
                                                                <Typography fullWidth sx={boxSX}>Voucher code : XXXXXX</Typography>
                                                                <Typography fullWidth sx={boxSX}>Redeem on {selectservice}</Typography>
                                                                <Typography fullWidth sx={boxSX}>Valid for {validfor}</Typography>
                                                                <Typography fullWidth sx={boxSX}>For multiple-use until redeemed</Typography>


                                                            </Box>

                                                        </Grid>
                                                    </Grid>
                                                </Grid>


                                            </Grid>
                                        </Grid>

                                    </Grid>

                                </form>



                            </div>
                        </div>

                    </ div>

                }


                scroll={isMobile ? 'normal' : 'content'}
            />
        </>
    );



}

export default Voucheradd;