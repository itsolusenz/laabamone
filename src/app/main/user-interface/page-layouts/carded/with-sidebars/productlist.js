import { styled } from '@mui/material/styles';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { useEffect, useState } from 'react';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import ProductHeader from '../../shared-components/ProductHeader';
import Productcontent from '../../shared-components/Productcontent';
import ProductSidebar from '../../shared-components/ProductSidebar';
import ContactsApp from '../../../../apps/contacts/ContactsApp';
const Root = styled(FusePageCarded)(({ theme }) => ({
  '& .FusePageCarded-header': {},
  '& .FusePageCarded-toolbar': {},
  '& .FusePageCarded-content': {},
  '& .FusePageCarded-sidebarHeader': {},
  '& .FusePageCarded-sidebarContent': {},
}));

function Productlist() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

  const [leftSidebarOpen, setLeftSidebarOpen] = useState(!isMobile);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);

  useEffect(() => {
    setLeftSidebarOpen(!isMobile);
    setRightSidebarOpen(!false);
  }, [isMobile]);

  return (
    <Root
      header={
        <ProductHeader
          leftSidebarToggle={(ev) => {
            setLeftSidebarOpen(!leftSidebarOpen);
          }}
          rightSidebarToggle={(ev) => {
            setRightSidebarOpen(!rightSidebarOpen);
          }}
        />
      }
      content={<Productcontent />}
      leftSidebarOpen={leftSidebarOpen}
      leftSidebarOnClose={() => {
        setLeftSidebarOpen(false);
      }}
      leftSidebarContent={<ProductSidebar />}
     // rightSidebarOpen={rightSidebarOpen}
     // rightSidebarOnClose={() => {
      //  setRightSidebarOpen(false);
     // }}
      rightSidebarContent={<ContactsApp />}
      scroll="content"
    />
  );
}

export default Productlist;
