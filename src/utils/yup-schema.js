import * as yup from "yup";
import { string } from "yup";
import { emailPattern, getTomorrow, phonePattern } from "./helpers";
export const yupSchema = yup.object().shape({
  username: yup
    .string()
    .required("Please enter your name")
    .max(20, "Username should be less than 20 characters")
    .min(2, "Username should be longer than 2 characters"),
  // .test("checkAPIUsername", "Wrong username",
  // (value, context) => {
  //   return  fetch("https://...")
  //     .then((response) => response.json())
  //     .then((json) => {
  //         return json?.name === value
  //     }).catch((err) => {console.log(err)})
  // }),
  age: yup
    .number()
    .positive("Please enter a positive number.")
    .min(13, "User should be older than 13 years old")
    .integer("Please enter an integer.")
    .required("Please enter your age")
    .typeError("Please enter a valid number")
    .test(
      "retirementAgeChecking",
      "This user is eligible for retirement",
      (value, context) => value < 60
    ),
  date: yup.date().min(getTomorrow(), "Event can't be from the past"),
  // .string()
  // .required("Date of Birth is required")
  // .matches(
  //   /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
  //   "Date of Birth must be a valid date in the format YYYY-MM-DD"
  // ),
  phone: yup
    .string()
    .required("Please enter your phone number")
    .matches(phonePattern, {
      message: "Invalid phone number",
      excludeEmptyString: true,
    }),
  email: yup
    .string()
    .required("Please enter your email")
    .matches(emailPattern, "Invalid email"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(6, "Password should be longer than 6 character")
    .oneOf([yup.ref("confirmPassword")], "Password don't match"),
  confirmPassword: yup
    .string()
    .required("Please enter your password")
    .min(6, "Password should be longer than 6 character")
    .oneOf([yup.ref("password")], "Password don't match"),
});
