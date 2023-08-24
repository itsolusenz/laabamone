import React, { useState, useEffect } from 'react';
import { Button, TextField, Grid, Box, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import MUIDataTable from "mui-datatables";
import { useDispatch, useSelector } from 'react-redux';
import withRouter from '@fuse/core/withRouter';
import FuseLoading from '@fuse/core/FuseLoading';
import { useTranslation } from 'react-i18next';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
//import Button from '@mui/material/Button';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
        id: 'population',
        label: 'Population',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'Size\u00a0(km\u00b2)',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'density',
        label: 'Density',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
];


function ClientGroupTable(props) {
    const dispatch = useDispatch();
    const { t } = useTranslation('navigation');
    const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
    const [loading, setLoading] = useState(true);
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [order, setOrder] = useState({
        direction: 'asc',
        id: null,
    });
    const [snackopen, setsnackopen] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');
    const [Status, setStatus] = useState('1');
    const [Name, setName] = useState();
    const [NamePer, setNamePer] = useState();


    const [Orderr, setOrderr] = useState();
    const [editid, seteditid] = useState();
    const [state, setState] = React.useState({
        snackopen: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal } = state;
    const [leftSidebarOpen, setLeftSidebarOpen] = useState(!isMobile);

    useEffect(() => {
        const companyid = localStorage.getItem('login_cid1');
        const getcat = async () => {

            const response = await fetch('https://www.laabamone.com/appoint_api.php?eventtype=clientgrouplist&companyid=' + companyid);
            const json = await response.json();
            console.log(json);
            setOrder(json);

        }
        getcat();

    }, [leftSidebarOpen]);

    const getcat1 = async () => {

        const response = await fetch('https://www.laabamone.com/appoint_api.php?eventtype=clientgrouplist');
        const json = await response.json();
        // console.log(json);
        setOrder(json);

    }
    const handleClose = () => {
        setOpen(false);
    };
    const Savecat = async () => {
        console.log('', Name);
        console.log('', Status);
        console.log('', Orderr);
        const companyid = localStorage.getItem('login_cid1');
        let str = 'id=';
        if (editid != '' && editid != null && editid != undefined) {
            str = 'id=' + editid;
        }
        console.log('https://www.laabamone.com/appoint_api.php?eventtype=clientgroupadd&' + str + '&name=' +
            Name + '&companyid=' + companyid + '&status=' + Status + '&order=' + Orderr);
        fetch(
            'https://www.laabamone.com/appoint_api.php?eventtype=clientgroupadd&' + str + '&name=' +
            Name + '&companyid=' + companyid + '&status=' + Status + '&order=' + Orderr

        )
            .then((res) => res.json())
            .then(
                (result) => {
                    console.log('yes');
                    console.log(result);
                    setsnackopen(true);
                    setOpen(false);
                    getcat1();

                },
                (error) => {
                    console.log('no');
                    console.log(error);
                }
            );
    }
    const calleditdata = async (a) => {
        const companyid = localStorage.getItem('login_cid1');
        const response1 = await fetch('https://www.laabamone.com/appoint_api.php?eventtype=clientgrouplist&cid=' + a + '&companyid=' + companyid);
        const json1 = await response1.json();
        // console.log(json1[0].name);
        if (json1[0].name != '') {
            const n = json1[0].name;
            const p = json1[0].percentage;
            const s = json1[0].status;
            const o = json1[0].order;

            setName(n);
            setNamePer(p);
            setStatus(s);
            setOrderr(o);
            setOpen(true);
        }

    }
    const handleRowClick = (id) => {

        seteditid(id);
        calleditdata(id);

    };
    function handleToggleLeftSidebar() {

        setLeftSidebarOpen(!leftSidebarOpen);
    }
    const columns1 = [

        { id: 'sno', name: "sno", label: 's.no', minWidth: 170 },
        { id: 'name', name: "name", label: 'Client Group Name', minWidth: 170 },
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
    const options = {
        filter: true,
        filterType: "dropdown",
        responsive: "scroll",
        onRowClick: handleRowClick,
    };


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <>
            <div className="flex flex-col p-10 w-full ">
                <Snackbar style={{ paddingTop: '56px' }} open={snackopen} anchorOrigin={{ vertical, horizontal }} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={() => setsnackopen(false)} severity="success" sx={{ width: '100%' }}>
                        Successfully added.
                    </Alert>
                </Snackbar>
                <div>

                    <Dialog
                        open={open}
                        onClose={handleClose}
                        scroll={scroll}
                        aria-labelledby="scroll-dialog-title"
                        aria-describedby="scroll-dialog-description"
                    >

                        <DialogTitle id="scroll-dialog-title">{t('Client Group')} </DialogTitle>
                        <DialogContent >
                            <DialogContentText
                                id="scroll-dialog-description"
                                // ref={descriptionElementRef}
                                tabIndex={-1}
                            >

                                <Grid container spacing={1}>
                                    <Grid item xs={12} marginTop={2}>
                                        <TextField fullWidth
                                            value={Name}
                                            placeholder={t('Client Group name')}
                                            onChange={(e) => setName(e.target.value)}
                                            label="Client Group Name" variant="outlined" />
                                    </Grid>

                                    <Grid item xs={12} marginTop={2}>
                                        <FormControl fullWidth variant="outlined" >
                                            <InputLabel id="demo-simple-select-standard-label">Status</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-standard-label"
                                                id="demo-simple-select-standard"
                                                value={Status}
                                                onChange={(e) => setStatus(e.target.value)}
                                                label="Status"
                                            >

                                                <MenuItem value={1} >Active</MenuItem>
                                                <MenuItem value={2}>Inactive</MenuItem>

                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} marginTop={2}>
                                        <TextField fullWidth id="standard-basic"
                                            value={Orderr}
                                            onChange={(e) => setOrderr(e.target.value)}
                                            label="Order" variant="outlined" />
                                    </Grid>
                                </Grid>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>

                            <Button onClick={handleClose}>{t('Cancel')}</Button>
                            <Button variant="contained" color={'primary'} onClick={() => Savecat()}> {t('Save')}</Button>
                        </DialogActions>
                    </Dialog>

                </div>
                <div className="flex items-center w-full mt-8 -mx-10">

                    {/*}  <IconButton
                        onClick={(ev) => handleToggleLeftSidebar()}
                        aria-label="open left sidebar"
                        size="small"
                    >
                        <FuseSvgIcon>heroicons-outline:menu</FuseSvgIcon>
    </IconButton>*/}



                    <Typography
                        component="h2"
                        className="flex-1 text-3xl md:text-4xl font-extrabold tracking-tight leading-7 sm:leading-10 truncate mx-10"
                    >


                    </Typography>
                    <div className="flex shrink-0 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
                        >
                            <Button onClick={() => setOpen(true)}
                                className=""
                                // component={Link}
                                // to="/apps/e-commerce/products/new"
                                variant="contained"
                                color="primary"
                                startIcon={<FuseSvgIcon>heroicons-outline:plus</FuseSvgIcon>}
                            >
                                {t('Add')}
                            </Button>
                        </motion.div>
                    </div>


                </div>

            </div>

            <div className="w-full flex flex-col min-h-full">
                <>

                    {order.length > '0' ?

                        <>
                            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
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
                                                                return (
                                                                    column.id != 'id' &&
                                                                    <TableCell key={column.id} align={column.align} >
                                                                        {
                                                                            column.format && typeof value === 'number'
                                                                                ? column.format(value)
                                                                                : value
                                                                        }
                                                                    </TableCell>
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
        </>
    );
}

export default withRouter(ClientGroupTable);
