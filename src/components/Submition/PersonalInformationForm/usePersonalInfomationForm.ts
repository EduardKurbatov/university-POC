import axios from "axios";
import { useState } from "react";

export type PersonalInformation = {
  uds_civilitycode: number | null;
  uds_firstname: string;
  uds_lastname: string;
  uds_birthdate: string;
  uds_citizenshipcode: number | null;
  uds_isdualnationality: boolean | null;
  uds_identification: string;
  uds_homeaddress: string;
  uds_countrycode: number | null;
  uds_city: string;
  uds_province: string;
  uds_postalcode: string;
  uds_phone: string;
  uds_alternativephone: string | null;
  uds_alternativeemailaddress: string | null;
  uds_languagecode: number | null;
  uds_masteredlanguagescode: number | null;
};

const initialValues: PersonalInformation = {
  uds_civilitycode: null,
  uds_firstname: "",
  uds_lastname: "",
  uds_birthdate: "",
  uds_citizenshipcode: null,
  uds_isdualnationality: null,
  uds_identification: "",
  uds_homeaddress: "",
  uds_countrycode: null,
  uds_city: "",
  uds_province: "",
  uds_postalcode: "",
  uds_phone: "",
  uds_alternativephone: "",
  uds_alternativeemailaddress: "",
  uds_languagecode: null,
  uds_masteredlanguagescode: null,
};

export const usePersonalInfomationForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmitForm = async (data: PersonalInformation) => {
    try {
      const url =
        "https://dev-csp-my-uds-systems-function.azurewebsites.net/api/demo/application";

      setIsLoading(true);
      window.scrollTo(0, 0);
      const response = await axios({
        url,
        method: "POST",
        data,
      });

      console.log(response);

      if (response) {
        setIsSubmited(true);
      } else {
        setError(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    initialValues,
    isLoading,
    isSubmited,
    handleSubmitForm,
    error,
  };
};