import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { Box } from '@mui/system';
import {
  selectFilteredContacts,
  selectSearchText,
  setContactsSearchText,
} from './store/contactsSlice';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import IconButton from '@mui/material/IconButton';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { React, useEffect, useState, useRef } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Newclient from '../../Client/shared-components/Newclient'
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

              <Typography align={'center'} className="text-28 font-semibold leading-none">Add a new client</Typography>


              <Button
                className="m-4 absolute top-0 right-0 z-999 whitespace-nowrap"
                variant="contained"
                color="primary"
                sx={{ padding: '0px 50px' }}
              //  startIcon={<FuseSvgIcon size={20}>heroicons-solid:mail</FuseSvgIcon>}
              >
                Save
              </Button>
            </Box>

          }
          content={<Newclient />}
          scroll={isMobile ? 'normal' : 'content'}
        />



      </StyledSwipeableDrawer>

      <div className="flex flex-col items-center sm:items-start">
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

      </div>
      <div className="flex flex-col items-center sm:items-start">

        <Typography marginTop={2} marginBottom={2} width={'100%'} align={'Center'}
          component={motion.span}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
          delay={500}
          className="text-14 font-medium ml-2"
          color="text.secondary"
        >
          {`${filteredData.length} contacts`}
        </Typography>
      </div>
      <div className="flex flex-col items-center ">
        <Button
          className="mx-8" onClick={() => setOpenModal(true)}

        >
          <FuseSvgIcon size={20}>heroicons-outline:plus</FuseSvgIcon>
          <span className="mx-8">New Client</span>
        </Button>
      </div>
      {/*}  <div className="flex flex-col sm:flex-row space-y-16 sm:space-y-0 flex-1 items-center mt-16 -mx-8">
       
      
     
          </div>*/}
    </div>
  );
}

export default ContactsHeader;
