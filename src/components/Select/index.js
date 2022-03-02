import React from "react";
import TextErrors from "../TextErrors";
const SelectComponent = React.forwardRef((props, ref) => {
  return (
    <>
      <select
        style={{ height: "3.5rem", padding: "0 0.75rem" }}
        onChange={props?.onChange}
        ref={ref}
        onBlur={props?.onBlur}
        inputRef={ref}
        fullWidth
        {...props}
      >
        {props?.data &&
          props?.data.length > 0 &&
          props?.data.map((v, index) => {
            return (
              <option key={index} value={v.value}>
                {v.key}
              </option>
            );
          })}
      </select>

      {props && props?.errors && props?.errors !== "" && (
        <TextErrors message={props?.errors} />
      )}
    </>
  );
});
export default SelectComponent;
