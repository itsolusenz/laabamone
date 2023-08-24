import { React ,useEffect, useState, useRef } from 'react';
import Avatar from '@mui/material/Avatar';

import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { lighten, ThemeProvider } from '@mui/material/styles';
import { selectMainThemeDark } from 'app/store/fuse/settingsSlice';
import { OutlinedInput,Button } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
//import { useSelector } from 'react-redux';
import Paper from '@mui/material/Paper';
//import { motion } from 'framer-motion';
//import { getFaqsMost, selectFaqsMost } from '../store/faqsMostSlice';
//import FaqList from '../faqs/FaqList';
import Newclient from './Newteam';
import Teamheader from './teamheader';
import { useTranslation } from 'react-i18next';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { styled ,useTheme} from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';

import FusePageSimple from '@fuse/core/FusePageSimple';
const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    backgroundColor: theme.palette.background.paper,
  },
}));
function HelpCenterHome() {
  const mainThemeDark = useSelector(selectMainThemeDark);
  const dispatch = useDispatch();
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

  const [Openmodal, setOpenModal] = useState(false);
  const { t } = useTranslation('navigation');
  //const faqsMost = useSelector(selectFaqsMost);
  const setClose =() => {  
    setOpenModal(false);
  }
  useEffect(() => {
  //  dispatch(getFaqsMost());
  }, [dispatch]);
  const container = {
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  const StyledSwipeableDrawer = styled(SwipeableDrawer)(({ theme }) => ({
    '& .MuiDrawer-paper': {
      backgroundColor: theme.palette.background.default,
      width: '100%',
    },
  }));
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <div className="flex flex-col flex-auto min-w-0">
     <div>
      <StyledSwipeableDrawer
      open={Openmodal}
      anchor="right"
      //onOpen={(ev) => {}}
     // onClose={Closemodal}
      disableSwipeToOpen
    >
     
     <Root
      header=
      {
        <div className="flex flex-col w-full px-24 sm:px-32" style={{borderBottom:'1px solid #f1f1f1'}}>
        <div  className="flex flex-col sm:flex-row flex-auto sm:items-center min-w-0 my-32 sm:my-20">
          <div className="flex flex-auto items-center min-w-0">
           
           
              <Typography className="text-2xl md:text-2xl font-semibold tracking-tight leading-7 md:leading-snug truncate">
               {t('Add')}  {t('New')} {t('Team')} {t('Member')}
              </Typography>
  
           
           
          </div>
          <div className="flex items-center mt-24 sm:mt-0 sm:mx-8 space-x-12">
            <Button
              className="whitespace-nowrap"
              variant="contained"
              color="primary"
              startIcon={<FuseSvgIcon size={20}>heroicons-outline:save</FuseSvgIcon>}
            >
                {t('Save')}
            </Button>
            <Button onClick={(e) => (setClose())}
              className="whitespace-nowrap"
              variant="contained"
              color="secondary"
              startIcon={<FuseSvgIcon size={20}>heroicons-outline:x</FuseSvgIcon>}
            >
              Close
            </Button>
          </div>
        </div>
        </div>
    }
      content={<Newclient />}
      //ref={pageLayout}
      //rightSidebarContent={<ContactsSidebarContent />}
      //rightSidebarOpen={rightSidebarOpen}
      //rightSidebarOnClose={() => setRightSidebarOpen(false)}
     // rightSidebarWidth={640}
      scroll={isMobile ? 'normal' : 'content'}
    />
  
  
  
      </StyledSwipeableDrawer>
       

      
      </div>
    
    
    
      <ThemeProvider theme={mainThemeDark}>
        <Box
          className="relative pt-32 pb-112 px-16 sm:pt-80 sm:pb-90 sm:px-64 overflow-hidden"
          sx={{
            backgroundColor: 'primary.dark',
            color: (theme) => theme.palette.getContrastText(theme.palette.primary.main),
          }}
        >
          <div className="flex flex-col items-center justify-center  mx-auto w-full">
           
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0 } }}>
              <Typography className="mt-4 text-32 sm:text-48 font-extrabold tracking-tight leading-tight text-center">
               Team Members
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.3 } }}
            >
              <Typography
                color="text.secondary"
                className="mt-12 sm:text-20 text-center tracking-tight"
              >
                Add ,edit and delete your team members.
              </Typography>
            </motion.div>
            <div className="flex shrink-0 items-center" > 
              <OutlinedInput
              component={motion.div}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
              className="flex flex-1 items-center px-16 mx-8 rounded-full h-44 w-full max-w-320 sm:max-w-680 mt-10 sm:mt-20"
              placeholder="Search.."
              variant="outlined"
              fullWidth
              startAdornment={
                <InputAdornment position="start">
                  <FuseSvgIcon color="disabled">heroicons-solid:search</FuseSvgIcon>
                </InputAdornment>
              }
              inputProps={{
                'aria-label': 'Search',
              }}
            />
           
        <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
        className="flex flex-2 items-center   mt-10 sm:mt-20"

          
        >
          <Button  onClick={()=>setOpenModal(!Openmodal)}
            className=""
           // component={Link}
           // to="/apps/e-commerce/products/new"
            variant="contained"
            color="primary"
            startIcon={<FuseSvgIcon>heroicons-outline:plus</FuseSvgIcon>}
          >
             { t('Add')}   
          </Button>
        </motion.div>
          </div>
          </div>

          <svg
            className="absolute inset-0 pointer-events-none"
            viewBox="0 0 960 540"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMax slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              className="text-gray-700 opacity-25"
              fill="none"
              stroke="currentColor"
              strokeWidth="100"
            >
              <circle r="234" cx="196" cy="23" />
              <circle r="234" cx="790" cy="491" />
            </g>
          </svg>
        </Box>
      </ThemeProvider>
    
      <div className="flex flex-col items-center px-24 sm:px-10">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-32 md:gap-y-0 md:gap-x-24 w-full max-w-sm md:max-w-4xl -mt-64 sm:-mt-96">
        
          <Card
            component={Link}
            to="faqs"
            role="button"
            className="relative flex flex-col rounded-2xl shadow hover:shadow-lg overflow-hidden transition-shadow ease-in-out duration-150"
          >
             <div className="flex flex-col flex-auto w-full p-32 text-center">
            <div className="w-128 h-128 mx-auto rounded-full overflow-hidden">
              <img className="w-full h-full object-cover" src={'/assets/images/logo/default1.jpg'} alt="member" />
            </div>
            <Typography className="mt-24 font-medium">Worker 1</Typography>
            <Typography color="text.secondary">Team head</Typography>
          </div>
           {/*} <div className="flex flex-col flex-auto items-center justify-center p-32 text-center">
              <div className="text-2xl font-semibold">FAQs</div>
              <div className="md:max-w-160 mt-4" color="text.secondary">
                Frequently asked questions and answers
              </div>
            </div>*/}
            <Box
              className="flex items-center justify-center py-16 px-32"
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? lighten(theme.palette.background.default, 0.4)
                    : lighten(theme.palette.background.default, 0.02),
              }}
            >
              <Typography color="secondary" className="mx-8">
                Edit
              </Typography>
              <FuseSvgIcon size={20} color="secondary">
                heroicons-solid:arrow-narrow-right
              </FuseSvgIcon>
            </Box>
          </Card>
          <Card
            component={Link}
            to="faqs"
            role="button"
            className="relative flex flex-col rounded-2xl shadow hover:shadow-lg overflow-hidden transition-shadow ease-in-out duration-150"
          >
             <div className="flex flex-col flex-auto w-full p-32 text-center">
            <div className="w-128 h-128 mx-auto rounded-full overflow-hidden">
              <img className="w-full h-full object-cover" src={'/assets/images/logo/default1.jpg'} alt="member" />
            </div>
            <Typography className="mt-24 font-medium">Worker 2</Typography>
            <Typography color="text.secondary">Team Member</Typography>
          </div>
           {/*} <div className="flex flex-col flex-auto items-center justify-center p-32 text-center">
              <div className="text-2xl font-semibold">FAQs</div>
              <div className="md:max-w-160 mt-4" color="text.secondary">
                Frequently asked questions and answers
              </div>
            </div>*/}
            <Box
              className="flex items-center justify-center py-16 px-32"
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? lighten(theme.palette.background.default, 0.4)
                    : lighten(theme.palette.background.default, 0.02),
              }}
            >
              <Typography color="secondary" className="mx-8">
                Edit
              </Typography>
              <FuseSvgIcon size={20} color="secondary">
                heroicons-solid:arrow-narrow-right
              </FuseSvgIcon>
            </Box>
          </Card>
          <Card
            component={Link}
            to="faqs"
            role="button"
            className="relative flex flex-col rounded-2xl shadow hover:shadow-lg overflow-hidden transition-shadow ease-in-out duration-150"
          >
             <div className="flex flex-col flex-auto w-full p-32 text-center">
            <div className="w-128 h-128 mx-auto rounded-full overflow-hidden">
              <img className="w-full h-full object-cover" src={'/assets/images/logo/default1.jpg'} alt="member" />
            </div>
            <Typography className="mt-24 font-medium">Worker 3</Typography>
            <Typography color="text.secondary">Manager</Typography>
          </div>
           {/*} <div className="flex flex-col flex-auto items-center justify-center p-32 text-center">
              <div className="text-2xl font-semibold">FAQs</div>
              <div className="md:max-w-160 mt-4" color="text.secondary">
                Frequently asked questions and answers
              </div>
            </div>*/}
            <Box
              className="flex items-center justify-center py-16 px-32"
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? lighten(theme.palette.background.default, 0.4)
                    : lighten(theme.palette.background.default, 0.02),
              }}
            >
              <Typography color="secondary" className="mx-8">
                Edit
              </Typography>
              <FuseSvgIcon size={20} color="secondary">
                heroicons-solid:arrow-narrow-right
              </FuseSvgIcon>
            </Box>
          </Card>
         
        
        </div>
      </div>
      <div className="flex flex-col items-center px-24 sm:px-10" style={{paddingTop:'10px'}}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-32 md:gap-y-0 md:gap-x-24 w-full max-w-sm md:max-w-4xl ">
        <Card
            component={Link}
            to="faqs"
            role="button"
            className="relative flex flex-col rounded-2xl shadow hover:shadow-lg overflow-hidden transition-shadow ease-in-out duration-150"
          >
             <div className="flex flex-col flex-auto w-full p-32 text-center">
            <div className="w-128 h-128 mx-auto rounded-full overflow-hidden">
              <img className="w-full h-full object-cover" src={'/assets/images/logo/default1.jpg'} alt="member" />
            </div>
            <Typography className="mt-24 font-medium">Worker 4</Typography>
            <Typography color="text.secondary">Ass .Manager</Typography>
          </div>
           {/*} <div className="flex flex-col flex-auto items-center justify-center p-32 text-center">
              <div className="text-2xl font-semibold">FAQs</div>
              <div className="md:max-w-160 mt-4" color="text.secondary">
                Frequently asked questions and answers
              </div>
            </div>*/}
            <Box
              className="flex items-center justify-center py-16 px-32"
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? lighten(theme.palette.background.default, 0.4)
                    : lighten(theme.palette.background.default, 0.02),
              }}
            >
              <Typography color="secondary" className="mx-8">
                Edit
              </Typography>
              <FuseSvgIcon size={20} color="secondary">
                heroicons-solid:arrow-narrow-right
              </FuseSvgIcon>
            </Box>
          </Card>
        </div>
      </div>


    </div>
  );
}

export default HelpCenterHome;
