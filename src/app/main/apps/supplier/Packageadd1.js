import React, { useEffect, useState, useRef } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import { Box, IconButton } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Link1 from '@mui/material/Link';
import Newpackage from './NewPackage';
import * as yup from 'yup';
import _ from '@lodash';
import Paper from '@mui/material/Paper';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { styled, useTheme } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import FusePageSimple from '@fuse/core/FusePageSimple';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
    email: yup.string().email('You must enter a valid email').required('You must enter a email'),
    password: yup
        .string()
        .required('Please enter your password.')
        .min(8, 'Password is too short - must be at least 8 chars.'),
});
const Root = styled(FusePageSimple)(({ theme }) => ({
    '& .FusePageSimple-header': {
        backgroundColor: theme.palette.background.paper,
    },
}));
const StyledSwipeableDrawer = styled(SwipeableDrawer)(({ theme }) => ({
    '& .MuiDrawer-paper': {
        backgroundColor: theme.palette.background.default,
        width: '100%',
    },
}));
const defaultValues = {
    email: '',
    password: '',
    remember: true,
};

function ClassicSignInPage(props) {
    const [Openmodalpack, setOpenModalpack] = useState(false);
    const [packtype, setpacktype] = useState(false);
    const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

    const { control, formState, handleSubmit, reset } = useForm({
        mode: 'onChange',
        defaultValues,
        resolver: yupResolver(schema),
    });
    const { onClosePackage, Packageid } = props;
    const { isValid, dirtyFields, errors } = formState;

    function onSubmit() {
        reset(defaultValues);
    }
    const packageadd = (a) => {

        setpacktype(a);
        setOpenModalpack(true)


    }

    return (

        <div className="flex flex-col flex-auto items-center sm:justify-center min-w-0">
            <Dialog fullScreen
                open={Openmodalpack}

            >
                <DialogContent >
                    <Root
                        header=
                        {
                            <Box sx={{ width: '100%' }} marginTop={5} marginBottom={5}  >

                                <IconButton className="m-4 absolute top-0  z-999" onClick={(e) => (setOpenModalpack(false))} size="large">
                                    <FuseSvgIcon color="action">heroicons-outline:x</FuseSvgIcon>

                                </IconButton>


                            </Box>

                        }
                        content={<Newpackage typeval={packtype} onClosePackage={onClosePackage} Packageid={Packageid} />}
                        scroll={isMobile ? 'normal' : 'content'}
                    />

                </DialogContent>

            </Dialog>
            <Paper className="w-full sm:w-auto min-h-full sm:min-h-auto rounded-0 py-32 px-16 sm:p-48 sm:rounded-2xl sm:shadow">
                <div className="w-full max-w-520 sm:w-520 mx-auto sm:mx-0">

                    <Typography fullWidth style={{ padding: '0px 65px', letterSpacing: '0.6px', fontSize: '28px' }} className="mt-32 font-extrabold tracking-tight leading-tight">
                        Choose a service type
                    </Typography>

                    <Typography onClick={() => packageadd('1')} style={{ border: '1px solid #7b7b85', fontSize: '17px', padding: '30px 20px ', borderRadius: '10px', lineHeight: '24px', fontWeight: 700, color: '#101928', cursor: 'pointer' }} className="mt-32 text-1xl  tracking-tight leading-tight">
                        Single service <br /><Typography underline="none" style={{ fontSize: '15px', color: '#878c93', fontWeight: 400 }} >Services which can be booked individually</Typography>
                    </Typography>

                    <Typography onClick={() => packageadd('2')} style={{ border: '1px solid #7b7b85', fontSize: '17px', padding: '30px 20px ', borderRadius: '10px', lineHeight: '24px', fontWeight: 700, color: '#101928', cursor: 'pointer' }} className="mt-32 text-1xl  tracking-tight leading-tight">
                        Package <br /><Typography underline="none" style={{ fontSize: '15px', color: '#878c93', fontWeight: 400 }} >Multiple services booked together in one appointment</Typography>
                    </Typography>



                </div>
            </Paper>
        </div>
    );
}

export default ClassicSignInPage;
