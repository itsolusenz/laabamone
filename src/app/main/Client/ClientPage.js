import { styled } from '@mui/material/styles';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { useEffect, useState } from 'react';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import DemoHeader from './shared-components/DemoHeader';
import DemoContent from './shared-components/DemoContent';
import DemoSidebar from './shared-components/DemoSidebar';
import { useParams } from 'react-router-dom';
const Root = styled(FusePageCarded)(({ theme }) => ({
  '& .FusePageCarded-header': {},
  '& .FusePageCarded-toolbar': {},
  '& .FusePageCarded-content': {},
  '& .FusePageCarded-sidebarHeader': {},
  '& .FusePageCarded-sidebarContent': {},
}));

function ClientPage() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const routeParams = useParams();
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
          id={Boolean(routeParams.id)}
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

export default ClientPage;
