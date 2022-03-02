import React, { memo } from "react";
import TextErrors from "../TextErrors";
const SelectComponent = React.forwardRef((props, ref) => {
  console.log("select")
  return (
    <>
      <select
        style={{ height: "3.5rem", padding: "0 0.75rem" }}
        onChange={props?.onChange}
        ref={ref}
        onBlur={props?.onBlur}
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
export default memo(SelectComponent);
