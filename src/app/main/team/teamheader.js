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
import Newclient from './Newteam'
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

function Teamheader() {
 
  const { t } = useTranslation('navigation');
 
  return (
   
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
  
  );
}

export default Teamheader;
