import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  uds_civilitycode: Yup.number().required(),
  uds_firstname: Yup.string().required(),
  uds_lastname: Yup.string().required(),
  uds_birthdate: Yup.string().required(),
  uds_citizenshipcode: Yup.number().required(),
  uds_isdualnationality: Yup.boolean().required(),
  uds_identification: Yup.string().required(),
  uds_homeaddress: Yup.string().required(),
  uds_countrycode: Yup.number().required(),
  uds_city: Yup.string().required(),
  uds_province: Yup.string().required(),
  uds_postalcode: Yup.string()
    .matches(/^[0-9]+$/)
    .required(),
  uds_phone: Yup.string().required(),
  uds_alternativephone: Yup.string(),
  uds_alternativeemailaddress: Yup.string().matches(
    /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  ),
  uds_languagecode: Yup.number().required(),
  uds_masteredlanguagescode: Yup.number().required(),
});
