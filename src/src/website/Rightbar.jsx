import React from "react";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
  
  const Rightbar = () => {
    return (
      <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position="fixed" width={300}>
          <Typography variant="h6" fontWeight={100}>
            Online Friends
          </Typography>
          <AvatarGroup max={7}>
            <Avatar
              alt="Remy Sharp"
              src="https://material-ui.com/static/images/avatar/1.jpg"
            />
            <Avatar
              alt="Travis Howard"
              src="https://material-ui.com/static/images/avatar/2.jpg"
            />
            <Avatar
              alt="Cindy Baker"
              src="https://material-ui.com/static/images/avatar/3.jpg"
            />
            <Avatar alt="Agnes Walker" src="" />
            <Avatar
              alt="Trevor Henderson"
              src="https://material-ui.com/static/images/avatar/6.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://material-ui.com/static/images/avatar/7.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://material-ui.com/static/images/avatar/8.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://material-ui.com/static/images/avatar/7.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://material-ui.com/static/images/avatar/8.jpg"
            />
          </AvatarGroup>
          <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
            Post Photos
          </Typography>
          <ImageList cols={3} rowHeight={100} gap={5}>
            <ImageListItem>
              <img
                src="https://material-ui.com/static/images/image-list/breakfast.jpg"
                alt=""
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://material-ui.com/static/images/image-list/burgers.jpg"
                alt=""
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://material-ui.com/static/images/image-list/camera.jpg"
                alt=""
              />
            </ImageListItem>
          </ImageList>
          <Typography variant="h6" fontWeight={100} mt={2}>
            Recent Conversations
          </Typography>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Can we meet tomorrow 10am?"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Santanu
                </Typography>
                {" — Ok come in time beacause i'm very punctual."}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Sumanta"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Bhai Happy Birthday...
                </Typography>
                {" — Thank You bhai"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Sahil_op"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Bhai kali bike aniba jiba,
                </Typography>
                {' — Gala bele phone kariba mu jaiki pahachijibi.....'}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
        </Box>
      </Box>
    );
  };
  
  export default Rightbar;