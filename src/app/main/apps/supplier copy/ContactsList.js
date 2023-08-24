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
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
function ContactsList(props) {
  const filteredData = useSelector(selectFilteredContacts);
  const groupedFilteredContacts = useSelector(selectGroupedFilteredContacts);
  const [Clientdata, setClientdata] = useState([]);
  const [supplier, setsupplier] = useState([]);
  useEffect(() => {

    const getsupplier = async () => {

      const response = await fetch('https://www.laabamone.com/appoint_api.php?eventtype=suplierlist');
      const json = await response.json();
      console.log(json);
      setsupplier(json);

    }
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

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
      className="flex flex-col flex-auto w-full max-h-full"
    >


      <div className="relative">
        <Typography color="text.secondary" className="px-32 py-4 text-14 font-medium">

        </Typography>
        <Divider />
        <List className="w-full m-0 p-0">
          <ListItem
            className="px-32 py-16"
            sx={{ bgcolor: 'background.paper' }}
            button


          >

            <ListItemText
              classes={{ root: 'm-0', primary: 'font-medium leading-5 truncate' }}

              secondary={
                <>
                  <Typography
                    className="inline"
                    component="span"
                    variant="h6"

                  >
                    Supplier Name
                  </Typography>

                </>
              }
            />
          </ListItem>
          {supplier.map((item) => (
            <ContactListItem key={item.id} contact={item} />
          ))}
        </List>
      </div>


    </motion.div>
  );
}

export default ContactsList;
