import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
      "Enter correct email format"
    )
    .required("Email is required field"),
  password: Yup.string()
    .min(5, "Must be at least 5 digits")
    .required("Password is required field"),
});
