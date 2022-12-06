import * as React from 'react';
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Rightbar from "./Rightbar";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Navbar from "./Navbar";
import Add from "./Add";

function Website() {

  return (
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
  );
}

export default Website;