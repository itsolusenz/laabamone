/* eslint-disable spaced-comment */
/* eslint-disable prettier/prettier */
import { React, useEffect, useState, useRef } from 'react';

import Breadcrumbs from '@mui/material/Breadcrumbs';
//import { Link } from 'react-router-dom';
//import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { motion } from 'framer-motion';
//import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { styled, useTheme } from '@mui/material/styles';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import PhoneInput from 'react-phone-input-2';
import Autocomplete from '@mui/material/Autocomplete';
import Switch from '@mui/material/Switch';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {
  TextField,
  Typography,
  Button,
  Box,
  Link,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
} from '@mui/material';
import Address from '../Address'
import Newclient from './Newclient'
//import IconButton from '@mui/material/IconButton';
// FuseSvgIcon from '@fuse/core/FuseSvgIcon';
const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    backgroundColor: theme.palette.background.paper,
  },
}));
const clientsource = [
  {
    label: 'Existing Customer',
  },
  {
    label: 'Google',
  },
  {
    label: 'Locanto',
  },
  {
    label: 'Agent-Arun Spa',
  },
  {
    label: 'Agent-Prakash',
  },
  {
    label: 'Agent-Hari',
  },
  {
    label: 'Walk-In',
  },
];
const language = [
  {
    label: 'Select language',
  },
  {
    label: 'Bulgarian',
  },
  {
    label: 'Czech(cestina)',
  },
  {
    label: 'Danish(dansk)',
  },
  {
    label: 'German(Deutsch)',
  },
  {
    label: 'Greek',
  },
  {
    label: 'English(English)',
  },
  {
    label: 'Spanish(espanol)',
  },
  {
    label: 'Bulgarian',
  },
  {
    label: 'Finnish(suomi)',
  },
  {
    label: 'French(francais)',
  },
  {
    label: 'Croatian(hrvaski)',
  },
  {
    label: 'Hungarian(magyar)',
  },
  {
    label: 'Italian(italiano)',
  },
  {
    label: 'Lithuanian(lietuviu)',
  },
  {
    label: 'Norwegian Bokmal(norsk bokmal)',
  },
  {
    label: 'Dutch(Nederlands)',
  },
  {
    label: 'Polish(polski)',
  },
  {
    label: 'Portuguese(portugues)',
  },
  {
    label: 'Romanian(romana)',
  },
  {
    label: 'Swedish(svenska)',
  },
  {
    label: 'Russian(pycckNN)',
  },
  {
    label: 'Ukrainian(ykpaiHCbKa)',
  },
  {
    label: 'Slovenian(slovenscina)',
  },
];

function DemoHeader(props) {
  const { leftSidebarToggle, rightSidebarToggle, editid } = props;

  function handleClick() { }

  const { t } = useTranslation('ClientPage');
  const [Openmodal, setOpenModal] = useState(false);
  const [OpenAddressmodal, setOpenAddressmodal] = useState(false);
  const [Closemodal, setCloseModal] = useState(true);
  const [Firstname, setFirstname] = useState([]);
  const [Lastname, setLastname] = useState();
  const [Email, setEmail] = useState();
  const [Mobno, setMobno] = useState();
  const [Mobno1, setMobno1] = useState();
  const [Mobcode, setMobcode] = useState();
  const [Mobcode1, setMobcode1] = useState();
  const [Info, setInfo] = useState();
  const [Source, setSource] = useState();
  const [Gender, setGender] = useState();
  const [Dob, setDob] = useState();
  const theme = useTheme();
  const routeParams = useParams();
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
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
  const StyledSwipeableDrawer = styled(SwipeableDrawer)(({ theme }) => ({
    '& .MuiDrawer-paper': {
      backgroundColor: theme.palette.background.default,
      width: '100%',
    },
  }));
  useEffect(() => {
    alert(editid);
    if (editid != '' && editid != null && editid != undefined) {
      setOpenModal(true);
    }

  }, [editid]);
  const setClose = () => {
    setOpenModal(false);
  }
  const saveclient = async () => {
    console.log(Firstname);
    console.log(Lastname);
    console.log(Email);
    console.log(Mobno);
    console.log(Mobcode);
    console.log(Gender);
    console.log(Dob);

    fetch(
      'https://www.laabamone.com/appoint_api.php?eventtype=clientadd&firstname=' +
      Firstname +
      '&lastname=' +
      Lastname +
      '&email=' +
      Email +
      '&mob_code=' +
      Mobcode +
      '&mob_no=' +
      Mobno +
      '&gender=' +
      Gender +
      '&dob=' +
      Dob
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log('yes');
          console.log(result);
        },
        (error) => {
          console.log('no');
          console.log(error);
        }
      );
  };
  return (
    //sm:py-32 sm:px-40
    <div className="flex flex-col p-10 w-full ">
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
              <Box sx={{ width: '100%', borderBottom: '1px solid #bfc3c7', paddingBottom: '20px' }} marginTop={5} marginBottom={5} >

                <IconButton className="m-4 absolute top-0  z-999" onClick={() => (setClose())} size="large">
                  <FuseSvgIcon color="action">heroicons-outline:x</FuseSvgIcon>

                </IconButton>

                <Typography align={'center'} className="text-28 font-semibold leading-none">{t('Add a new client')}</Typography>


                <Button onClick={() => saveclient()}
                  className="m-4 absolute top-8 right-10 z-999 whitespace-nowrap"
                  variant="contained"
                  color="primary"
                  sx={{ padding: '0px 50px' }}

                >
                  {t('Save')}
                </Button>
              </Box>


            }
            content={

              <Newclient id={Boolean(routeParams.id)} />
            }
            scroll={isMobile ? 'normal' : 'content'}
          />



        </StyledSwipeableDrawer>



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
          {t('Clients list')}

        </Typography>
        <div className="flex shrink-0 items-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
          >
            <Button onClick={() => setOpenModal(!Openmodal)}
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
        </div>
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

export default DemoHeader;
