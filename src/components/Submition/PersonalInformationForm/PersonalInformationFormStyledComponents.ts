import { Box, styled } from "@mui/material";

export const PersonalInformationFormContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  borderLeft: "1px solid #a2a4a6",
  padding: `0 ${theme.spacing(2)}`,

  [theme.breakpoints.down("sm")]: {
    borderLeft: "none",
    padding: `0 ${theme.spacing(1)}`,
    marginTop: theme.spacing(2),
  },
}));
