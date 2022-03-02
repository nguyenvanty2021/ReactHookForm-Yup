import { TextField } from "@mui/material";
import { forwardRef } from "react";
import TextErrors from "../TextErrors";
const InputComponent = forwardRef((props, ref) => {
  return (
    <>
      <TextField
        // label="Outlined"
        style={{marginBottom:"2.5rem"}}
        variant="outlined"
        margin="normal"
        inputRef={ref}
        fullWidth
        {...props}
      />
      {props && props?.errors && props?.errors !== "" && (
        <TextErrors message={props?.errors} />
      )}
    </>
  );
});
export default InputComponent;
