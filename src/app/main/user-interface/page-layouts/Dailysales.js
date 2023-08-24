import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useEffect, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Divider from '@mui/material/Divider';
import Dialog from "@material-ui/core/Dialog";
import TextField from '@mui/material/TextField';
import FilterListIcon from '@mui/icons-material/FilterList';





function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


const rows = [
  createData('Services', 0, 0, "₹0.00"),
 
 
 
  createData('Products',  0, 0, "₹0.00"),
  createData('Shipping',0, 0, "₹0.00"),
  createData('Vouchers', 0, 0, "₹0.00"),
  createData('Memberships',0, 0, "₹0.00"),
  createData('Late cancellation fees',0, 0, "₹0.00"),
  createData('No show fees',0, 0, "₹0.00"),
  createData('Total Sales',0, 0, "₹0.00"),


];
const rows1 = [
    createData("Online UPI", "₹0.00" ,"₹0.00" ),
    createData("Card", "₹0.00" ,"₹0.00" ),
    createData("Cash", "₹0.00" ,"₹0.00" ),
    createData("Other", "₹0.00" ,"₹0.00" ),
    createData("Voucher Redemptions", "₹0.00" ,"₹0.00" ),
    createData("Payments collected", "₹0.00" ,"₹0.00" ),
    createData("Of which tips", "₹0.00" ,"₹0.00" ),
   
   
  ];
 
  
  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));
  
export default function DenseTable() {
 
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


 
 
  return (
    
    <div style={{ marginLeft: '5%',  marginTop: '5px', width: '100%',height:'70%'}}>


<Grid container spacing ={2}>
        <Grid item xs={10}>
        <Typography className="text-2xl font-semibold leading-tight">
        Daily sales
                  </Typography> 
       
                  <Typography className="text  leading-tight">
                  View, filter and export the transactions and cash movement for the day. <Link>Learn more</Link>
                  </Typography> 

          </Grid>

          <Grid item xs={2} >
          <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="outlined"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
       Export
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
         
          PDF
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
         
         Excel
        </MenuItem>
       
        <MenuItem onClick={handleClose} disableRipple>
         
         CSV
        </MenuItem>
       
      </StyledMenu>

         
     
</Grid>
          </Grid>
          <br /><br /><br />
          <Grid container spacing ={2}>
        <Grid item xs={6}>
        <TextField
       fullWidth
        id="date"
       
        type="date"
        defaultValue="2017-05-24"
        InputLabelProps={{
          shrink: true,
        }}
      />
        </Grid>
        <Grid item xs={6}>
       <Button  href="Filter"
      variant="outlined"
       
       endIcon={< FilterListIcon/>}
       >
       Filter 
       </Button>
      
        </Grid>
        </Grid>
<br /><br />

     
        <Grid container spacing ={2}>
        <Grid item xs={5.8}>
   
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 590 }} size="small" aria-label="a dense table">
        <TableHead>
        <TableRow>
       
       <TableCell> <Typography className="text-2xl font-semibold leading-tight">Transaction summary </Typography>   </TableCell></TableRow>
                    
                 
          <TableRow>
            <TableCell><Typography className="text font-semibold leading-tight">Item type</Typography></TableCell>
            <TableCell align="right"><Typography className="text font-semibold leading-tight">Sales qty</Typography></TableCell>
            <TableCell align="right"><Typography className="text font-semibold leading-tight">Refund qty</Typography></TableCell>
            <TableCell align="right"><Typography className="text font-semibold leading-tight">Gross total</Typography></TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    <Grid item xs={6}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead> 
         <TableRow>
        <TableCell> <Typography className="text-2xl font-semibold leading-tight">  Cash movement summary</Typography>   </TableCell></TableRow>
               
          <TableRow>
            <TableCell><Typography className="text font-semibold leading-tight">Payment type</Typography></TableCell>
            <TableCell align="right"><Typography className="text font-semibold leading-tight">Payments collected</Typography></TableCell>
            <TableCell align="right"><Typography className="text font-semibold leading-tight">Refunds paid</Typography></TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {rows1.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>






        </Grid>
    </Grid>

    </div>
  );
}
