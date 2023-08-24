import { styled } from '@mui/material/styles';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { useEffect, useState } from 'react';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import DemoHeader from './Header';
import DemoContent from './Content';
import DemoSidebar from '../Sidebar';

const Root = styled(FusePageCarded)(({ theme }) => ({
  '& .FusePageCarded-header': {},
  '& .FusePageCarded-toolbar': {},
  '& .FusePageCarded-content': {},
  '& .FusePageCarded-sidebarHeader': {},
  '& .FusePageCarded-sidebarContent': {},
}));

function  TaxPage() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

  const [leftSidebarOpen, setLeftSidebarOpen] = useState(!isMobile);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);

  useEffect(() => {
    setLeftSidebarOpen(!isMobile);
    setRightSidebarOpen(false);
  }, [isMobile]);

  return (
    <Root
      header={
        <DemoHeader
          leftSidebarToggle={(ev) => {
            setLeftSidebarOpen(!leftSidebarOpen);
          }}
          rightSidebarToggle={(ev) => {
            setRightSidebarOpen(!rightSidebarOpen);
          }}
        />
      }
      content={<DemoContent />}
      leftSidebarOpen={leftSidebarOpen}
      leftSidebarOnClose={() => {
        setLeftSidebarOpen(false);
      }}
      leftSidebarContent={<DemoSidebar />}
      rightSidebarOpen={rightSidebarOpen}
      rightSidebarOnClose={() => {
        setRightSidebarOpen(false);
      }}
      rightSidebarContent={<DemoSidebar />}
      scroll="content"
    />
  );
}

export default TaxPage;
