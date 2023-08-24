import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import FusePageSimple from '@fuse/core/FusePageSimple';
import DemoContent from '@fuse/core/DemoContent';
import axios from 'axios';
import SimplePricingPage from './SimplePricingPage';
import { motion } from 'framer-motion';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    backgroundColor: theme.palette.background.paper,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
  },
  '& .FusePageSimple-toolbar': {},
  '& .FusePageSimple-content': {},
  '& .FusePageSimple-sidebarHeader': {},
  '& .FusePageSimple-sidebarContent': {},
}));

function ExamplePage(props) {
  const { t } = useTranslation('navigation');
  useEffect(() => {
    
  }, [])



  const loadapi = async event =>{
 

    fetch("https://www.laabamone.com/appoint_api.php?eventtype=add&title=3&phone=8122903390")
    .then(res => res.json())
    .then(
      (result) => {
        console.log('yes');
        console.log(result);
      },      
      (error) => {
        console.log('no');
        console.log(error);
        
      }
    )





  




 /* var passdata = {
    "title": "TESTING",
    "id":3
    };
    const responseemp =await fetch("https://www.laabamone.com/appoint_api.php",{
   
      mode: 'no-cors',  
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
       body: JSON.stringify('{"title": 1}'),
            
    });
    const dataemp = await responseemp.json();
    console.log('dataed',dataemp); */ 
}
  return (
    <>
    <Root
      header={
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
            style={{padding:'15px 3px 3px 41px'}}
          >
            <div className="mt-4 text-2xl sm:text-2xl font-bold tracking-tight leading-tight ">
            {t('Business')} {t('settings')}
            </div>
            <div style={{padding:'8px 3px 15px 0px'}}>Manage all your settings in one place.</div>
            <button onClick={loadapi}>dddd</button>
          </motion.div>
      }
      content={
        <div className="p-24"> <SimplePricingPage />
        
        </div>
      }
      scroll="content"
    />
  
    </>
  );
}

export default ExamplePage;
