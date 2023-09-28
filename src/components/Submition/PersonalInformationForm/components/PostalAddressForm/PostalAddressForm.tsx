import { Autocomplete, Box, TextField } from "@mui/material";
import { FormFieldContainer } from "../../../../Styled/Form";
import {
  SectionContainer,
  SectionsContainer,
} from "./PostalAddressFormStyledComponents";
import { useFormikContext } from "formik";
import { PersonalInformation } from "../../usePersonalInfomationForm";

const countries = [
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

const PostalAddressForm = () => {
  const { errors, setFieldValue, setErrors } =
    useFormikContext<PersonalInformation>();

  const onChange = (name: string, value: number | string | undefined) => {
    setErrors({});
    setFieldValue(name, value);
  };

  return (
    <Box display={"flex"} flexDirection={"column"}>
      <FormFieldContainer>
        <TextField
          sx={{ width: "100%" }}
          name="uds_homeaddress"
          label="Home address"
          variant="standard"
          required
          error={Boolean(errors.uds_homeaddress)}
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
      </FormFieldContainer>

      <SectionsContainer>
        <SectionContainer>
          <FormFieldContainer>
            <Autocomplete
              options={countries}
              renderInput={(params) => (
                <TextField
                  {...params}
                  name="uds_countrycode"
                  label="Country of residence"
                  variant="standard"
                  required
                  error={Boolean(errors.uds_countrycode)}
                />
              )}
              onChange={(_, item) => onChange("uds_countrycode", item?.value)}
            />
          </FormFieldContainer>

          <FormFieldContainer>
            <TextField
              sx={{ width: "100%" }}
              name="uds_province"
              label="Province"
              variant="standard"
              required
              error={Boolean(errors.uds_province)}
              onChange={(e) => onChange(e.target.name, e.target.value)}
            />
          </FormFieldContainer>
        </SectionContainer>
        <SectionContainer>
          <FormFieldContainer>
            <TextField
              sx={{ width: "100%" }}
              name="uds_city"
              label="City of residence"
              variant="standard"
              required
              error={Boolean(errors.uds_city)}
              onChange={(e) => onChange(e.target.name, e.target.value)}
            />
          </FormFieldContainer>

          <FormFieldContainer>
            <TextField
              sx={{ width: "100%" }}
              name="uds_postalcode"
              label="Zip/Postaal code"
              variant="standard"
              required
              error={Boolean(errors.uds_postalcode)}
              onChange={(e) => onChange(e.target.name, e.target.value)}
            />
          </FormFieldContainer>
        </SectionContainer>
      </SectionsContainer>
    </Box>
  );
};

export default PostalAddressForm;
