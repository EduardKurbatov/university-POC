import { Autocomplete, TextField } from "@mui/material";
import { SectionContainer } from "./LanguageFormStyledConponents";
import { FormFieldContainer } from "../../../../Styled/Form";
import { useFormikContext } from "formik";
import { PersonalInformation } from "../../usePersonalInfomationForm";

const languages = [
  {
    label: "Arabic dialect",
    value: 752560000,
  },
  {
    label: "Berber",
    value: 752560001,
  },
  {
    label: "French",
    value: 752560002,
  },
  {
    label: "Spanish",
    value: 752560003,
  },
  {
    label: "English",
    value: 752560004,
  },
  {
    label: "Other",
    value: 752560005,
  },
];

const amoutOfLanguages = [
  {
    label: "1",
    value: 752560000,
  },
  {
    label: "2",
    value: 752560001,
  },
  {
    label: "3",
    value: 752560002,
  },
  {
    label: "4",
    value: 752560003,
  },
  {
    label: "5",
    value: 752560004,
  },
];

const LanguagesForm = () => {
  const { values, errors, setFieldValue, setErrors } =
    useFormikContext<PersonalInformation>();

  const onChange = (name: string, value: number | undefined) => {
    setErrors({});
    setFieldValue(name, value);
  };

  return (
    <SectionContainer sx={{ mb: 4 }}>
      <FormFieldContainer>
        <Autocomplete
          value={
            languages.find(
              (language) => language.value === values.uds_languagecode
            ) || null
          }
          options={languages}
          renderInput={(params) => (
            <TextField
              {...params}
              name="uds_languagecode"
              label="Language spoken most often at home"
              variant="standard"
              required
              error={Boolean(errors.uds_languagecode)}
            />
          )}
          onChange={(_, item) => onChange("uds_languagecode", item?.value)}
        />
      </FormFieldContainer>

      <FormFieldContainer>
        <Autocomplete
          value={
            amoutOfLanguages.find(
              (amount) => amount.value === values.uds_masteredlanguagescode
            ) || null
          }
          options={amoutOfLanguages}
          renderInput={(params) => (
            <TextField
              {...params}
              name="uds_masteredlanguagescode"
              label="Mastered languages"
              variant="standard"
              required
              error={Boolean(errors.uds_masteredlanguagescode)}
            />
          )}
          onChange={(_, item) =>
            onChange("uds_masteredlanguagescode", item?.value)
          }
        />
      </FormFieldContainer>
    </SectionContainer>
  );
};

export default LanguagesForm;
