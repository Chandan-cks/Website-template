import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useEffect, useState} from 'react';
import SimpleAccordion from './Signin/change';



const paperStyle={padding :30, height:'40vh', width:280, margin:"20px auto"}
const btnstyle={margin:'8px 0'}



export default function App() {
const [users, setusers] = useState([])

const fetchData = () => {
  return fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => response.json())
    .then((data) => setusers(data));
}

  useEffect(() => {
    fetchData()

  }, [])
  console.log(users)
  return (
    <>
    <Box sx={{ height: '100vh', justifyContent: 'center', display: 'flex' }}>
    <Grid container spacing={2} marginTop={20}>
        <Grid item xs={6}>
          <Typography variant='h3' color='primary'>
                facebook
          </Typography>
          <Typography variant='h4'>Facebook helps you connect and share with the people in your life.</Typography>
          
        </Grid>
          <Grid item xs={6} >
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                  m: 1,
                  width: 128,
                  height: 128,
                },
              }}
            >
              <Paper elevation={10} style={paperStyle}>
                  <TextField  placeholder='Email address and Phone Number' fullWidth required/>

                  <TextField  placeholder='password' type='password' fullWidth required/>

                  
                  <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Log in</Button>
                    <Typography >
                      <Link href="#" alignItems="center">
                        Forgot password ?
                      </Link>
                    </Typography>
                  <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Create New Account</Button>
              </Paper>
            </Box>
            <Typography >
              <Link href="#" marginLeft={35}>
              Create a Page
              </Link>for a celebrity, brand or business.
            </Typography>
          </Grid>
          
          
          
    </Grid>
    
    </Box>{
      users[0] && <Typography>{users[0].name}</Typography>
    }
    <Typography>{users?.[0]?.name}chandan</Typography>
    {
          users.map((user) => (
            <Typography>{user.name}</Typography>
          ))
    }
    <SimpleAccordion />
    </>
  );
}