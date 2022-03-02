import React from "react";
import { useForm } from "react-hook-form";
import { defaultValues } from "../utils/helpers";
import { yupSchema } from "../utils/yup-schema";
import { yupResolver } from "@hookform/resolvers/yup";
import InputComponent from "./Input";
import { ButtonComponent } from "./Button";
import { Typography } from "@mui/material";
import DatePickerComponent from "./DatePicker";
import SelectComponent from "./Select";
import RadioComponent from "./Radio";
import CheckboxComponent from "./Checkbox";
const ContactForm = () => {
  // typescript
  // interface FormValues = {
  //     firstName: string,
  //     lastName: string
  // }
  // const { register, reset, errors, handleSubmit, getValues } = useForm<FormValues>({})
  const {
    register,
    reset,
    errors,
    handleSubmit,
    getValues,
    watch,
    resetField,
    unregister,
  } = useForm({
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
    //    reset({...defaultValues, data});
  };
  // lắng nghe data của username -> giống onChange
  const usernameResult = watch("username");
  if (usernameResult === "Van Ty") {
    // bỏ check validate password và age khi username = Van Ty
    //   unregister(["password", "age"])
  }
  console.log(errors);
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
            // error={!!errors.username}
            // helperText={errors?.username?.message}
            type="text"
            name="username"
            errors={errors?.username?.message || ""}
            ref={register}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <InputComponent
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
            errors={errors?.age?.message || ""}
            type="number"
            name="age"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <DatePickerComponent
            // ref={register({
            //   required: "Date is required",
            //   valueAsDate: true,
            //   validate: {
            //     futureDate: (value) =>
            //       new Date(value).getTime() > new Date().getTime() ||
            //       "Event can't be from past",
            //   },
            // })}
            errors={errors?.date?.message || ""}
            ref={register}
            type="date"
            name="date"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <SelectComponent
            {...register("status")}
            name="status"
            data={[
              { key: "Choose", value: "" },
              { key: "Active", value: "active" },
              { key: "Deactive", value: "deactive" },
            ]}
            errors={errors?.status?.message || ""}
            className="form-control"
            ref={register}
          />
        </div>
        <div className="form-group">
          <label htmlFor="sex">Gender</label>
          <RadioComponent
            type="radio"
            name="sex"
            errors={errors?.sex?.message || ""}
            data={[
              { key: "Male", value: "male" },
              { key: "Female", value: "female" },
            ]}
            ref={register({
              required: "Sex is required",
            })}
          />
        </div>
        <div className="form-group">
          <CheckboxComponent
            type="checkbox"
            name="subcribe"
            errors={errors?.subcribe?.message || ""}
            data={[{ key: "Subcribe", value: "subcribe" }]}
            ref={register({
              required: "Subcribe is required",
            })}
          />
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
            errors={errors?.phone?.message || ""}
            ref={register}
            type="text"
            name="phone"
            className="form-control"
          />
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
            errors={errors?.email?.message || ""}
            ref={register}
            type="text"
            name="email"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <InputComponent
            errors={errors?.password?.message || ""}
            // ref={register({
            //   required: "Password is required",
            //   minLength: {
            //     value: 5,
            //     message: "Password shouldn't be shorter than 5 characters",
            //   },
            // })}
            ref={register}
            type="password"
            name="password"
            className="form-control"
          />
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
            errors={errors?.confirmPassword?.message || ""}
            ref={register}
            type="password"
            name="confirmPassword"
            className="form-control"
          />
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
    </>
  );
};

export default ContactForm;
