import { motion } from 'framer-motion';
import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { selectFilteredContacts, selectGroupedFilteredContacts } from '../store/contactsSlice';
import VoucherListItem from './VoucherListItem';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
function VoucherList(props) {
  const filteredData = useSelector(selectFilteredContacts);
  const groupedFilteredContacts = useSelector(selectGroupedFilteredContacts);
  const [Clientdata, setClientdata] = useState(false);
  const [supplier, setsupplier] = useState([]);
  const [Voucher, setVoucher] = useState(false);

  useEffect(() => {
    const getVoucher = async () => {

      let str = '';
      const cid = localStorage.getItem('login_cid1');
      if (cid != '' && cid != undefined && cid != null) {
        str = '&companyid=' + cid;
      }
      console.log(str);
      const response = await fetch('https://www.laabamone.com/appoint_api.php?eventtype=Membershiplist' + str);
      const json = await response.json();
      console.log(json);
      setVoucher(json);
      if (json.length > '0') {
        setClientdata(true);
      }

    }

    getVoucher();
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
  if (Voucher.length > '0') {
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
                      Name
                    </Typography>

                  </>
                }
              />
              <ListItemText
                classes={{ root: 'm-0', primary: 'font-medium leading-5 truncate' }}

                secondary={
                  <>
                    <Typography
                      className="inline"
                      component="span"
                      variant="h6"

                    >
                      Sessions
                    </Typography>

                  </>
                }
              />
              <ListItemText
                classes={{ root: 'm-0', primary: 'font-medium leading-5 truncate' }}

                secondary={
                  <>
                    <Typography
                      className="inline"
                      component="span"
                      variant="h6"

                    >
                      Valid For
                    </Typography>

                  </>
                }
              />
              <ListItemText
                classes={{ root: 'm-0', primary: 'font-medium leading-5 truncate' }}

                secondary={
                  <>
                    <Typography
                      className="inline"
                      component="span"
                      variant="h6"

                    >
                      Price
                    </Typography>

                  </>
                }
              />
            </ListItem>
            {Voucher.map((item) => (
              <VoucherListItem key={item.id} contact={item} />
            ))}
          </List>
        </div>


      </motion.div>
    );
  }
  else {
    return (
      <>Loading....</>
    )


  }
}

export default VoucherList;
