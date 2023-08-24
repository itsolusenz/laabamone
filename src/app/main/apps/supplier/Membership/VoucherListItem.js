import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';

function VoucherListItem(props) {
  const { contact } = props;
  return (
    <>
      <ListItem
        className="px-32 py-16"
        sx={{ bgcolor: 'background.paper' }}
        button
        component={NavLinkAdapter}
        to={`/apps/voucher/${contact.id}`}
      >
        <ListItemAvatar>
          <Avatar alt={contact.name} src={contact.avatar} />
        </ListItemAvatar>
        <ListItemText
          classes={{ root: 'm-0', primary: 'font-medium leading-5 truncate' }}
          primary={contact.name}
          secondary={
            <>
              <Typography
                className="inline"
                component="span"
                variant="body2"
                color="text.secondary"
              >
                {contact.title}
              </Typography>
            </>
          }
        />
        <ListItemText
          classes={{ root: 'm-0', primary: 'font-medium leading-5 truncate' }}
          primary={contact.sessions}
          secondary={
            <>
              <Typography
                className="inline"
                component="span"
                variant="body2"
                color="text.secondary"
              >
                {contact.title}
              </Typography>
            </>
          }
        />
        <ListItemText
          classes={{ root: 'm-0', primary: 'font-medium leading-5 truncate' }}
          primary={contact.validfor}
          secondary={
            <>
              <Typography
                className="inline"
                component="span"
                variant="body2"
                color="text.secondary"
              >

              </Typography>
            </>
          }
        />
        <ListItemText
          classes={{ root: 'm-0', primary: 'font-medium leading-5 truncate' }}
          primary={contact.price}
          secondary={
            <>
              <Typography
                className="inline"
                component="span"
                variant="body2"
                color="text.secondary"
              >
                {contact.title}
              </Typography>
            </>
          }
        />
      </ListItem>
      <Divider />
    </>
  );
}

export default VoucherListItem;
