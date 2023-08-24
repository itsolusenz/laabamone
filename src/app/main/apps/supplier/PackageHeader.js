import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';

import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import {
  selectFilteredContacts,
  selectSearchText,
  setContactsSearchText,
} from './store/contactsSlice';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import { Grid, Link, IconButton, Badge, Button, Chip } from '@mui/material';
import FusePageSimple from '@fuse/core/FusePageSimple';
import React, { useEffect, useState, useRef } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Packageadd1 from './Packageadd1'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Toolbar from '@mui/material/Toolbar';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import PackageCategoryAdd from './packagecategoryadd';
const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    backgroundColor: theme.palette.background.paper,
  },
}));
function ContactsHeader(props) {
  const dispatch = useDispatch();
  const { onToggleLeftSidebar } = props;
  const searchText = useSelector(selectSearchText);
  const filteredData = useSelector(selectFilteredContacts);
  const theme = useTheme();
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const [Openmodal, setOpenModal] = useState(false);
  const [Openmodalser, setOpenModalser] = useState(false);
  const [Firstname, setFirstname] = useState([]);
  const [description, setdescription] = useState([]);
  const [snackopen, setsnackopen] = React.useState(false);
  const settings = ['New Service', 'New Category'];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [state, setState] = React.useState({
    snackopen: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal } = state;
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const StyledSwipeableDrawer = styled(SwipeableDrawer)(({ theme }) => ({
    '& .MuiDrawer-paper': {
      backgroundColor: theme.palette.background.default,
      width: '100%',
    },
  }));
  const savecategory = async () => {
    console.log(Firstname);
    console.log(description);

    fetch(
      'https://www.laabamone.com/appoint_api.php?eventtype=packagecategoryadd&name=' +
      Firstname +
      '&description=' +
      description
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log('yes');
          setsnackopen(true);
          setOpenModal(false);
          setFirstname('');
          setdescription('');

          console.log(result);
        },
        (error) => {
          console.log('no');
          console.log(error);
        }
      );

  }
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const setClose = () => {

    setOpenModal(false);
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  function handleCloseCategory() {

    setOpenModal(!Openmodal);
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <div className=" w-full border-b-1">
      <Snackbar style={{ paddingTop: '56px' }} open={snackopen} anchorOrigin={{ vertical, horizontal }} autoHideDuration={6000}>
        <Alert onClose={() => setsnackopen(false)} severity="success" sx={{ width: '100%' }}>
          Successfully added.
        </Alert>
      </Snackbar>
      <Dialog
        open={Openmodal}
        onClose={() => Servicemodal(!Openmodal)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>

          <Typography className="font-semibold mb-4 text-15"> New Category </Typography>


        </DialogTitle>
        <DialogContent >
          <PackageCategoryAdd onCloseCategory={handleCloseCategory} />
        </DialogContent>



      </Dialog>
      <Dialog
        fullScreen
        open={Openmodalser}
      //onClose={handleClose}
      //  TransitionComponent={Transition}

      >

        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => setOpenModalser(false)}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>


        </Toolbar>
        <Packageadd1 />

      </Dialog>

      <div className="flex flex-col items-center sm:items-start">


        <Grid item container spacing={'2'} style={{ padding: '10px 30px' }}>
          <Grid item container xs={'12'} style={{ paddingBottom: '20px' }}>
            <Grid item container xs={'8'}>
              <Box>
                <Typography fullWidth
                  className="inline"
                  variant="h4"
                  style={{ fontWeight: 700 }}
                >
                  <IconButton
                    onClick={(ev) => onToggleLeftSidebar()}
                    aria-label="open left sidebar"
                    size="small"
                  >
                    <FuseSvgIcon>heroicons-outline:menu</FuseSvgIcon>
                  </IconButton>&nbsp;Service Menu&nbsp;<Chip label="1" />



                </Typography>
              </Box>
            </Grid>
            <Grid item container xs={'4'} justifyContent={'right'}>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <Button
                    className=""
                    component={Link}
                    //  to="/apps/e-commerce/products/new"
                    variant="contained"
                    color="primary"
                    onClick={handleOpenUserMenu}
                  >
                    Add New   <ExpandMore />
                  </Button>
                  {/*} <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/material-ui-static/images/avatar/2.jpg" />
  </IconButton>*/}
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={() => { setOpenModalser(true) }}>
                    <Typography textAlign="center">New Service</Typography>
                  </MenuItem>
                  <MenuItem onClick={() => setOpenModal(true)}>
                    <Typography textAlign="center">New Category</Typography>
                  </MenuItem>

                </Menu>
              </Box>


            </Grid>
          </Grid>
          {/*}  <Grid item container xs={'12'} style={{ backgroundColor: '#f8f8fb' }}>
            <Grid item container xs={'6'} style={{ padding: '20px 0px', }}>
              <Box
                component={motion.div}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
                className="flex flex-1 w-full sm:w-auto items-center px-16 mx-8 border-1 rounded-full"
              >
                <FuseSvgIcon color="action" size={20}>
                  heroicons-outline:search
                </FuseSvgIcon>

                <Input
                  placeholder="Search contacts"
                  className="flex flex-1 px-16"
                  disableUnderline
                  fullWidth
                  value={searchText}
                  inputProps={{
                    'aria-label': 'Search',
                  }}
                  onChange={(ev) => dispatch(setContactsSearchText(ev))}
                />
              </Box>
            </Grid>
            <Grid item container xs={'6'} justifyContent={'right'}>

            </Grid>
          </Grid>*/}

        </Grid>






      </div>

    </div >
  );
}

export default ContactsHeader;
