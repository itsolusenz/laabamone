import {
  useRoutes,
  useParams
} from "react-router-dom";
import { React, useEffect, useState, useRef } from 'react';
//import React from "react";
import ReactDOM from "react-dom";

import MUIDataTable from "mui-datatables";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
//import Cities from "./cities";
import FusePageSimple from '@fuse/core/FusePageSimple';
import { styled, useTheme } from '@mui/material/styles';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useTranslation } from 'react-i18next';
import { TextField, Typography, Button, Box, Link } from '@mui/material';
import ContactsSidebarContent from '../../apps/contacts/ContactsSidebarContent';

import IconButton from '@mui/material/IconButton';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    backgroundColor: theme.palette.background.paper,
  },
}));
export default function DemoContent() {
  const { t } = useTranslation('ClientPage');
  const [Clientdata, setClientdata] = useState([]);


  useEffect(() => {
    const companyid = localStorage.getItem('login_cid1');

    const callclientlist = async () => {

      const response = await fetch('https://www.laabamone.com/appoint_api.php?eventtype=clientlist&companyid=' + companyid);
      const json = await response.json();
      console.log('restult', json[0].success);
      setClientdata(json);

    }



    callclientlist();
  }, []);

  const handleRowClick = (rowData, rowMeta) => {
    console.log(rowData[6]);
    let router = useRoutes();
    const id = rowData[6];



  };

  const columns = [



    {
      name: "sno",
      label: "s.no",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "name",
      label: <>{t('Client Name')}</>,
      options: {
        filter: true
      }
    },

    {
      name: "mobile",
      label: <>{t("Mobile number")}</>,
      options: {
        filter: false
      }
    },
    {
      name: "gender",
      label: <>{t("Gender")}</>,
      options: {
        filter: false
      }
    },
    {
      name: "reviews",
      label: <>{t("Reviews")}</>,
      options: {
        filter: false
      }
    },
    {
      name: "totsale",
      label: <>{t("Total Sales")}</>,
      options: {
        filter: false
      }
    },
    {
      name: "id",
      label: "",
      options: {
        display: false,
        filter: false
      }
    },



  ];



  const options = {
    filter: true,
    filterType: "dropdown",
    responsive: "scroll",
    onRowClick: handleRowClick,
  };
  const [Openmodal, setOpenModal] = useState(false);
  const [Closemodal, setCloseModal] = useState(true);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
  const theme = useTheme();
  const routeParams = useParams();
  const pageLayout = useRef(null);
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  useEffect(() => {
    setRightSidebarOpen(Boolean(routeParams.id));
  }, [routeParams]);

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

  const setClose = () => {
    // alert('p')
    //setCloseModal(true);
    setOpenModal(false);
  }
  return (
    <>

      {Clientdata.length > '0' ?

        <>
          {Clientdata[0].success != 'error' ?

            <MUIDataTable
              title={t('Clients')}
              data={Clientdata}
              columns={columns}
              options={options}
            />
            :
            <Box sx={{ padding: '40px' }}><Typography sx={{ textAlign: 'center' }}>No data to view...</Typography></Box>
          }
        </>
        :
        <div>Loading...</div>
      }


    </>

  );

}


