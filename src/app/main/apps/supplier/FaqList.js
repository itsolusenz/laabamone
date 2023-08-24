import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import { Link, IconButton, Badge, Button, Chip } from '@mui/material';
import Box from '@mui/material/Box';
import { darken } from '@mui/material/styles';
import clsx from 'clsx';
import { styled } from '@mui/material/styles';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import ReorderIcon from '@mui/icons-material/Reorder';
import Packagecategoryadd from './packagecategoryadd'
import NewPackage from './NewPackage'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Snackbar from '@mui/material/Snackbar';
import Toolbar from '@mui/material/Toolbar';
import PackageCategoryAdd from './packagecategoryadd';
import MuiAlert from '@mui/material/Alert';
const container = {
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const StyledAccordion = styled(Accordion)(({ theme }) => ({
  margin: 0,
  border: 'none!important',
  borderRadius: '8px!important',
  marginBottom: 24,
  '&:before': {
    display: 'none',
  },
  '&:first-of-type': {},
  '&:last-of-type': {
    marginBottom: 0,
  },
}));

function FaqList(props) {
  const { list, className } = props;
  console.log('-----------', props);
  const [Cat, setCat] = useState([]);
  const [expanded, setExpanded] = useState(1);
  const [catid, setcatid] = useState(0);
  const [packid, setpackid] = useState(0);
  const [packtype, setpacktype] = useState(0);
  const [Openmodal, setOpenModal] = useState(false);
  const [Openmodalser, setOpenModalser] = useState(false);
  const toggleAccordion = (panel) => (event, _expanded) => {
    setExpanded(_expanded ? panel : false);
  };
  const [snackopen, setsnackopen] = React.useState(false);
  const [state, setState] = React.useState({
    snackopen: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal } = state;
  useEffect(() => {

    const getcatlist = async () => {
      const response = await fetch('https://www.laabamone.com/appoint_api.php?eventtype=packagecategorylist');
      const json = await response.json();
      console.log(json.length);
      setCat(json);
      // return json;
    }

    getcatlist();
  }, [])
  function handleCloseCategory(a) {

    setOpenModal(!Openmodal);
    if (a != null && a != undefined && a != '') {

      setcatid(a);

    }
  }
  const getcatlist_1 = async () => {
    const response = await fetch('https://www.laabamone.com/appoint_api.php?eventtype=packagecategorylist');
    const json = await response.json();
    console.log(json.length);
    setCat(json);
    // return json;
  }
  function handleClosePackage(a, b) {

    setOpenModalser(!Openmodalser);

    if (a == 'success') {
      setsnackopen(true);
      getcatlist_1();
    }
    else if (a != null && a != undefined && a != '' && a != 'success') {

      setpackid(a);
      setpacktype(b)

    }
  }
  const boxSX = {
    "&:hover": {
      border: "1px solid #e6ece6",
      color: '#00aace',
      backgroundColor: '#f8f8fb',
      cursor: 'pointer'
    },
  };
  return (




    <>
      <Snackbar style={{ paddingTop: '56px' }} open={snackopen} anchorOrigin={{ vertical, horizontal }} autoHideDuration={6000} onClose={() => setsnackopen(false)}>
        <Alert onClose={() => setsnackopen(false)} severity="success" sx={{ width: '100%' }}>
          Successfully Updated..
        </Alert>
      </Snackbar>
      <Dialog
        open={Openmodal}

        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>

          <Typography className="font-semibold mb-4 text-15"> New Category </Typography>


        </DialogTitle>
        <DialogContent >
          <PackageCategoryAdd onCloseCategory={handleCloseCategory} Categoryid={catid} />
        </DialogContent>



      </Dialog>
      <Dialog
        fullScreen
        open={Openmodalser}
      //onClose={handleClose}
      //  TransitionComponent={Transition}

      >

        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => setOpenModalser(false)}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>


        </Toolbar>
        <NewPackage onClosePackage={handleClosePackage} Packageid={packid} typeval={packtype} />

      </Dialog>
      {Cat.length > 0 && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className={clsx('', className)}

        >
          <Box
            className="flex items-center mt-32 sm:mt-4 p-2 full overflow-hidden"
            style={{ padding: '12px', backgroundColor: '#f8f8fb' }}
          >
            <Box
              component="button"
              className={clsx(
                'h-40 items-center px-16 cursor-pointer rounded-full font-medium',
                expanded === 1 && 'shadow'
              )}
              onClick={() => setExpanded(1)}
              sx={{ backgroundColor: expanded === 1 ? 'background.paper' : '' }}
              type="button"
            >
              <ListAltIcon sx={{ color: '#00aace' }} />
            </Box>

            <Box
              component="button"
              className={clsx(
                'h-40 items-center px-16 cursor-pointer rounded-full font-medium',
                expanded === false && 'shadow'
              )}
              onClick={() => setExpanded(false)}
              sx={{ backgroundColor: expanded === false ? 'background.paper' : '' }}
              type="button"
            >
              <ViewStreamIcon sx={{ color: '#00aace' }} />
            </Box>
          </Box>

          <br />
          {Cat.map((m, i) =>

            <StyledAccordion key={i}
              component={motion.div}
              variants={item}
              style={{ border: '1px solid black' }}
              classes={{
                root: 'FaqPage-panel shadow',
              }}
              expanded={expanded === 1}
            //  onChange={toggleAccordion(1)}
            >
              <AccordionSummary
                expandIcon={<FuseSvgIcon >heroicons-outline:chevron-down</FuseSvgIcon>}
                style={{ cursor: 'pointer' }}
                onClick={() => handleCloseCategory(`${m.id}`)}
              >
                <div className="flex  py-4">
                  <ReorderIcon sx={{ color: '#b7babe' }} />
                  <Typography className="text-19 px-12 font-bold">{m.name}</Typography>
                </div>
              </AccordionSummary>
              {m.packagedetails != null && m.packagedetails != undefined && m.packagedetails != '' > 0 &&
                m.packagedetails.map((pack, p) => (
                  pack.id != '' && pack.id != null && pack.id != undefined &&
                  <AccordionDetails style={{ borderBottom: '1px solid #b7babe' }} sx={boxSX} key={p} onClick={() => handleClosePackage(`${pack.id}`, `${pack.servicetype}`)} >
                    <div className="flex  py-4">
                      <ReorderIcon sx={{ color: '#b7babe' }} /> <Typography className="text-16 px-12 ">{pack.servicename}</Typography>
                    </div>
                  </AccordionDetails>
                ))}


            </StyledAccordion>
          )}


        </motion.div>
      )
      }
    </>
  );
}

export default FaqList;
