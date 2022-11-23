import React, { useState } from "react";

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Fab from '@mui/material/Fab';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import AddIcon from '@mui/icons-material/Add';
import DateRange from '@mui/icons-material/DateRange';
import EmojiEmotions from '@mui/icons-material/EmojiEmotions';
import Image from '@mui/icons-material/Image';
import PersonAdd from '@mui/icons-material/PersonAdd';
import VideoCameraBack from '@mui/icons-material/VideoCameraBack';

  
  const SytledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  
  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  });
  
  const Add = () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Tooltip
          onClick={(e) => setOpen(true)}
          title="Delete"
          sx={{
            position: "fixed",
            bottom: 20,
            left: { xs: "calc(50% - 25px)", md: 30 },
          }}
        >
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Tooltip>
        <SytledModal
          open={open}
          onClose={(e) => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            width={400}
            height={280}
            bgcolor={"background.default"}
            color={"text.primary"}
            p={3}
            borderRadius={5}
          >
            <Typography variant="h6" color="gray" textAlign="center">
              Create post
            </Typography>
            <UserBox>
              <Avatar
                src="/IMG-20220812-WA0007.jpg"
                sx={{ width: 30, height: 30 }}
              />
              <Typography fontWeight={500} variant="span">
                Chandan Sahoo Post
              </Typography>
            </UserBox>
            <TextField
              sx={{ width: "100%" }}
              id="standard-multiline-static"
              multiline
              rows={3}
              placeholder="What's on your mind?"
              variant="standard"
            />
            <Stack direction="row" gap={1} mt={2} mb={3}>
              <EmojiEmotions color="primary" />
              <Image color="secondary" />
              <VideoCameraBack color="success" />
              <PersonAdd color="error" />
            </Stack>
            <ButtonGroup
              fullWidth
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button>Post</Button>
              <Button sx={{ width: "100px" }}>
                <DateRange />
              </Button>
            </ButtonGroup>
          </Box>
        </SytledModal>
      </>
    );
  };
  
  export default Add;