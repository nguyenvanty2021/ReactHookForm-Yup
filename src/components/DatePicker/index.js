import TextField from "@mui/material/TextField";
import { forwardRef } from "react";
import TextErrors from "../TextErrors";
const DatePickerComponent = forwardRef((props, ref) => {
  return (
    <>
      <TextField
        // label="Outlined"
        variant="outlined"
        style={{marginBottom:"2.5rem"}}
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
export default DatePickerComponent;
