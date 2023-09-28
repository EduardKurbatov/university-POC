import { Box, Button } from "@mui/material";
import FormSection from "../../FomrSection/FormSection";
import ContactInformationForm from "./components/ContactInformaationForm/ContactInformationForm";
import IdentityForm from "./components/IdentityForm/IdentityForm";
import LanguagesForm from "./components/Languages/LanguagesForm";
import PostalAddressForm from "./components/PostalAddressForm/PostalAddressForm";
import { PersonalInformationFormContainer } from "./PersonalInformationFormStyledComponents";
import { usePersonalInfomationForm } from "./usePersonalInfomationForm";
import { Formik } from "formik";
import { validationSchema } from "./validationSchema";

const PersonalInformationForm = () => {
  const { initialValues, handleSubmitForm } = usePersonalInfomationForm();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        handleSubmitForm(values);
      }}
      validationSchema={validationSchema}
      validateOnChange={false}
    >
      {(props) => (
        <PersonalInformationFormContainer>
          <FormSection title="identity">
            <IdentityForm />
          </FormSection>

          <FormSection title="postal address">
            <PostalAddressForm />
          </FormSection>

          <FormSection title="contact information">
            <ContactInformationForm />
          </FormSection>

          <FormSection title="languages">
            <LanguagesForm />
          </FormSection>

          <Box display={"flex"} justifyContent={"flex-end"} sx={{ mt: 4 }}>
            <Button
              variant="contained"
              color="inherit"
              sx={{
                bgcolor: "#273d97",
                color: "#fff",
                width: "130px",
                "&:hover": {
                  color: "#273d97",
                },
              }}
              onClick={() => props.handleSubmit()}
            >
              Save
            </Button>
          </Box>
        </PersonalInformationFormContainer>
      )}
    </Formik>
  );
};

export default PersonalInformationForm;
