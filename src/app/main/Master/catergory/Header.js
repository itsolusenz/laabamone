import React, { useState } from 'react';
import { Button, TextField, Grid, Box, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';
import Breadcrumbs from '@mui/material/Breadcrumbs';
//import { Link } from 'react-router-dom';
//import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { motion } from 'framer-motion';
import { trueGray } from 'tailwindcss/colors';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function DemoHeader(props) {

  const { t } = useTranslation('CalendarApp');
  const [snackopen, setsnackopen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [Status, setStatus] = useState('1');
  const [Name, setName] = useState();
  const [Orderr, setOrderr] = useState();
  const [state, setState] = React.useState({
    snackopen: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal } = state;


  const { leftSidebarToggle, rightSidebarToggle } = props;


  const handleClose = () => {
    setOpen(false);
  };
  const Savecat = async () => {
    console.log('', Name);
    console.log('', Status);
    console.log('', Orderr);
    fetch(
      'https://www.laabamone.com/appoint_api.php?eventtype=categoryadd&name=' +
      Name + '&status=' + Status + '&order=' + Orderr

    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log('yes');
          console.log(result);
          setsnackopen(true);
          setOpen(false);

        },
        (error) => {
          console.log('no');
          console.log(error);
        }
      );
  }
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
      <Snackbar style={{ paddingTop: '56px' }} open={snackopen} anchorOrigin={{ vertical, horizontal }} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={() => setsnackopen(false)} severity="success" sx={{ width: '100%' }}>
          Successfully added.
        </Alert>
      </Snackbar>
      <div>

        <Dialog
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >

          <DialogTitle id="scroll-dialog-title">{t('Add')}  {t('Category')} </DialogTitle>
          <DialogContent >
            <DialogContentText
              id="scroll-dialog-description"
              // ref={descriptionElementRef}
              tabIndex={-1}
            >

              <Grid width={'100%'} >

                <TextField fullWidth id="standard-basic"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                  label="Group Name" variant="standard" />

                <FormControl fullWidth variant="standard" >
                  <InputLabel id="demo-simple-select-standard-label">Statusaa</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={Status}
                    onChange={(e) => setStatus(e.target.value)}
                    label="Status"
                  >

                    <MenuItem value={1} >Active</MenuItem>
                    <MenuItem value={2}>Inactive</MenuItem>

                  </Select>
                </FormControl>


                <TextField fullWidth id="standard-basic"
                  value={Orderr}
                  onChange={(e) => setOrderr(e.target.value)}
                  label="Order" variant="standard" />
              </Grid>
            </DialogContentText>
          </DialogContent>
          <DialogActions>

            <Button onClick={handleClose}>{t('Cancel')}</Button>
            <Button variant="contained" color={'primary'} onClick={() => Savecat()}> {t('Save')}</Button>
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
          {t('Category')} {t('List')}

        </Typography>
        {/*} <div className="flex shrink-0 items-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
          >
            <Button onClick={() => setOpen(true)}
              className=""
              // component={Link}
              // to="/apps/e-commerce/products/new"
              variant="contained"
              color="primary"
              startIcon={<FuseSvgIcon>heroicons-outline:plus</FuseSvgIcon>}
            >
              {t('Add')}
            </Button>
          </motion.div>
        </div>*/}

        {/*} {rightSidebarToggle && (
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
