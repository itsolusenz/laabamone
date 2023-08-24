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


function Stocktakeslist(props) {
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
        const getStocktakes = async () => {

            const response = await fetch('https://www.laabamone.com/appoint_api.php?eventtype=stocktakeslist');
            const json = await response.json();
            // console.log(json);
            setOrder(json);

        }
        getStocktakes();

    }, [leftSidebarOpen]);

    const getcat1 = async () => {

        const response = await fetch('https://www.laabamone.com/appoint_api.php?eventtype=taxlist');
        const json = await response.json();
        // console.log(json);
        setOrder(json);

    }
    const handleClose = () => {
        setOpen(false);
    };

    const calleditdata = async (a) => {
        const response1 = await fetch('https://www.laabamone.com/appoint_api.php?eventtype=taxlist&cid=' + a);
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
        { id: 'name', name: "name", label: 'Stock Name', minWidth: 170 },
        { id: 'stockstatus', name: "stockstatus", label: 'Status', minWidth: 170 },
        { id: 'date', name: "date", label: 'Started On', minWidth: 170 },
        { id: 'date', name: "date", label: 'Completed On', minWidth: 170 },
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

        <div className="flex flex-col p-10 w-full ">
            <Snackbar style={{ paddingTop: '56px' }} open={snackopen} anchorOrigin={{ vertical, horizontal }} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={() => setsnackopen(false)} severity="success" sx={{ width: '100%' }}>
                    Successfully added.
                </Alert>
            </Snackbar>




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
        </div>

    );
}

export default withRouter(Stocktakeslist);
