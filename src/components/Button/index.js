import React from "react";
import Button from '@mui/material/Button';


export const ButtonComponent = ({ children, ...props }) => {


  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
     style={{backgroundColor:"red"}}
      {...props}
    >
      {children}
    </Button>
  );
};