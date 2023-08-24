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
    Dialog,
    DialogContent,
    DialogTitle,
    Grid,
    Divider, Toolbar, OutlinedInput, InputAdornment, FormControlLabel, Switch

} from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import { useTranslation } from 'react-i18next';
import { styled, useTheme } from '@mui/material/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';
import CloseIcon from '@mui/icons-material/Close';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import { ReactSession } from 'react-client-session';
import MuiAlert from '@mui/material/Alert';
const Root = styled(FusePageSimple)(({ theme }) => ({
    '& .FusePageSimple-header': {
        backgroundColor: theme.palette.background.paper,
    },
}));
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function Membershipadd(props) {

    const { onCloseVoucher, Voucherid } = props;
    const { t } = useTranslation('ClientPage');
    const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
    const [Page, setPage] = useState('1');
    const [name, setname] = useState('');
    const [desc, setdesc] = useState('');
    const [incservice, setincservice] = useState('');
    const [sessions, setsessions] = useState('');
    const [noofsessions, setnoofsessions] = useState('5');
    const [validfor, setvalidfor] = useState([]);
    const [price, setprice] = useState([]);
    const [taxval, settaxval] = useState('2');
    const [getTaxlist, setTaxlist] = useState([]);
    const [color, setcolor] = useState([]);
    const [terms, setterms] = useState([]);
    const [snackopen, setsnackopen] = React.useState(false);
    const [state, setState] = React.useState({
        snackopen: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal } = state;
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


        const a = '';


        fetch(
            'https://www.laabamone.com/appoint_api.php?eventtype=membershipadd&id='
            + a + '&name=' +
            name +
            '&desc=' +
            desc +
            '&incservice=' +
            incservice +
            '&sessions=' +
            sessions +
            '&noofsessions=' +
            noofsessions +
            '&validfor=' +
            validfor +
            '&price=' +
            price +
            '&color=' +
            color +
            '&terms=' +
            terms
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
    useEffect(() => {

        // console.log()

        const getCompanydetails = async () => {
            //  alert(ReactSession.get("login_cid1"));
            const loginid = ReactSession.get("login_cid1");
            const response = await fetch('https://www.laabamone.com/appoint_api.php?eventtype=getregistercompanydetails&id=' + loginid);
            const json = await response.json();
            console.log(json[0].image);
            console.log(json.image);
            setCompanyDetails(json[0]);

        }
        const gettax = async () => {

            const response = await fetch('https://www.laabamone.com/appoint_api.php?eventtype=taxlist');
            const json = await response.json();
            // console.log(json);
            setTaxlist(json);

        }
        getCompanydetails();
        gettax();

    }, [])


    return (
        <>
            <Snackbar style={{ paddingTop: '56px' }} open={snackopen} anchorOrigin={{ vertical, horizontal }} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={() => setsnackopen(false)} severity="success" sx={{ width: '100%' }}>
                    Successfully added.
                </Alert>
            </Snackbar>
            <Root
                header=
                {

                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 6, md: 12 }} sx={{ padding: '0px 10px 10px 0px' }}>

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
                            <Typography sx={{ padding: '20px 0px 0px 0px' }} align={'center'} className="text-14 font-semibold leading-none"> </Typography>
                            <Typography sx={{ padding: '5px 0px' }} align={'center'} className="text-28 font-semibold leading-none">
                                Create a membership</Typography>

                        </Grid>
                        <Grid item xs={2} sx={{ justifyContent: 'center' }} >
                            <Typography sx={{ padding: '20px' }} align={'center'} >

                                <Button disabled={name == '' ? true : false}
                                    align={'center'}
                                    className=""
                                    variant="contained"
                                    color="primary"
                                    sx={{ padding: '25px' }}
                                    onClick={() => savevoucher()}
                                //  startIcon={<FuseSvgIcon size={20}>heroicons-solid:mail</FuseSvgIcon>}
                                >
                                    Save
                                </Button></Typography>
                        </Grid>


                    </Grid>

                }
                content={

                    <div className="flex flex-col flex-auto items-center sm:justify-center min-w-0" style={{ backgroundColor: '#fff' }}>
                        <div className="w-full sm:w-auto min-h-full sm:min-h-auto rounded-0 py-32 px-16 sm:p-48 sm:rounded-2xl" >
                            <div className="w-full max-w-520 sm:w-520 mx-auto sm:mx-0" >
                                <form>

                                    <Grid container spacing={{ xs: 4, md: 12 }} columns={{ xs: 6, sm: 6, md: 12 }} sx={{ padding: '0px 10px 10px 0px' }}>

                                        <Grid item xs={3}></Grid>

                                        <Grid item xs={7} >
                                            <Grid xs={12}>
                                                <Grid container sx={{ border: '1px solid  #ddd6d6', padding: '20px' }} spacing={{ xs: 2, md: 2 }} columns={{ xs: 6, sm: 6, md: 12 }} >

                                                    <Grid item xs={12}>
                                                        <Typography className="text-2xl font-semibold leading-tight">
                                                            {t('Basic info')}
                                                            <br />
                                                        </Typography>

                                                    </Grid>
                                                    <br />
                                                    <Divider />

                                                    <Grid item xs={12}>

                                                        <Typography className="font-semibold mb-4 text-15"> {t('Membership name')}</Typography>
                                                        <TextField
                                                            fullWidth
                                                            value={name} onChange={(e) => setname(e.target.value)} variant="outlined"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>

                                                        <Typography className="font-semibold mb-4 text-15"> {t('Membership  description')}</Typography>
                                                        <TextField multiline
                                                            rows={3}
                                                            fullWidth
                                                            value={desc} onChange={(e) => setdesc(e.target.value)} variant="outlined"
                                                        />
                                                    </Grid>



                                                </Grid>
                                            </Grid>
                                            <Grid xs={12} sx={{ paddingTop: '40px' }}>
                                                <Grid container sx={{ border: '1px solid  #ddd6d6', padding: '20px' }} spacing={{ xs: 2, md: 2 }} columns={{ xs: 6, sm: 6, md: 12 }} >

                                                    <Grid item xs={12} >
                                                        <Typography className="text-2xl font-semibold leading-tight">
                                                            {t('Services and sessions')}
                                                            <br />
                                                            <Typography>Add the services and sessions included in the membership.</Typography>
                                                        </Typography>

                                                    </Grid>
                                                    <br />
                                                    <Divider />

                                                    <Grid item xs={12}>

                                                        <Typography className="font-semibold mb-4 text-15"> {t('Included services')}</Typography>
                                                        <TextField
                                                            fullWidth
                                                            value={incservice} onChange={(e) => setincservice(e.target.value)} variant="outlined"
                                                        />
                                                    </Grid>



                                                    <Grid item xs={6} >
                                                        <Typography className="font-semibold mb-4 text-15">{t('Sessions')}</Typography>
                                                        <FormControl fullWidth>

                                                            <Select
                                                                labelId="demo-simple-select-label"
                                                                id="demo-simple-select" value={sessions} onChange={(e) => setsessions(e.target.value)}
                                                            >

                                                                <MenuItem value={"days_14"}>Limited</MenuItem>
                                                                <MenuItem value="months_2">Unlimited</MenuItem>

                                                            </Select>
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item xs={5}>

                                                        <Typography className="font-semibold mb-4 text-15"> {t('Number of sessions')}</Typography>
                                                        <TextField
                                                            fullWidth
                                                            value={noofsessions} onChange={(e) => setnoofsessions(e.target.value)} variant="outlined"
                                                        />
                                                    </Grid>

                                                </Grid>
                                            </Grid>
                                            <Grid xs={12} sx={{ paddingTop: '40px' }}>
                                                <Grid container sx={{ border: '1px solid  #ddd6d6', padding: '20px' }} spacing={{ xs: 2, md: 2 }} columns={{ xs: 6, sm: 6, md: 12 }} >

                                                    <Grid item xs={12} >
                                                        <Typography className="text-2xl font-semibold leading-tight">
                                                            {t('Pricing and payment')}
                                                            <br />
                                                            <Typography>Choose how you'd like your clients to pay.</Typography>
                                                        </Typography>

                                                    </Grid>
                                                    <br />
                                                    <Divider />





                                                    <Grid item xs={6} >
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
                                                    <Grid item xs={6}>
                                                        <Typography className="font-semibold mb-4 text-15"> {t('Value')}</Typography>



                                                        <OutlinedInput fullWidth value={price} onChange={(e) => setprice(e.target.value)}
                                                            id="outlined-adornment-amount"
                                                            startAdornment={<InputAdornment position="start">₹</InputAdornment>}

                                                        />

                                                    </Grid>
                                                    <Grid item xs={6}>
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
                                                </Grid>
                                            </Grid>
                                            <Grid xs={12} sx={{ paddingTop: '40px' }}>
                                                <Grid container sx={{ border: '1px solid  #ddd6d6', padding: '20px' }} spacing={{ xs: 2, md: 2 }} columns={{ xs: 6, sm: 6, md: 12 }} >

                                                    <Grid item xs={12} >
                                                        <Typography className="text-2xl font-semibold leading-tight">
                                                            {t('Colour customisation')}
                                                            <br />
                                                            <Typography>Select a colour that matches your business.</Typography>
                                                        </Typography>

                                                    </Grid>
                                                    <br />
                                                    <Divider />



                                                    <Grid item xs={1}>  <Box sx={_0652e3166} onClick={() => setcolor('blue')} title="green" style={{ background: ` linear-gradient(-225deg, rgb(11, 109, 217) 0%, rgb(95, 171, 255) 100%)` }}></Box> </Grid>
                                                    <Grid item xs={1}>  <Box sx={_0652e3166} onClick={() => setcolor('black')} title="green" style={{ background: `linear-gradient(-225deg, rgb(16, 25, 40) 0%, rgb(32, 48, 71) 100%)` }}></Box> </Grid>
                                                    <Grid item xs={1}>  <Box sx={_0652e3166} onClick={() => setcolor('green')} title="green" style={{ background: `linear-gradient(-45deg, rgb(0, 166, 156) 0%, rgb(0, 157, 98) 100%)` }}></Box> </Grid>
                                                    <Grid item xs={1}>  <Box sx={_0652e3166} onClick={() => setcolor('orange')} title="green" style={{ background: ` linear-gradient(-45deg, rgb(237, 176, 27) 0%, rgb(222, 100, 38) 100%)` }}></Box> </Grid>
                                                    <Grid item xs={1}>  <Box sx={_0652e3166} onClick={() => setcolor('violet')} title="green" style={{ background: ` linear-gradient(-45deg, rgb(190, 74, 244) 0%, rgb(92, 55, 246) 100%)` }}></Box> </Grid>







                                                </Grid>
                                            </Grid>
                                            <Grid xs={12} sx={{ paddingTop: '40px' }}>
                                                <Grid container sx={{ border: '1px solid  #ddd6d6', padding: '20px' }} spacing={{ xs: 2, md: 2 }} columns={{ xs: 6, sm: 6, md: 12 }} >

                                                    <Grid item xs={12} >
                                                        <Typography className="text-2xl font-semibold leading-tight">
                                                            {t('Terms & Conditions')}
                                                            <br />
                                                            <Typography>If there are any rules attached to your membership it's a good place to mention them.</Typography>
                                                        </Typography>

                                                    </Grid>
                                                    <br />
                                                    <Divider />

                                                    <Grid item xs={12}>

                                                        <Typography className="font-semibold mb-4 text-15"> {t('Terms & Conditions')}</Typography>
                                                        <TextField multiline
                                                            rows={3}
                                                            fullWidth
                                                            value={terms} onChange={(e) => setterms(e.target.value)} variant="outlined"
                                                        />
                                                    </Grid>






                                                </Grid>
                                            </Grid>
                                        </Grid>


                                        <Grid item xs={2}></Grid>

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

export default Membershipadd;