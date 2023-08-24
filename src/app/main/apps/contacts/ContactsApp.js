import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import { styled } from '@mui/material/styles';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import ContactsSidebarContent from './ContactsSidebarContent';
import ContactsHeader from './ContactsHeader';
import ContactsList from './ContactsList';
import ContactsList1 from '../e-commerce/orders/OrdersTable';
import reducer from './store';
import PackageAppSidebar from "../supplier/PackageAppSidebar";

import { getTags } from './store/tagsSlice';
import { getCountries } from './store/countriesSlice';
import { getContacts } from './store/contactsSlice';
import { Typography, Button, Box, Divider } from '@mui/material';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    backgroundColor: theme.palette.background.paper,
  },
}));

function ContactsApp(props) {
  const dispatch = useDispatch();
  const pageLayout = useRef(null);
  const [client, setclient] = useState(false);
  const routeParams = useParams();
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(!isMobile);

  useDeepCompareEffect(() => {
    dispatch(getContacts());
    dispatch(getCountries());
    dispatch(getTags());
  }, [dispatch]);

  useEffect(() => {

    setRightSidebarOpen(Boolean(routeParams.id));
  }, [routeParams]);

  return (
    <>
      <br />
      {client != true &&
        <>  <Button align={'Center'} marginTop={4} marignBottome={2}
          className="mx-8"
          // variant="contained"
          //  color="primary"
          onClick={() => setclient(!client)}
        >
          <FuseSvgIcon size={20}>heroicons-outline:plus</FuseSvgIcon>
          <span className="mx-8">Add client</span>
        </Button>
          <Divider /></>
      }
      {
        client != false &&
        <Root
          header={<ContactsHeader pageLayout={pageLayout} />}
          content={<ContactsList1 />}

          ref={pageLayout}
          rightSidebarContent={<ContactsSidebarContent />}
          rightSidebarOpen={rightSidebarOpen}
          rightSidebarOnClose={() => setRightSidebarOpen(false)}
          rightSidebarWidth={640}
          scroll={isMobile ? 'normal' : 'content'}
        />}
    </>
  );

}

export default withReducer('contactsApp', reducer)(ContactsApp);
