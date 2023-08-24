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
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
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
function Voucheradd(props) {

    const { onCloseVoucher, Voucherid } = props;
    const { t } = useTranslation('ClientPage');
    const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
    const [Pageview, setPageview] = useState('1');
    const [name, setname] = useState('');
    const [desc, setdesc] = useState('');
    const [viewtype, setviewtype] = useState('1');
    const [Countedval, setCountedval] = useState('');

    const [snackopen, setsnackopen] = React.useState(false);
    const [state, setState] = React.useState({
        snackopen: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal } = state;
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [order, setOrder] = useState({
        direction: 'asc',
        id: null,
    });
    const columns1 = [

        { id: 'sno', name: "sno", label: 's.no', minWidth: 170 },
        { id: 'name', name: "name", label: 'Product Name', minWidth: 170 },
        { id: 'stockqty', name: "stockqty", label: 'Expected', minWidth: 170 },
        { id: 'counted', name: "counted", label: 'Counted', minWidth: 170 },

        {
            id: "id",
            name: "id",
            label: "",
            options: {
                display: false,
                filter: false
            }
        },


    ];
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
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
    const getcat = async () => {

        const response = await fetch('https://www.laabamone.com/appoint_api.php?eventtype=productlist');
        const json = await response.json();
        // console.log(json);
        setOrder(json);

    }
    const savevoucher = async () => {
        if (Pageview == '1') {
            setPageview(2);
        }
        else if (Pageview == '2') {
            let na = '';
            if (name != '') {
                na = name;
            }
            else {
                let cnt = order.length + 1;
                na = "STOCKTAKEES " + cnt;
            }
            const a = '';

            fetch(
                'https://www.laabamone.com/appoint_api.php?eventtype=stacktakesadd&id='
                + a + '&name=' +
                na +
                '&desc=' +
                desc +
                '&productids=' +
                Countedval

            )
                .then((res) => res.json())
                .then(
                    (result) => {

                        console.log('yes');
                        setsnackopen(true);
                        console.log(result);

                        getcat();
                        onCloseVoucher();
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
    useEffect(() => {

        const getcat = async () => {

            const response = await fetch('https://www.laabamone.com/appoint_api.php?eventtype=productlist');
            const json = await response.json();
            // console.log(json);
            setOrder(json);

        }


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
        getCompanydetails();
        getcat();

    }, [])
    const addcounterarr = (a, b) => {
        let c = '';
        if (Countedval != '') {
            c = Countedval + ',' + a + '@@' + b;
        }
        else {
            c = a + '@@' + b;
        }
        setCountedval(c);
        alert(c);

    }

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
                            {Pageview == '1' &&

                                <Typography sx={{ padding: '5px 0px' }} align={'center'} className="text-28 font-semibold leading-none">
                                    Add the stocktake info<br />
                                    <Typography>Start a full inventory count to keep accurate stock levels. </Typography>
                                </Typography>} {Pageview == '2' &&
                                    <Typography sx={{ padding: '5px 0px' }} align={'center'} className="text-28 font-semibold leading-none">
                                        Count products
                                    </Typography>
                            }

                        </Grid>
                        <Grid item xs={2} sx={{ justifyContent: 'center' }} >
                            <Typography sx={{ padding: '20px' }} align={'center'} >

                                <Button
                                    align={'center'}
                                    className=""
                                    variant="contained"
                                    color="primary"
                                    sx={{ padding: '10px' }}
                                    onClick={() => savevoucher()}
                                //  startIcon={<FuseSvgIcon size={20}>heroicons-solid:mail</FuseSvgIcon>}
                                >
                                    {Pageview == '1' ? 'Start' : 'Review'}  stocktake
                                </Button></Typography>
                        </Grid>


                    </Grid>

                }
                content={

                    <div className="flex flex-col flex-auto items-center sm:justify-center min-w-0" style={{ backgroundColor: '#fff' }}>
                        <div className="w-full sm:w-auto min-h-full sm:min-h-auto rounded-0 py-32 px-16 sm:p-48 sm:rounded-2xl" >
                            <div className="w-full max-w-520 sm:w-520 mx-auto sm:mx-0" >
                                <form>

                                    <Grid container spacing={{ xs: 6, md: 12 }} columns={{ xs: 6, sm: 6, md: 12 }} sx={{ padding: '40px 0px 0px 10px' }}>
                                        {Pageview == '1' &&
                                            <Grid container spacing={{ xs: 4, md: 12 }} columns={{ xs: 6, sm: 6, md: 12 }} >



                                                <Grid item xs={12} sx={{ paddingTop: '50px' }}>
                                                    <Grid xs={12} sx={{ paddingTop: '50px' }}>
                                                        <Grid container sx={{ border: '1px solid  #ddd6d6', padding: '20px' }} spacing={{ xs: 2, md: 2 }} columns={{ xs: 6, sm: 6, md: 12 }} >

                                                            <Grid item xs={12}>
                                                                <Typography className="text-2xl font-semibold leading-tight">
                                                                    {t('Stocktake info')}
                                                                    <br />
                                                                </Typography>

                                                            </Grid>
                                                            <br />
                                                            <Divider />

                                                            <Grid item xs={12}>

                                                                <Typography className="font-semibold mb-4 text-15"> {t('Stocktake name')}</Typography>
                                                                <TextField
                                                                    fullWidth
                                                                    value={name} onChange={(e) => setname(e.target.value)} variant="outlined"
                                                                />
                                                            </Grid>
                                                            <Grid item xs={12}>

                                                                <Typography className="font-semibold mb-4 text-15"> {t('Stocktake description')}</Typography>
                                                                <TextField multiline
                                                                    rows={3}
                                                                    fullWidth
                                                                    value={desc} onChange={(e) => setdesc(e.target.value)} variant="outlined"
                                                                />
                                                            </Grid>



                                                        </Grid>
                                                    </Grid>

                                                </Grid>




                                            </Grid>
                                        }
                                        {Pageview == '2' &&
                                            <Grid container spacing={{ xs: 2, md: 12 }} sx={{ paddingTop: '50px' }}>



                                                <Grid item xs={9} >
                                                    <Grid xs={12} sx={{ paddingLeft: '60px' }}>
                                                        <Grid container >

                                                            <Grid item xs={12} sx={{ paddingBottom: '50px' }}>
                                                                <Typography className="text-2xl font-semibold leading-tight">
                                                                    {name != '' ? `${name}` : 'STOCKTAKES #1'}
                                                                    <br />
                                                                </Typography>

                                                            </Grid>
                                                            <br />
                                                            <Divider /></Grid>
                                                        <Grid container sx={{ paddingBottom: '30px' }}>
                                                            <Grid item xs={2}>
                                                                <Typography onClick={() => setviewtype('1')} color={viewtype == '1' ? 'white' : 'black'} backgroundColor={viewtype == '1' ? '#6950f3' : 'white'} style={{ border: '1px solid #d5d7da', borderRadius: '30px', padding: '8px', textAlign: 'center', cursor: 'pointer' }}>
                                                                    All ({order.length})
                                                                </Typography>

                                                            </Grid>
                                                            <Grid item xs={2}>
                                                                <Typography onClick={() => setviewtype('2')} color={viewtype == '2' ? 'white' : 'black'} backgroundColor={viewtype == '2' ? '#6950f3' : 'white'} style={{ border: '1px solid #d5d7da', borderRadius: '30px', padding: '8px', textAlign: 'center', cursor: 'pointer' }}>
                                                                    Uncounted   ({order.length})
                                                                </Typography>

                                                            </Grid>
                                                            <Grid item xs={2} onClick={() => setviewtype('3')} color={viewtype == '3' ? 'white' : 'black'} backgroundColor={viewtype == '3' ? '#6950f3' : 'white'} style={{ border: '1px solid #d5d7da', borderRadius: '30px', padding: '8px', textAlign: 'center', cursor: 'pointer' }}>
                                                                <Typography >
                                                                    Counted ({order.length})
                                                                </Typography>

                                                            </Grid>
                                                            <div className="w-full flex flex-col min-h-full" style={{ paddingTop: '30ps' }}>
                                                                <>

                                                                    {order.length > '0' ?

                                                                        <>
                                                                            <Paper sx={{ width: '100%', overflow: 'hidden', paddingTop: '50px' }}>
                                                                                <TableContainer sx={{ maxHeight: 340 }}>
                                                                                    <Table stickyHeader aria-label="sticky table">
                                                                                        <TableHead>
                                                                                            <TableRow>
                                                                                                {columns1.map((column) => (
                                                                                                    <TableCell
                                                                                                        key={column.id}
                                                                                                        align={column.align}
                                                                                                        style={{ minWidth: column.minWidth }}
                                                                                                    >
                                                                                                        {column.label}
                                                                                                    </TableCell>
                                                                                                ))}
                                                                                            </TableRow>
                                                                                        </TableHead>
                                                                                        <TableBody>
                                                                                            {order
                                                                                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                                                                .map((row) => {
                                                                                                    return (
                                                                                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code} onClick={() => handleRowClick(row['id'])}>
                                                                                                            {columns1.map((column) => {

                                                                                                                const value = row[column.id];
                                                                                                                const tabid = row["id"];
                                                                                                                return (
                                                                                                                    <> {column.id != 'id' && column.id != 'counted' &&
                                                                                                                        <TableCell key={column.id} align={column.align} >
                                                                                                                            {
                                                                                                                                column.format && typeof value === 'number'
                                                                                                                                    ? column.format(value)
                                                                                                                                    : value
                                                                                                                            }
                                                                                                                        </TableCell>}
                                                                                                                        {column.id == 'counted' &&
                                                                                                                            <TableCell key={column.id} align={column.align} >
                                                                                                                                {
                                                                                                                                    <TextField width="50%"
                                                                                                                                        fullWidth
                                                                                                                                        variant="outlined"
                                                                                                                                        onChange={(e) => addcounterarr(e.target.value, tabid)}
                                                                                                                                    />
                                                                                                                                }
                                                                                                                            </TableCell>}

                                                                                                                    </>

                                                                                                                );
                                                                                                            })}
                                                                                                        </TableRow>
                                                                                                    );
                                                                                                })}
                                                                                        </TableBody>
                                                                                    </Table>
                                                                                </TableContainer>
                                                                                <TablePagination
                                                                                    rowsPerPageOptions={[10, 25, 100]}
                                                                                    component="div"
                                                                                    count={order.length}
                                                                                    rowsPerPage={rowsPerPage}
                                                                                    page={page}
                                                                                    onPageChange={handleChangePage}
                                                                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                                                                />
                                                                            </Paper>


                                                                            {/*} <MUIDataTable
                                title={t('Category')}
                                data={order}
                                columns={columns1}
                                options={options}
                                            />*/}
                                                                        </>
                                                                        :
                                                                        <div className="flex items-center justify-center h-full">
                                                                            <FuseLoading />
                                                                        </div>
                                                                    }


                                                                </>

                                                            </div>



                                                        </Grid>
                                                    </Grid>

                                                </Grid>


                                                <Grid item xs={3} sx={{ borderLeft: '1px solid #f1f1f1' }}>
                                                    <div className="w-full flex flex-col min-h-full">
                                                        <Grid item xs={12}>
                                                            <Typography className="text-1xl font-semibold leading-tight">
                                                                {t(' Your last counted products')}
                                                                <br />
                                                            </Typography>

                                                        </Grid>
                                                    </div>
                                                </Grid>

                                            </Grid>
                                        }


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