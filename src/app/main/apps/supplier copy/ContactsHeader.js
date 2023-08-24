import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';

import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { Box } from '@mui/system';
import {
  selectFilteredContacts,
  selectSearchText,
  setContactsSearchText,
} from './store/contactsSlice';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import { Grid, Link, IconButton, Badge, Button, Chip } from '@mui/material';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { React, useEffect, useState, useRef } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Newsupplier from './Newsupplier'

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    backgroundColor: theme.palette.background.paper,
  },
}));
function ContactsHeader(props) {
  const dispatch = useDispatch();
  const searchText = useSelector(selectSearchText);
  const filteredData = useSelector(selectFilteredContacts);
  const theme = useTheme();
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const [Openmodal, setOpenModal] = useState(false);
  const StyledSwipeableDrawer = styled(SwipeableDrawer)(({ theme }) => ({
    '& .MuiDrawer-paper': {
      backgroundColor: theme.palette.background.default,
      width: '100%',
    },
  }));
  const setClose = () => {

    setOpenModal(false);
  }
  return (
    <div className=" w-full border-b-1">
      <StyledSwipeableDrawer
        open={Openmodal}
        anchor="right"
        disableSwipeToOpen
      >

        <Root
          header=
          {
            <Box sx={{ width: '100%' }} marginTop={5} marginBottom={5}  >

              <IconButton className="m-4 absolute top-0  z-999" onClick={(e) => (setClose())} size="large">
                <FuseSvgIcon color="action">heroicons-outline:x</FuseSvgIcon>

              </IconButton>


            </Box>

          }
          content={<Newsupplier modal={Openmodal} />}
          scroll={isMobile ? 'normal' : 'content'}
        />



      </StyledSwipeableDrawer>

      <div className="flex flex-col items-center sm:items-start">


        <Grid item container spacing={'2'} style={{ padding: '10px 30px' }}>
          <Grid item container xs={'12'} style={{ paddingBottom: '20px' }}>
            <Grid item container xs={'8'}>
              <Box> <Typography fullWidth
                className="inline"
                variant="h4"
                style={{ fontWeight: 700 }}
              >
                Supplier &nbsp;
                <Chip label="1" />

              </Typography>
                <Typography fullWidth style={{ fontSize: '14px', color: 'black' }} >Add and manage details of your suppliers. </Typography>
              </Box>
            </Grid>
            <Grid item container xs={'4'} justifyContent={'right'}>
              <Button
                className=""
                component={Link}
                to="/apps/e-commerce/products/new"
                variant="contained"
                color="secondary"
                onClick={() => setOpenModal(true)}
              >
                Add New
              </Button>

            </Grid>
          </Grid>
          <Grid item container xs={'12'} style={{ backgroundColor: '#f8f8fb' }}>
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
          </Grid>

        </Grid>






      </div>

    </div >
  );
}

export default ContactsHeader;
