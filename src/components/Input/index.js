import { TextField } from "@mui/material";
import { forwardRef } from "react";
const InputComponent = forwardRef((props, ref) => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      style={{marginBottom:"2.5rem"}}
      inputRef={ref}
      fullWidth
      {...props}
    ></TextField>
  );
});
export default InputComponent;
