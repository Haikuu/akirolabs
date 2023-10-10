import { Alert, Snackbar } from '@mui/material';
import * as React from 'react';

export default function Notifications({ serviceError, open, setOpen }) {
  

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="warning">
        {serviceError}
      </Alert>
    </Snackbar>
  );
}