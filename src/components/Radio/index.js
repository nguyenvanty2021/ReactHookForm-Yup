import { forwardRef } from "react";
import TextErrors from "../TextErrors";
const RadioComponent = forwardRef((props, ref) => {
  return (
    <>
      {props &&
        props?.data &&
        props?.data.length > 0 &&
        props?.data.map((v, index) => {
          return (
            <div key={index}>
              <input
                inputRef={ref}
                fullWidth
                ref={ref}
                value={v.value}
                id={v.value}
                {...props}
              />
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
export default RadioComponent;
