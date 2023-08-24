import { motion } from 'framer-motion';
import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { selectFilteredContacts, selectGroupedFilteredContacts } from './store/contactsSlice';
import ContactListItem from './ContactListItem';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Avatar from '@mui/material/Avatar';
import FaqList from './FaqList';

function ContactsList(props) {
  const filteredData = useSelector(selectFilteredContacts);
  const groupedFilteredContacts = useSelector(selectGroupedFilteredContacts);
  const [Clientdata, setClientdata] = useState([]);
  const [supplier, setsupplier] = useState([]);
  const [Cat, setCat] = useState([]);

  useEffect(() => {

    const getsupplier = async () => {

      const response = await fetch('https://www.laabamone.com/appoint_api.php?eventtype=packagecategorylist');
      const json = await response.json();
      console.log(json);
      setsupplier(json);

    }
    const getcatlist = async () => {
      const response = await fetch('https://www.laabamone.com/appoint_api.php?eventtype=categorylist');
      const json = await response.json();
      console.log(json.length);
      setCat(json);
      // return json;
    }

    getcatlist();
    getsupplier();
  }, []);
  if (!filteredData) {
    return null;
  }

  if (filteredData.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center h-full">
        <Typography color="text.secondary" variant="h5">
          There are no contacts!
        </Typography>
      </div>
    );
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
      className="flex flex-col flex-auto w-full max-h-full"
      style={{ padding: '20px 50px' }}
    >

      <FaqList />


    </motion.div>
  );
}

export default ContactsList;
