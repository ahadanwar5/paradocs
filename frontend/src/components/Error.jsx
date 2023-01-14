import React from "react";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

function Error(props) {
  return (
    <div>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {props.message}
      </Alert>
    </div>
  );
}

export default Error;
