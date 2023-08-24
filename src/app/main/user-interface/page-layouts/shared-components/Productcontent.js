import { React ,useEffect, useState, useRef } from 'react';
//import React from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
//import Cities from "./cities";
import FusePageSimple from '@fuse/core/FusePageSimple';
import { styled ,useTheme} from '@mui/material/styles';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import {TextField,Typography ,Button,Box,Link} from '@mui/material';

import IconButton from '@mui/material/IconButton';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

import { useTranslation } from 'react-i18next';
const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    backgroundColor: theme.palette.background.paper,
  },
}));
export default function Productcontent(){
  const { t } = useTranslation('navigation');
  
    const columns = [
     
      {
        name: <> {t("Product")}  {t("Name")}</>,
        options: {
          filter: true
        }
      },
    
      {
        name: <>{t("Product")}  {t("Category")}</>,
        options: {
          filter: false
        }
      },
      {
        name:  <> {t("Supplier")}</>,
        options: {
          filter: false
        }
      },
      {
        name: <> {t("Quantity")}</>,
        options: {
          filter: false
        }
      },
      {
        name: <> {t("Retail Price")}</>,
        options: {
          filter: false
        }
      },
    
    ];

    const data = [
      [ "Kimberly Ang", "kdfjlkjfl","-", '2',"$230.00"],
      [ "Ong Kim Huat","loruim", "supplier", '1',"$2630.00"],
      [ "Ong Kim Huat","kfi", "sup 1", '5',"$2630.00"],
      [ "Ong Kim Huat","dsf", "su p0", '0',"$2630.00"],
     
      
    ];

    const options = {
      filter: true,
      filterType: "dropdown",
      responsive: "scroll"
    };
    const [Openmodal, setOpenModal] = useState(false);
    const [Closemodal, setCloseModal] = useState(true);
    const theme = useTheme();
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
 
    const setClose =() => {
     // alert('p')
      //setCloseModal(true);
      setOpenModal(false);
    }
    return (
      <>
    


  <MUIDataTable
        title= {t("Products")}
        data={data}
        columns={columns}
        options={options}
      />
      </>
     
    );
  
}


