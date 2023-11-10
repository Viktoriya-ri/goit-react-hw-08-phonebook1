import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';

function Container (props) {
  return <MuiAppBar elevation={0} position="fixed" {...props} />;
}

export default Container;