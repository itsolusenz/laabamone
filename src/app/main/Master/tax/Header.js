import * as React from 'react';
import { Button, TextField, Grid, Box, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Breadcrumbs from '@mui/material/Breadcrumbs';
//import { Link } from 'react-router-dom';
//import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { motion } from 'framer-motion';
import { trueGray } from 'tailwindcss/colors';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function DemoHeader(props) {


  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const { leftSidebarToggle, rightSidebarToggle } = props;


  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef < HTMLElement > (null);
  React.useEffect(() => {
    /* if (open) {
       const { current: descriptionElement } = descriptionElementRef;
       if (descriptionElement !== null) {
         descriptionElement.focus();
       }
     }*/
  }, [open]);
  return (
    //sm:py-32 sm:px-40
    <div className="flex flex-col p-10 w-full ">

      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle id="scroll-dialog-title">Add Tax</DialogTitle>
          <DialogContent >
            <DialogContentText
              id="scroll-dialog-description"
              // ref={descriptionElementRef}
              tabIndex={-1}
            >
              <Grid width={'100%'} >

                <TextField fullWidth id="standard-basic" label="Tax Displayname" variant="standard" />

                <TextField fullWidth id="standard-basic" label="Tax percentage" variant="standard" />



                <TextField fullWidth id="standard-basic" label="Status" variant="standard" />
              </Grid>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button variant="contained" color={'primary'} onClick={handleClose}>Save</Button>
          </DialogActions>
        </Dialog>

      </div>
      <div className="flex items-center w-full mt-8 -mx-10">
        {leftSidebarToggle && (
          <div className="flex shrink-0 items-center">
            <IconButton onClick={leftSidebarToggle} aria-label="toggle sidebar">
              <FuseSvgIcon>heroicons-outline:menu</FuseSvgIcon>
            </IconButton>
          </div>
        )}
        <Typography
          component="h2"
          className="flex-1 text-3xl md:text-4xl font-extrabold tracking-tight leading-7 sm:leading-10 truncate mx-10"
        >
          Tax List

        </Typography>
        {/*} <div className="flex shrink-0 items-center">
          <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
        >
          <Button onClick={()=>setOpen(true)}
            className=""
           // component={Link}
           // to="/apps/e-commerce/products/new"
            variant="contained"
            color="primary"
            startIcon={<FuseSvgIcon>heroicons-outline:plus</FuseSvgIcon>}
          >
            Add
          </Button>
        </motion.div>
          </div>
        {rightSidebarToggle && (
          <div className="flex shrink-0 items-center">
            <IconButton onClick={rightSidebarToggle} aria-label="toggle sidebar">
              <FuseSvgIcon>heroicons-outline:menu</FuseSvgIcon>
            </IconButton>
          </div>
       )}*/}
      </div>
    </div>
  );
}

//export default DemoHeader;
