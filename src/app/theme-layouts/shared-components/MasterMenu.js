import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { selectUser } from 'app/store/userSlice';
import i18next from 'i18next';
import en from '../../../app/configs/navigation-i18n/en';
import ta from '../../../app/configs/navigation-i18n/ta';
import { useTranslation } from 'react-i18next';


i18next.addResourceBundle('en', 'CalendarApp', en);
i18next.addResourceBundle('ta', 'CalendarApp', ta);
function MasterMenu(props) {
  const user = useSelector(selectUser);
  const { t } = useTranslation('CalendarApp');
  const [userMenu, setUserMenu] = useState(null);

  const userMenuClick = (event) => {
    setUserMenu(event.currentTarget);
  };

  const userMenuClose = () => {
    setUserMenu(null);
  };

  return (
    <>
      <Button
        className="min-h-40 min-w-40 px-0 md:px-16 py-0 md:py-6"
        onClick={userMenuClick}
        color="primary"
        variant='contained'

      >
        <div className="hidden md:flex flex-col mx-4 items-end">
          <Typography component="span" className="font-semibold flex">
            {t('Master')}
          </Typography>

        </div>

        {/*}  {user.data.photoURL ? (
          <Avatar className="md:mx-4" alt="user photo" src={user.data.photoURL} />
        ) : (
          <Avatar className="md:mx-4">{user.data.displayName[0]}</Avatar>
        )}*/}
      </Button>

      <Popover
        open={Boolean(userMenu)}
        anchorEl={userMenu}
        onClose={userMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        classes={{
          paper: 'py-8',
        }}
      >
        {!user.role || user.role.length === 0 ? (
          <>
            <MenuItem component={Link} to="/sign-in" role="button">
              <ListItemIcon className="min-w-40">
                <FuseSvgIcon>heroicons-outline:lock-closed</FuseSvgIcon>
              </ListItemIcon>
              <ListItemText primary={t('Sign In')} />
            </MenuItem>
            <MenuItem component={Link} to="/sign-up" role="button">
              <ListItemIcon className="min-w-40">
                <FuseSvgIcon>heroicons-outline:user-add </FuseSvgIcon>
              </ListItemIcon>
              <ListItemText primary={t('Sign up')} />
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem component={Link} to="/master/category" onClick={userMenuClose} role="button">
              <ListItemIcon className="min-w-40">
                <FuseSvgIcon>heroicons-outline:cash</FuseSvgIcon>
              </ListItemIcon>
              <ListItemText primary={t('Category')} />
            </MenuItem>
            <MenuItem component={Link} to="/master/tax" onClick={userMenuClose} role="button">
              <ListItemIcon className="min-w-40">
                <FuseSvgIcon>heroicons-outline:receipt-tax</FuseSvgIcon>
              </ListItemIcon>
              <ListItemText primary={t('Tax')} />
            </MenuItem>
            <MenuItem component={Link} to="/master/clientgroup" onClick={userMenuClose} role="button">
              <ListItemIcon className="min-w-40">
                <FuseSvgIcon>heroicons-outline:user-circle</FuseSvgIcon>
              </ListItemIcon>
              <ListItemText primary={t('Client Group')} />
            </MenuItem>
            <MenuItem component={Link} to="/client" onClick={userMenuClose} role="button">
              <ListItemIcon className="min-w-40">
                <FuseSvgIcon>heroicons-outline:user-group</FuseSvgIcon>
              </ListItemIcon>
              <ListItemText primary={t('Clients')} />
            </MenuItem>

            <MenuItem component={Link} to="/apps/supplier" onClick={userMenuClose} role="button">
              <ListItemIcon className="min-w-40">
                <FuseSvgIcon>heroicons-outline:receipt-tax</FuseSvgIcon>
              </ListItemIcon>
              <ListItemText primary={t('Supplier')} />
            </MenuItem>

          </>
        )}
      </Popover>
    </>
  );
}

export default MasterMenu;
