import { Autocomplete, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import {
  IdentityFormContainer,
  SectionContainer,
} from "./IdentityFormStyled.Components";
import { FormFieldContainer } from "../../../../Styled/Form";
import { useFormikContext } from "formik";
import { PersonalInformation } from "../../usePersonalInfomationForm";
import { format } from "date-fns";

const civility = [
  {
    label: "Mrs.",
    value: 752560000,
  },
  {
    label: "Mr.",
    value: 752560001,
  },
];

const citizenShip = [
  {
    label: "Morocco",
    value: 752560000,
  },
  {
    label: "Ukraine",
    value: 752560001,
  },
  {
    label: "USA",
    value: 752560002,
  },
];

type Value = number | string | boolean | undefined;

const IdentityForm = () => {
  const { errors, setFieldValue, setErrors } =
    useFormikContext<PersonalInformation>();

  const onChange = (name: string, value: Value) => {
    setErrors({});
    setFieldValue(name, value);
  };

  return (
    <IdentityFormContainer>
      <SectionContainer>
        <FormFieldContainer>
          <Autocomplete
            options={civility}
            renderInput={(params) => (
              <TextField
                {...params}
                name="uds_civilitycode"
                label="Civility"
                variant="standard"
                required
                error={Boolean(errors.uds_civilitycode)}
              />
            )}
            onChange={(_, item) => onChange("uds_civilitycode", item?.value)}
          />
        </FormFieldContainer>

        <FormFieldContainer>
          <TextField
            sx={{ width: "100%" }}
            name="uds_lastname"
            label="Last Name"
            variant="standard"
            required
            error={Boolean(errors.uds_lastname)}
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </FormFieldContainer>
        <FormFieldContainer>
          <Autocomplete
            options={citizenShip}
            renderInput={(params) => (
              <TextField
                {...params}
                name="uds_citizenshipcode"
                label="Citizen of"
                variant="standard"
                required
                error={Boolean(errors.uds_citizenshipcode)}
              />
            )}
            onChange={(_, item) => onChange("uds_citizenshipcode", item?.value)}
          />
        </FormFieldContainer>
        <FormFieldContainer>
          <TextField
            sx={{ width: "100%" }}
            name="uds_identification"
            label="Identification (Identity card or passport)"
            variant="standard"
            required
            error={Boolean(errors.uds_identification)}
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </FormFieldContainer>
      </SectionContainer>

      <SectionContainer>
        <FormFieldContainer>
          <TextField
            sx={{ width: "100%" }}
            name="uds_firstname"
            label="First Name"
            variant="standard"
            required
            error={Boolean(errors.uds_firstname)}
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </FormFieldContainer>

        <FormFieldContainer>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              sx={{ width: "100%" }}
              label="Birth date"
              slotProps={{
                textField: {
                  name: "uds_birthdate",
                  variant: "standard",
                  error: Boolean(errors.uds_birthdate),
                },
              }}
              onChange={(value) =>
                onChange(
                  "uds_birthdate",
                  format(new Date(value as Date), "yyyy/MM/dd")
                )
              }
            />
          </LocalizationProvider>
        </FormFieldContainer>

        <FormFieldContainer>
          <Autocomplete
            options={[
              {
                label: "Yes",
                value: true,
              },
              {
                label: "No",
                value: false,
              },
            ]}
            renderInput={(params) => (
              <TextField
                {...params}
                name="uds_isdualnationality"
                label="Do you have dual nationality?"
                variant="standard"
                required
                error={Boolean(errors.uds_isdualnationality)}
              />
            )}
            onChange={(_, item) =>
              onChange("uds_isdualnationality", item?.value)
            }
          />
        </FormFieldContainer>
      </SectionContainer>
    </IdentityFormContainer>
  );
};

export default IdentityForm;
