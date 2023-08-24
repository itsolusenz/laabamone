import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { lighten } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import * as yup from 'yup';
import { openNotificationPanel } from 'app/theme-layouts/shared-components/notificationPanel/store/stateSlice';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
const schema = yup.object().shape({
  name: yup.string().required('You must enter a name'),
});
function TimelineTab() {
  const [data, setData] = useState(null);
 
  const { control, watch, reset, handleSubmit, formState, getValues } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  
  
  useEffect(() => {
    axios.get('/api/profile/timeline').then((res) => {
      setData(res.data);
    });
  }, []);
  const Openfile = ()=>{
   
  }

  if (!data) {
    return null;
  }

  const container = {
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };
  const shapeStyles = { bgcolor: 'primary.main', width: 40, height: 40 };
const shapeCircleStyles = { borderRadius: '50%' };

  const circle = (
    <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} > <input  type={'file'} style={{visibility:'hidden',cursor:'pointer'}}></input></Box>
  );
  return (
    <>
    <Card width="100%" sx={{maxWidth:'100%'}}  flex>

          <Box width="50%">
          <TextField fullWidth
              className="mt-32"
             
              label="LastName"
              placeholder="LastName"
              
              variant="outlined"
              
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FuseSvgIcon size={20}>heroicons-solid:user-circle</FuseSvgIcon>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box width="50%">
          <TextField fullWidth
              className="mt-32"
             
              label="LastName"
              placeholder="LastName"
              
              variant="outlined"
              
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FuseSvgIcon size={20}>heroicons-solid:user-circle</FuseSvgIcon>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

    </Card>
    
    
    
    
    
    
    
    
    
    
    
    
    
    {/*}
    
    <motion.div variants={container} initial="hidden" animate="show" className="w-full">
      <div className="md:flex">
        <div className="flex flex-col w-full md:w-320 md:ltr:mr-32 md:rtl:ml-32">
          <Card component={motion.div} variants={item} className="flex flex-col w-full px-32 pt-24">
            <div className="flex justify-between items-center pb-16">
              <Typography className="text-2xl font-semibold leading-tight">
              Personal details
              </Typography>
             
            </div>

          {}  <CardContent className="p-0">
              <List className="p-0">
              Set your name and contact info here. The email address entered here is used for your login access.
              </List>
            </CardContent>
          </Card>
        </div>
         <Card sx={{padding:'20px'}}>
          <Box>
        <div className="flex flex-col flex-1">
       
       
                <motion.div fullWidth initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 0.1 } }}>

        <div className="w-full">
                          <div className="flex flex-auto  items-center justify-center">
                          <Controller
                          control={control}
                          name="avatar"
                          render={({ field: { onChange, value } }) => (
                            <Box
                              sx={{
                                borderWidth: 4,
                                borderStyle: 'solid',
                                borderColor: 'background.paper',
                              }}
                              className="relative flex items-center justify-center w-128 h-128 rounded-full overflow-hidden"
                            >
                              <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
                              <div className="absolute inset-0 flex items-center justify-center z-20">
                                <div>
                                  <label htmlFor="button-avatar" className="flex p-8 cursor-pointer">
                                    <input
                                      accept="image/*"
                                      className="hidden"
                                      id="button-avatar"
                                      type="file"
                                      onChange={async (e) => {
                                        function readFileAsync() {
                                          return new Promise((resolve, reject) => {
                                            const file = e.target.files[0];
                                            if (!file) {
                                              return;
                                            }
                                            const reader = new FileReader();

                                            reader.onload = () => {
                                              resolve(`data:${file.type};base64,${btoa(reader.result)}`);
                                            };

                                            reader.onerror = reject;

                                            reader.readAsBinaryString(file);
                                          });
                                        }

                                        const newImage = await readFileAsync();

                                        onChange(newImage);
                                      }}
                                    />
                                    <FuseSvgIcon className="text-white">heroicons-outline:camera</FuseSvgIcon>
                                  </label>
                                </div>
                                <div>
                                  <IconButton
                                    onClick={() => {
                                      onChange('');
                                    }}
                                  >
                                    <FuseSvgIcon className="text-white">heroicons-solid:trash</FuseSvgIcon>
                                  </IconButton>
                                </div>
                              </div>
                              <Avatar
                            
                            sx={{ borderColor: 'background.paper' }}
                            className="w-128 h-128 border-4"
                            src="assets/images/avatars/male-04.jpg"
                            alt="User avatar">
                            
                            </Avatar>
                            
                            </Box>
                          )}
                          />
                          </div >
        </div>






                </motion.div>
       
            
           
             
               <div className="md:flex w-full ">
               

        <div className="flex flex-col w-full md:w-320 md:w-320 md:ltr:mr-32 md:rtl:ml-32">
        <TextField
              className="mt-32"             
              label="Firstname"
              placeholder="Firstname"            
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FuseSvgIcon size={20}>heroicons-solid:user-circle</FuseSvgIcon>
                  </InputAdornment>
                ),
              }}
            /><br/><br/>
             <TextField 
              className="mt-8 mb-16"
             
              label="Phone Number"
              placeholder="Phone Number"
              id="Phone Number"
            //  error={!!errors.address}
             // helperText={errors?.address?.message}
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FuseSvgIcon size={20}>heroicons-solid:tag</FuseSvgIcon>
                  </InputAdornment>
                ),
              }}
            />
        </div>

        <div className="flex flex-col flex-1 w-full">
        <TextField
              className="mt-32"
             
              label="LastName"
              placeholder="LastName"
              
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FuseSvgIcon size={20}>heroicons-solid:user-circle</FuseSvgIcon>
                  </InputAdornment>
                ),
              }}
            /><br/>
             <TextField
              className="mt-32"
             
              label="Email"
              placeholder="Email"
              id="address"
            //  error={!!errors.address}
             // helperText={errors?.address?.message}
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FuseSvgIcon size={20}>heroicons-solid:mail</FuseSvgIcon>
                  </InputAdornment>
                ),
              }}
            />
      




         

        </div>
               </div>
             
            
         
         




         

        </div>
        </Box>  </Card>
        
      </div>
      <div className="md:flex" style={{paddingTop:'20px'}}>
        <div className="flex flex-col w-full md:w-320 md:ltr:mr-32 md:rtl:ml-32">
          <Card component={motion.div} variants={item} className="flex flex-col w-full px-32 pt-24">
            <div className="flex justify-between items-center pb-16">
              <Typography className="text-2xl font-semibold leading-tight">
              Change password
              </Typography>
             
            </div>

          {}  <CardContent className="p-0">
              <List className="p-0">
              To make an update, enter your existing password followed by a new one. If you don't know your existing password, you can log out and use the Reset Password link on the Log In page.              </List>
            </CardContent>
          </Card>
        </div>
         <Card sx={{padding:'20px'}}>
          <Box>
        <div className="flex flex-col flex-1">
       
       
               
            
           
             
               <div className="md:flex w-full ">
               

        <div className="flex flex-col w-full md:w-320 md:w-320 md:ltr:mr-32 md:rtl:ml-32">
        <TextField
              className="mt-32"             
              label="Current password"
              placeholder="Current password"            
              variant="outlined"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <FuseSvgIcon size={20}>heroicons-solid:key</FuseSvgIcon>
                  </InputAdornment>
                ),
              }}
            /><br/><br/>
             <TextField 
              className="mt-8 mb-16"
             
              label="confirm password"
              placeholder="confirm password"
              id="Phone Number"
            //  error={!!errors.address}
             // helperText={errors?.address?.message}
              variant="outlined"
              fullWidth
              InputProps={{
               endAdornment: (
                  <InputAdornment position="start">
                    <FuseSvgIcon size={20}>heroicons-solid:eye</FuseSvgIcon>
                  </InputAdornment>
                ),
              }}
            />
        </div>

        <div className="flex flex-col flex-1 w-full">
        <TextField
              className="mt-32"
             
              label="New password"
              placeholder="New password"
              
              variant="outlined"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <FuseSvgIcon size={20}>heroicons-solid:eye</FuseSvgIcon>
                  </InputAdornment>
                ),
              }}
            />



         

        </div>
               </div>
             
            
         
         




         

        </div>
        </Box>  </Card>
        
      </div>
      <Box
        className="flex items-center mt-40 py-14 pr-16 pl-4 sm:pr-48 sm:pl-36 border-t"
        sx={{ backgroundColor: 'background.default' }}
      >
       
        <Button className="ml-auto"  to={-1}>
          Cancel
        </Button>
        <Button
          className="ml-8"
          variant="contained"
          color="secondary"
         // disabled={_.isEmpty(dirtyFields) || !isValid}
         // onClick={handleSubmit(onSubmit)}
        >
          Save
        </Button>
      </Box>
    </motion.div>*/}
    </>
  );
}

export default TimelineTab;
