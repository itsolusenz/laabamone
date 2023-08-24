import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import { styled } from '@mui/material/styles';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import ContactsSidebarContent from '../ContactsSidebarContent';
import Header from './Header';
import Newsupplier from '../Newsupplier';
import Stocktakeslist from './stocktakeslist';
import ContactsList1 from '../../e-commerce/orders/OrdersTable';
import Toggledrawer from '../toggledrawer';
import reducer from '../store';
import { getTags } from '../store/tagsSlice';
import { getCountries } from '../store/countriesSlice';
import { getContacts } from '../store/contactsSlice';
import { Typography, Button, Box, Divider } from '@mui/material';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import PackageAppSidebar from '../PackageAppSidebar';
const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    backgroundColor: theme.palette.background.paper,
  },
}));

function ContactsApp(props) {
  const dispatch = useDispatch();
  const pageLayout = useRef(null);
  const [client, setclient] = useState(false);
  const [supplier, setsupplier] = useState(false);
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
    setLeftSidebarOpen(!isMobile);
    const getsupplier = async () => {

      const response = await fetch('https://www.laabamone.com/appoint_api.php?eventtype=suplierlist');
      const json = await response.json();
      console.log(json);
      setsupplier(json);
      setclient(true);

    }
    getsupplier();


  }, [routeParams, isMobile]);
  function handleToggleLeftSidebar() {
    setLeftSidebarOpen(!leftSidebarOpen);
  }

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
          <span className="mx-8">Add service</span>
        </Button>
          <Divider /></>
      }
      {
        client != false &&
        <Root
          header={<Header
            pageLayout={pageLayout}
            onToggleLeftSidebar={handleToggleLeftSidebar}

          />}
          content={<Stocktakeslist />}
          leftSidebarContent={<PackageAppSidebar />}
          leftSidebarOpen={leftSidebarOpen}
          leftSidebarOnClose={() => setLeftSidebarOpen(false)}
          leftSidebarWidth={240}
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
