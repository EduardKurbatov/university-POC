import { Box, styled } from "@mui/material";

export const IdentityFormContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(4),

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: theme.spacing(0),
  },
}));

export const SectionContainer = styled(Box)(({ theme }) => ({
  width: "50%",

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
