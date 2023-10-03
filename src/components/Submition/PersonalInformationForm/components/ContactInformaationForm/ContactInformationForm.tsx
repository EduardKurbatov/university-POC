import { useState } from "react";
import { Autocomplete, Box, TextField } from "@mui/material";
import {
  PhoneInputContainer,
  SectionContainer,
  SectionsContainer,
} from "./ContactInformationFormStyledComponents";
import { FormFieldContainer } from "../../../../Styled/Form";
import PhoneInput from "react-phone-input-material-ui";
import { PersonalInformation } from "../../usePersonalInfomationForm";
import { useFormikContext } from "formik";

const ContactInformationForm = () => {
  const [alternativeFormFields, setAlternativeFormmFields] = useState({
    phone: false,
    email: false,
  });

  const { values, errors, setFieldValue, setErrors } =
    useFormikContext<PersonalInformation>();

  const onChange = (name: string, value: string | undefined) => {
    setErrors({});
    setFieldValue(name, value);
  };

  return (
    <Box>
      <PhoneInputContainer>
        <FormFieldContainer>
          <PhoneInput
            value={values.uds_phone}
            inputProps={{
              name: "uds_phone",
              variant: "standard",
              required: true,
              error: Boolean(errors.uds_phone),
            }}
            component={TextField}
            label="Phone Number"
            onChange={(value) => onChange("uds_phone", value)}
          />
        </FormFieldContainer>
      </PhoneInputContainer>
      <SectionsContainer>
        <SectionContainer>
          <FormFieldContainer>
            <Autocomplete
              options={[
                { label: "Yes", value: true },
                { label: "No", value: false },
              ]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Would you like to add an other phone number ?"
                  variant="standard"
                />
              )}
              onChange={(_, item) =>
                setAlternativeFormmFields({
                  ...alternativeFormFields,
                  phone: Boolean(item?.value),
                })
              }
            />
          </FormFieldContainer>
        </SectionContainer>
        <SectionContainer>
          {alternativeFormFields.phone && (
            <FormFieldContainer>
              <PhoneInput
                value={values.uds_alternativephone}
                inputProps={{
                  name: "uds_alternativephone",
                  variant: "standard",
                }}
                component={TextField}
                label="Alternative phone number"
                onChange={(value) => onChange("uds_alternativephone", value)}
              />
            </FormFieldContainer>
          )}
        </SectionContainer>
      </SectionsContainer>

      <SectionsContainer>
        <SectionContainer>
          <FormFieldContainer>
            <Autocomplete
              options={[
                { label: "Yes", value: true },
                { label: "No", value: false },
              ]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Would you like to add an other email ?"
                  variant="standard"
                />
              )}
              onChange={(_, item) =>
                setAlternativeFormmFields({
                  ...alternativeFormFields,
                  email: Boolean(item?.value),
                })
              }
            />
          </FormFieldContainer>
        </SectionContainer>
        <SectionContainer>
          {alternativeFormFields.email && (
            <FormFieldContainer>
              <TextField
                value={values.uds_alternativeemailaddress}
                sx={{ width: "100%" }}
                name="uds_alternativeemailaddress"
                label="Email"
                variant="standard"
                error={Boolean(errors.uds_alternativeemailaddress)}
                onChange={(e) => onChange(e.target.name, e.target.value)}
              />
            </FormFieldContainer>
          )}
        </SectionContainer>
      </SectionsContainer>
    </Box>
  );
};

export default ContactInformationForm;
