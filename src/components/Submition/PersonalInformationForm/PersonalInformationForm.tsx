import { Alert, Box, Button, CircularProgress } from "@mui/material";
import FormSection from "../../FomrSection/FormSection";
import ContactInformationForm from "./components/ContactInformaationForm/ContactInformationForm";
import IdentityForm from "./components/IdentityForm/IdentityForm";
import LanguagesForm from "./components/Languages/LanguagesForm";
import PostalAddressForm from "./components/PostalAddressForm/PostalAddressForm";
import { PersonalInformationFormContainer } from "./PersonalInformationFormStyledComponents";
import { usePersonalInfomationForm } from "./usePersonalInfomationForm";
import { Formik } from "formik";
import { validationSchema } from "./validationSchema";
import DocumentsForm from "./components/DocumentsForm/DocumentsForm";

const PersonalInformationForm = () => {
  const { initialValues, isLoading, isSubmited, error, handleSubmitForm } =
    usePersonalInfomationForm();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, { resetForm }) => {
        await handleSubmitForm(values);
        resetForm();
      }}
      validationSchema={validationSchema}
      validateOnChange={false}
    >
      {(props) => (
        <PersonalInformationFormContainer>
          {error && <Alert severity="error">Something went wrong!</Alert>}
          {isSubmited && <Alert severity="success">Submited!</Alert>}
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

          <FormSection title="documents">
            <DocumentsForm />
          </FormSection>

          <Box display={"flex"} justifyContent={"flex-end"} sx={{ mt: 4 }}>
            <Button
              variant="contained"
              color="inherit"
              disabled={isLoading}
              sx={{
                bgcolor: "#273d97",
                color: "#fff",
                width: "130px",
                "&:hover": {
                  color: "#273d97",
                },
              }}
              onClick={() => {
                props.handleSubmit();
              }}
            >
              Save
              {isLoading && (
                <Box display={"flex"} alignItems={"center"} sx={{ ml: 2 }}>
                  <CircularProgress color={"warning"} size={"14px"} />
                </Box>
              )}
            </Button>
          </Box>
        </PersonalInformationFormContainer>
      )}
    </Formik>
  );
};

export default PersonalInformationForm;
