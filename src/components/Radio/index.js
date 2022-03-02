import { forwardRef, memo } from "react";
import TextErrors from "../TextErrors";
const RadioComponent = forwardRef((props, ref) => {
  console.log("radio")
  return (
    <>
      {props &&
        props?.data &&
        props?.data.length > 0 &&
        props?.data.map((v, index) => {
          return (
            <div key={index}>
              <input ref={ref} value={v.value} id={v.value} {...props} />
              <label htmlFor={v.value}>{v.key}</label>
            </div>
          );
        })}
      {props && props?.errors && props?.errors !== "" && (
        <TextErrors message={props?.errors} />
      )}
    </>
  );
});
export default memo(RadioComponent);
