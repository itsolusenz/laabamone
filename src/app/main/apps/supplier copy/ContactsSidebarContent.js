import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import { useDispatch } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import { Outlet } from 'react-router-dom';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Typography, Grid, Paper } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
function ContactsSidebarContent(props) {
  const dispatch = useDispatch();
  const { contact } = props;
  const routeParams = useParams();
  const [supplierid, setsupplierid] = useState();
  const [supplier, setsupplier] = useState(false);
  const [suppliername, setsuppliername] = useState(false);
  useEffect(() => {
    setsupplierid(routeParams.id);
    // console.log();

    if (routeParams.id != '' && routeParams.id != null && routeParams.id != undefined) {
      const getsupplier = async () => {
        const sid = routeParams.id;
        const response = await fetch('https://www.laabamone.com/appoint_api.php?eventtype=suplierlist&id=' + sid);
        const json = await response.json();
        console.log(json[0]['name']);
        setsupplier(json[0]);
        setsuppliername(json[0]['name']);

      }
      getsupplier();
    }




  }, [routeParams]);
  const Root = styled('div')(({ theme }) => ({
    '& .username, & .email': {
      transition: theme.transitions.create('opacity', {
        duration: theme.transitions.duration.shortest,
        easing: theme.transitions.easing.easeInOut,
      }),
    },

    '& .avatar': {
      background: theme.palette.background.default,
      transition: theme.transitions.create('all', {
        duration: theme.transitions.duration.shortest,
        easing: theme.transitions.easing.easeInOut,
      }),
      bottom: 0,
      '& > img': {
        borderRadius: '50%',
      },
    },
  }));
  return (
    <>
      <div className="flex flex-col flex-auto" >


        <Grid container item>
          <Grid container item xs={'12'}>
            <IconButton
              //className="absolute top-0 right-0 my-16 mx-32 z-10"
              sx={{ color: 'black' }}
              component={NavLinkAdapter}
              to="/apps/supplier"
              size="large"
            >
              <FuseSvgIcon>heroicons-outline:x</FuseSvgIcon>
            </IconButton>
          </Grid>
          <Grid container item xs={'12'}>
            <Grid item xs={'4'} style={{ padding: '10px' }} >
              <Grid container item xs={'12'} justifyContent={'center'}>

                <Root className="user relative flex flex-col items-center justify-center p-16 pb-14 shadow-0">
                  <div className="flex items-center justify-center mb-24">
                    <Avatar
                      sx={{
                        backgroundColor: 'background.paper',
                        color: 'text.secondary',
                      }}
                      className="avatar text-32 font-bold w-96 h-96"
                      src={``}
                      alt={``}
                    >
                      S
                    </Avatar>
                  </div>
                  <Typography className="username text-14 whitespace-nowrap font-medium">
                    {suppliername}
                  </Typography>

                </Root>





              </Grid>
            </Grid>
            <Grid item xs={'8'} style={{ padding: '10px', backgroundColor: '#f1f5f9' }}>
              <Grid container item xs={'12'} justifyContent={'left'} style={{ padding: '20px' }}>
                <Typography fullWidth
                  className="inline"
                  variant="h5"
                  style={{ fontWeight: 700 }}
                >
                  Supplier Details &nbsp;


                </Typography>
              </Grid>
              <Grid container item  >
                <Paper className="flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden h-full">
                  <Grid container item spacing={'5'} xs={'12'} justifyContent={'left'} style={{ paddingLeft: '20px' }}>

                    <Grid item xs={'12'} style={{ padding: '10px', fontWeight: 700, fontSize: '20px' }} >Contact info </Grid>
                    <Grid item xs={'6'}  >Name </Grid>
                    <Grid item xs={'6'} >{supplier.name}</Grid>
                    <Grid item xs={'6'}  >Mobile </Grid>
                    <Grid item xs={'6'} >{supplier.mobile} </Grid>
                    <Grid item xs={'6'}  >Phone Number </Grid>
                    <Grid item xs={'6'} >{supplier.email} </Grid>
                    <Grid item xs={'6'}  >Email </Grid>
                    <Grid item xs={'6'} >{supplier.email} </Grid>
                    <Grid item xs={'6'}  >Website </Grid>
                    <Grid item xs={'6'} >{supplier.website} </Grid>
                  </Grid>
                </Paper>
                <br />
                <Paper className="flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden h-full">
                  <Grid container item spacing={'5'} xs={'12'} justifyContent={'left'} style={{ paddingLeft: '20px' }}>

                    <Grid item xs={'12'} style={{ padding: '10px', fontWeight: 700, fontSize: '20px' }} >Physical address</Grid>
                    <Grid item xs={'6'}  >Street </Grid>
                    <Grid item xs={'6'} >{supplier.name}</Grid>
                    <Grid item xs={'6'}  >Suburb </Grid>
                    <Grid item xs={'6'} >{supplier.mobile} </Grid>
                    <Grid item xs={'6'}  >City </Grid>
                    <Grid item xs={'6'} >{supplier.email} </Grid>
                    <Grid item xs={'6'}  >Zip / Postal Code </Grid>
                    <Grid item xs={'6'} >{supplier.email} </Grid>
                    <Grid item xs={'6'}  >Country </Grid>
                    <Grid item xs={'6'} >{supplier.website} </Grid>
                  </Grid>

                </Paper>
              </Grid>

            </Grid>
          </Grid>

        </Grid>

        {/*} <Outlet />*/}
      </div>

    </>
  );
}

export default ContactsSidebarContent;
