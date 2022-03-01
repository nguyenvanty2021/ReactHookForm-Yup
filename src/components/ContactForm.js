import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { phonePattern, emailPattern, defaultValues } from "../utils/helpers";
import { yupSchema } from "../utils/yup-schema";
import { yupResolver } from "@hookform/resolvers/yup";
import InputComponent from "./Input";
import { ButtonComponent } from "./Button";
import { Typography } from "@mui/material";
const ContactForm = () => {
  // typescript
  // interface FormValues = {
  //     firstName: string,
  //     lastName: string
  // }
  // const { register, reset, errors, handleSubmit, getValues } = useForm<FormValues>({})
  const [obj, setObj] = useState(defaultValues);
  const { register, reset, errors, handleSubmit, getValues, watch, resetField, unregister } =
    useForm({
      // chế độ: khi click vào bỏ ra bắt lỗi or submit mới bắt lỗi
      mode: "onTouched",
      criteriaMode: "firstError",
      // sẽ bắt lỗi khi
      reValidateMode: "onChange",
      defaultValues: defaultValues,
      resolver: yupResolver(yupSchema),
    });
  const registerHandler = (data) => {
    console.log(data);
   // reset();
   //setObj({...data})
  // alert("123")
   //    reset({...defaultValues, data});
  };
  //console.log(obj)
  const usernameResult = watch("username");
 // console.log(usernameResult)
  if(usernameResult === "Van Ty") {
      // bỏ check validate password và age khi username = Van Ty
   //   unregister(["password", "age"])
  }
  console.log(errors)
  return (
    <>
      <form onSubmit={handleSubmit(registerHandler)}>
        <div className="form-group">
          <Typography variant="h5" htmlFor="username">
            Username
          </Typography>
          <InputComponent
            // ref={register({
            //   required: "Username is required",
            //   minLength: {
            //     value: 2,
            //     message: "username shouldn't be less than 2 characters",
            //   },
            //   validate: (value) =>
            //     value === "Van Ty" || "Wrong Name, try again",
            //   // có thể call 1 api ở đây luon
            //   //   validate: {
            //   //       asyncCompareNames: (value) => axios.get("http://...").then(res => {
            //   //           console.log(res)
            //   //           return res?.name === value || "Wrong names try again"
            //   //       }).catch(err => {console.log(err)})
            //   //   }
            // })}
            error={!!errors.username}
            helperText={errors?.username?.message}
            type="text"
            name="username"
            ref={register}
            className="form-control"
          />
          {/* {errors.username && (
            <span className="error">{errors.username.message}</span>
          )} */}
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            // ref={register({
            //   required: "Age is required",
            //   min: {
            //     value: 13,
            //     message: "Age shouldn't be less than 13",
            //   },
            //   // + tuổi thêm 1 chơi
            //     valueAsNumber: true,
            //   setValueAs: (value) => parseInt(value) + 1,
            //   // validate only runs after the validation -> tuổi phải từ 13-25
            //   validate: {
            //     positive: (value) =>
            //       parseInt(value) <= 25 || "Age can't be greater than 25",
            //   },
            // })}
            ref={register}
            //  error={!!errors.age}
            //  helperText={errors?.age?.message}
            type="number"
            name="age"
            className="form-control"
          />
          {errors.age && <span className="error">{errors.age.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            // ref={register({
            //   required: "Date is required",
            //   valueAsDate: true,
            //   validate: {
            //     futureDate: (value) =>
            //       new Date(value).getTime() > new Date().getTime() ||
            //       "Event can't be from past",
            //   },
            // })}
            ref={register}
            type="date"
            name="date"
            className="form-control"
          />
          {errors.date && <span className="error">{errors.date.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            name="status"
            className="form-control"
            ref={register({
              required: "Status is required",
            })}
          >
            <option value="">Choose</option>
            <option value="active">Active</option>
            <option value="deactive">Deactive</option>
          </select>
          {errors.status && (
            <span className="error">{errors.status.message}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="sex">Sex</label>
          <input
            type="radio"
            id="female"
            value="female"
            name="sex"
            ref={register({
              required: "Sex is required",
            })}
          />
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            id="male"
            name="sex"
            value="male"
            ref={register({
              required: "Sex is required",
            })}
          />
          <label htmlFor="male">Male</label>
          {errors.sex && <span className="error">{errors.sex.message}</span>}
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            id="subcribe"
            // value="female"
            name="subcribe"
            ref={register({
              required: "Subcribe is required",
            })}
          />
          <label htmlFor="subcribe">Subcribe</label>
          {errors.sex && <span className="error">{errors.sex.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="age">Phone Number</label>
          <InputComponent
            // ref={register({
            //   required: "Phone number is required",
            //   pattern: {
            //     value: phonePattern,
            //     message: "Please enter a valid phone number",
            //   },
            // })}
            ref={register}
            type="text"
            name="phone"
            className="form-control"
          />
          {errors.phone && (
            <span className="error">{errors.phone.message}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <InputComponent
            // ref={register({
            //   required: "Email is required",
            //   pattern: {
            //     value: emailPattern,
            //     message: "Please enter a valid email",
            //   },
            // })}
            ref={register}
            type="text"
            name="email"
            className="form-control"
          />
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <InputComponent
            ref={register({
              required: "Password is required",
              minLength: {
                value: 5,
                message: "Password shouldn't be shorter than 5 characters",
              },
            })}
          //  ref={register}
            type="password"
            name="password"
            className="form-control"
          />
          {errors.password && (
            <span className="error">{errors.password.message}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <InputComponent
            // ref={register({
            //   required: "Password is required",
            //   minLength: {
            //     value: 5,
            //     message: "Password shouldn't be shorter than 5 characters",
            //   },
            //   validate: {
            //     checkPasswordConfirmationHandler: (value) => {
            //       const { password } = getValues();
            //       return password === value || "Password don't match";
            //     },
            //   },
            // })}
            ref={register}
            type="password"
            name="confirmPassword"
            className="form-control"
          />
          {errors.confirmPassword && (
            <span className="error">{errors.confirmPassword.message}</span>
          )}
        </div>
        <ButtonComponent
          onClick={() => {
            resetField("username");
          }}
          type="submit"
        >
          resetfield username
        </ButtonComponent>
        <ButtonComponent type="submit">submit</ButtonComponent>
      </form>
      {/* <div className="text-center">
        <p>{userName}</p>
        <p>{age}</p>
        <p>{email}</p>
        <p>{password}</p>
        <p>{confirmPassword}</p>
      </div> */}
    </>
  );
};

export default ContactForm;
