import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup';
import Link from '@mui/material/Link';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Twitter() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>Twitter</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box></Box>
      </Modal>
      <Box sx={style}>
      <TwitterIcon />
          <Typography id="modal-modal-title" variant="h4" sx={{justifyContent: 'center', alignItems: 'center', textAlign:'center'}}>
          Sign in to Twitter
          </Typography>
          <Stack spacing={2} direction="column" >
            <Button variant="outlined" sx={{  justifyContent: 'center', alignItems: 'center', borderRadius: '30px'}}><GoogleIcon />Signin with Google</Button>
            <Button variant="outlined" sx={{  justifyContent: 'center', alignItems: 'center', borderRadius: '30px'}}><AppleIcon />Signin with Apple</Button>
          </Stack>
          <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: 'Auto' } }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="Phone,Email or UserName" variant="outlined" />
          </Box>
          <ButtonGroup>
              <Button variant="contained" sx={{  justifyContent: 'center', alignItems: 'center',width: '190px', borderRadius: '30px'}} >Next</Button>
              <Button sx={{  justifyContent: 'center', alignItems: 'center', borderRadius: '30px',width: '190px', }}>Forget Password?</Button>
          </ButtonGroup>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Don't have an account?<Link href="#">Signup</Link>
          </Typography>
        </Box>
    </>
  );
}