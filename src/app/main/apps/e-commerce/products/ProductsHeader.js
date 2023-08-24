import { useEffect, useState, useRef } from 'react';
import { TextField, Typography, Button, Box, Link } from '@mui/material';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { selectProductsSearchText, setProductsSearchText } from '../store/productsSlice';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import PricingTabinside from '../product/tabs/PricingTabinside';
import { styled, useTheme } from '@mui/material/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
const StyledSwipeableDrawer = styled(SwipeableDrawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    backgroundColor: theme.palette.background.default,
    width: '100%',
  },
}));
const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    backgroundColor: theme.palette.background.paper,
  },
}));
function ProductsHeader(props) {
  const dispatch = useDispatch();
  const searchText = useSelector(selectProductsSearchText);
  const [Openmodal, setOpenModal] = useState(false);
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  return (
    <div className="flex flex-col sm:flex-row space-y-16 sm:space-y-0 flex-1 w-full items-center justify-between py-32 px-24 md:px-32">
      <StyledSwipeableDrawer
        open={Openmodal}
        anchor="right"
        //onOpen={(ev) => {}}
        // onClose={Closemodal}
        disableSwipeToOpen
      >

        <Root
          
          content={<PricingTabinside />}
          //ref={pageLayout}
          //rightSidebarContent={<ContactsSidebarContent />}
          //rightSidebarOpen={rightSidebarOpen}
          //rightSidebarOnClose={() => setRightSidebarOpen(false)}
          // rightSidebarWidth={640}
          scroll={isMobile ? 'normal' : 'content'}
        />



      </StyledSwipeableDrawer>


      <Typography
        component={motion.span}
        initial={{ x: -20 }}
        animate={{ x: 0, transition: { delay: 0.2 } }}
        delay={300}
        className="text-24 md:text-32 font-extrabold tracking-tight"
      >
        Products
      </Typography>

      <div className="flex flex-col w-full sm:w-auto sm:flex-row space-y-16 sm:space-y-0 flex-1 items-center justify-end space-x-8">
        <Paper
          component={motion.div}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
          className="flex items-center w-full sm:max-w-256 space-x-8 px-16 rounded-full border-1 shadow-0"
        >
          <FuseSvgIcon color="disabled">heroicons-solid:search</FuseSvgIcon>

          <Input
            placeholder="Search products"
            className="flex flex-1"
            disableUnderline
            fullWidth
            value={searchText}
            inputProps={{
              'aria-label': 'Search',
            }}
            onChange={(ev) => dispatch(setProductsSearchText(ev))}
          />
        </Paper>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
        >
          <Button onClick={() => setOpenModal(!Openmodal)}
            className=""
            component={Link}
            variant="contained"
            color="secondary"
            startIcon={<FuseSvgIcon>heroicons-outline:plus</FuseSvgIcon>}
          >
            Add
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

export default ProductsHeader;
