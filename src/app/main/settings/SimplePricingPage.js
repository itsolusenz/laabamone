import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { darken } from '@mui/material/styles';
import Box from '@mui/material/Box';
import {Paper,Divider} from '@mui/material';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import SimplePricingCard from './SimplePricingCard';
import SimplePricingFeatureItem from './SimplePricingFeatureItem';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
function SimplePricingPage() {
  const [period, setPeriod] = useState('month');
  const { t } = useTranslation('navigation');
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
const Gourl=(e)=>{
    if(e=='T')
    {
            window.location.href='/team';
    }
  
}
  const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  };
  const StyledList = styled(List)(({ theme }) => ({
    '& .fuse-list-item': {
      '&:hover': {
        backgroundColor:
          theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0,0,0,.04)',
      },
      padding: '12px 2px 2px 12px',
    }


  }));
  return (
    <div className="relative flex flex-col flex-auto min-w-0 overflow-hidden" >
      <div className="relative pt-32 pb-48 sm:pt-10 sm:pb-96 px-10 sm:px-20 overflow-hidden">
       

        <div className="flex justify-center mt-2 sm:mt-0">
          <div className="w-full max-w-sm md:max-w-6xl">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="items-center grid grid-cols-1 md:grid-cols-3  gap-y-1 lg:gap-y-0 md:gap-x-24 lg:gap-x-30"
            >
              <motion.div variants={item} >
                <div   className={clsx(
        'flex-col  max-w-sm md:max-w-none  p-6 sm:py-14 sm:px-14 lg:rounded-4xl',
        'lg:rounded-l-0'
      )} style={{border:'1px solid #c9c6c6',borderRadius:'20px'}}>
 
 
               <div style={{paddingLeft:'10px'}} className="mt-4 text-2xl sm:text-2xl sm:py-14 font-bold tracking-tight leading-tight ">
               {t('Account')} {t('setup')}
               </div>
             
               <StyledList  >
                  <div className='fuse-list-item'>
                    <div  style={{cursor:'pointer'}} className="hover">
                        <div style={{paddingTop:'0px'}} className="mt-4 text-1xl sm:text-1xl font-bold tracking-tight leading-tight ">
                        {t('Business')} {t('details')}
                        <Box className="flex">
                                <Typography   className="mt-8 leading-24">
                                Manage Settings such as Business name and TimeZone &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </Typography>
                                <FuseSvgIcon  size={40} color="primary"  >
                                  heroicons-solid:arrow-narrow-right
                                </FuseSvgIcon>
                        </Box>
                      
                        </div>
                      
                    </div>
                  </div>
                  </StyledList  >   
         
           <div style={{paddingTop:'10px'}}><Divider  color={'#c9c6c6'}  /></div>
           <StyledList  >
                  <div className='fuse-list-item'>
                    <div  style={{cursor:'pointer'}} className="hover">
                        <div style={{paddingTop:'0px'}} className="mt-4 text-1xl sm:text-1xl font-bold tracking-tight leading-tight ">
                        {t('Locations')} 
                        <Box className="flex">
                                <Typography   className="mt-8 leading-24">
                                Manage Multiple outlets for your Business&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                                </Typography>
                                <Typography >
                                 <FuseSvgIcon  size={40} color="primary" >
                                  heroicons-solid:arrow-narrow-right
                                </FuseSvgIcon>
                        </Typography>
                                
                        </Box>
                       
                        </div>
                      
                    </div>
                  </div>
                  
           </StyledList>
           <div style={{paddingTop:'10px'}}><Divider  color={'#c9c6c6'}  /></div>
           <StyledList  >
                  <div className='fuse-list-item'>
                    <div  style={{cursor:'pointer'}} className="hover">
                        <div style={{paddingTop:'0px'}} className="mt-4 text-1xl sm:text-1xl font-bold tracking-tight leading-tight ">
                        {t('Online Booking')} 
                        <Box className="flex">
                                <Typography   className="mt-8 leading-24">
                                Adjust your business info and profile images displayed online &nbsp;&nbsp;&nbsp;
                                </Typography>
                                <FuseSvgIcon  size={40} color="primary" >
                                  heroicons-solid:arrow-narrow-right
                                </FuseSvgIcon>
                        </Box>
                      
                        </div>
                      
                    </div>
                  </div>
                  
           </StyledList>
                  
            
                </div>
                <div  style={{paddingTop:'10px'}}></div>
                <div   className={clsx(
        'flex-col  max-w-sm md:max-w-none  p-4 sm:py-14 sm:px-14 lg:rounded-4xl',
        'lg:rounded-l-0'
      )} style={{border:'1px solid #c9c6c6',borderRadius:'20px'}}>
 
 
               <div style={{paddingLeft:'10px'}}  className="mt-4 text-2xl sm:text-2xl font-bold tracking-tight leading-tight ">
               {t('Services')} 
               </div>
             
            <StyledList  >
                  <div className='fuse-list-item'>
                    <div  style={{cursor:'pointer'}} className="hover">
                        <div style={{paddingTop:'10px'}} className="mt-4 text-1xl sm:text-1xl font-bold tracking-tight leading-tight ">
                               {t('Services')} {t('Menu')}
                        <Box className="flex">
                                <Typography   className="mt-8 leading-24">
                                Review Messages sent to clients to about their appointments. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </Typography>
                                <FuseSvgIcon  size={40} color="primary"  >
                                  heroicons-solid:arrow-narrow-right
                                </FuseSvgIcon>
                        </Box>
                      
                        </div>
                      
                    </div>
                  </div>
                  
           </StyledList>
           <div style={{paddingTop:'10px'}}><Divider  color={'#c9c6c6'}  /></div>
           <StyledList  >
                  <div className='fuse-list-item'>
                    <div  style={{cursor:'pointer'}} className="hover">
                        <div style={{paddingTop:'0px'}} className="mt-4 text-1xl sm:text-1xl font-bold tracking-tight leading-tight ">
                        {t('Vouchers')}
                        <Box className="flex">
                                <Typography   className="mt-8 leading-24">
                             Track why clients did not arrive for their appointments.&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                                </Typography>
                                <Typography >
                                 <FuseSvgIcon  size={40} color="primary" >
                                  heroicons-solid:arrow-narrow-right
                                </FuseSvgIcon>
                        </Typography>
                                
                        </Box>
                       
                        </div>
                      
                    </div>
                  </div>
                  
           </StyledList>
           <div style={{paddingTop:'10px'}}><Divider  color={'#c9c6c6'}  /></div>
           <StyledList  >
                  <div className='fuse-list-item'>
                    <div  style={{cursor:'pointer'}} className="hover">
                        <div style={{paddingTop:'0px'}} className="mt-4 text-1xl sm:text-1xl font-bold tracking-tight leading-tight ">
                        {t('Vouchers')}  {t('Settings')}
                        <Box className="flex">
                                <Typography   className="mt-8 leading-24">
                             Track why clients did not arrive for their appointments.&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                                </Typography>
                                <Typography >
                                 <FuseSvgIcon  size={40} color="primary" >
                                  heroicons-solid:arrow-narrow-right
                                </FuseSvgIcon>
                        </Typography>
                                
                        </Box>
                       
                        </div>
                      
                    </div>
                  </div>
                  
           </StyledList>
           <div style={{paddingTop:'10px'}}><Divider  color={'#c9c6c6'}  /></div>
           <StyledList  >
                  <div className='fuse-list-item'>
                    <div  style={{cursor:'pointer'}} className="hover">
                        <div style={{paddingTop:'0px'}} className="mt-4 text-1xl sm:text-1xl font-bold tracking-tight leading-tight ">
                        {t('Membership')} 
                        <Box className="flex">
                                <Typography   className="mt-8 leading-24">
                             Track why clients did not arrive for their appointments.&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                                </Typography>
                                <Typography >
                                 <FuseSvgIcon  size={40} color="primary" >
                                  heroicons-solid:arrow-narrow-right
                                </FuseSvgIcon>
                        </Typography>
                                
                        </Box>
                       
                        </div>
                      
                    </div>
                  </div>
                  
           </StyledList>
            
                </div>            
              </motion.div>
              <motion.div variants={item}  style={{paddingTop:'14px'}}>
                <div   className={clsx(
        'flex-col  max-w-sm md:max-w-none  p-4 sm:py-14 sm:px-14 lg:rounded-4xl',
        'lg:rounded-l-0'
      )} style={{border:'1px solid #c9c6c6',borderRadius:'20px',paddingTop:'15px'}}>
 
 
               <div style={{paddingLeft:'10px'}} className="mt-4 text-2xl sm:text-2xl font-bold tracking-tight leading-tight ">
              {t('Client')} 
               </div>
             
            <StyledList  >
                  <div className='fuse-list-item'>
                    <div  style={{cursor:'pointer'}} className="hover">
                        <div style={{paddingTop:'0px'}} className="mt-4 text-1xl sm:text-1xl font-bold tracking-tight leading-tight ">
                               {t('Client')} {t('notifications')}
                        <Box className="flex">
                                <Typography   className="mt-8 leading-24">
                                Review Messages sent to clients to about their appointments. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </Typography>
                                <FuseSvgIcon  size={40} color="primary"  >
                                  heroicons-solid:arrow-narrow-right
                                </FuseSvgIcon>
                        </Box>
                      
                        </div>
                      
                    </div>
                  </div>
                  
           </StyledList>
           <div style={{paddingTop:'10px'}}><Divider  color={'#c9c6c6'}  /></div>
           <StyledList  >
                  <div className='fuse-list-item'>
                    <div  style={{cursor:'pointer'}} className="hover">
                        <div style={{paddingTop:'0px'}} className="mt-4 text-1xl sm:text-1xl font-bold tracking-tight leading-tight ">
                        {t('Cancellation')} {t('Reasons')} 
                        <Box className="flex">
                                <Typography   className="mt-8 leading-24">
                             Track why clients did not arrive for their appointments.&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                                </Typography>
                                <Typography >
                                 <FuseSvgIcon  size={40} color="primary" >
                                  heroicons-solid:arrow-narrow-right
                                </FuseSvgIcon>
                        </Typography>
                                
                        </Box>
                       
                        </div>
                      
                    </div>
                  </div>
                  
           </StyledList>
         
            
                </div>
               <div  style={{paddingTop:'10px'}}></div>
                <div   className={clsx(
        'flex-col  max-w-sm md:max-w-none  p-4 sm:py-14 sm:px-14 lg:rounded-4xl',
        'lg:rounded-l-0'
      )} style={{border:'1px solid #c9c6c6',borderRadius:'20px'}}>
 
 
               <div style={{paddingLeft:'10px'}} className="mt-4 text-2xl sm:text-2xl font-bold tracking-tight leading-tight ">
              {t('Sales')} 
               </div>
             
            <StyledList  >
                  <div className='fuse-list-item'>
                    <div  style={{cursor:'pointer'}} className="hover">
                        <div style={{paddingTop:'0px'}} className="mt-4 text-1xl sm:text-1xl font-bold tracking-tight leading-tight ">
                               {t('Invoice')} {t('Sequencing')}
                        <Box className="flex">
                                <Typography   className="mt-8 leading-24">
                                Review Messages sent to clients to about their appointments. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </Typography>
                                <FuseSvgIcon  size={40} color="primary"  >
                                  heroicons-solid:arrow-narrow-right
                                </FuseSvgIcon>
                        </Box>
                      
                        </div>
                      
                    </div>
                  </div>
                  
           </StyledList>
           <div style={{paddingTop:'10px'}}><Divider  color={'#c9c6c6'}  /></div>
           <StyledList  >
                  <div className='fuse-list-item'>
                    <div  style={{cursor:'pointer'}} className="hover">
                        <div style={{paddingTop:'0px'}} className="mt-4 text-1xl sm:text-1xl font-bold tracking-tight leading-tight ">
                        {t('Invoice')} {t('Templates')} 
                        <Box className="flex">
                                <Typography   className="mt-8 leading-24">
                             Track why clients did not arrive for their appointments.&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                                </Typography>
                                <Typography >
                                 <FuseSvgIcon  size={40} color="primary" >
                                  heroicons-solid:arrow-narrow-right
                                </FuseSvgIcon>
                        </Typography>
                                
                        </Box>
                       
                        </div>
                      
                    </div>
                  </div>
                  
           </StyledList>
           <div style={{paddingTop:'10px'}}><Divider  color={'#c9c6c6'}  /></div>
           <StyledList  >
                  <div className='fuse-list-item'>
                    <div  style={{cursor:'pointer'}} className="hover">
                        <div style={{paddingTop:'0px'}} className="mt-4 text-1xl sm:text-1xl font-bold tracking-tight leading-tight ">
                        {t('Taxes')} 
                        <Box className="flex">
                                <Typography   className="mt-8 leading-24">
                             Track why clients did not arrive for their appointments.&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                                </Typography>
                                <Typography >
                                 <FuseSvgIcon  size={40} color="primary" >
                                  heroicons-solid:arrow-narrow-right
                                </FuseSvgIcon>
                        </Typography>
                                
                        </Box>
                       
                        </div>
                      
                    </div>
                  </div>
                  
           </StyledList>
         
         
         
                </div>
                <div  style={{paddingTop:'10px'}}></div>
                <div   className={clsx(
        'flex-col  max-w-sm md:max-w-none  p-4 sm:py-14 sm:px-14 lg:rounded-4xl',
        'lg:rounded-l-0'
      )} style={{border:'1px solid #c9c6c6',borderRadius:'20px'}}>
 
 
               <div style={{paddingLeft:'10px'}} className="mt-4 text-2xl sm:text-2xl font-bold tracking-tight leading-tight ">
               {t('Team')} 
               </div>
             
            <StyledList onClick={()=>Gourl('T')}  >
                  <div className='fuse-list-item'>
                    <div  style={{cursor:'pointer'}} className="hover">
                        <div style={{paddingTop:'0px'}} className="mt-4 text-1xl sm:text-1xl font-bold tracking-tight leading-tight ">
                               {t('Team')} {t('Members')}
                        <Box className="flex">
                                <Typography   className="mt-8 leading-24">
                                Review Messages sent to clients to about their appointments. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </Typography>
                                <FuseSvgIcon  size={40} color="primary"  >
                                  heroicons-solid:arrow-narrow-right
                                </FuseSvgIcon>
                        </Box>
                      
                        </div>
                      
                    </div>
                  </div>
                  
           </StyledList>
          
         
            
                </div>
              </motion.div>
            
            
           
            </motion.div>
          </div>
        </div>
      </div>

     
    </div>
  );
}

export default SimplePricingPage;
