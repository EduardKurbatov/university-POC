import { Box, styled } from "@mui/material";

export const PhoneInputContainer = styled(Box)(({ theme }) => ({
  width: `calc(50% - ${theme.spacing(2)})`,

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const SectionContainer = styled(Box)(({ theme }) => ({
  width: "50%",

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const SectionsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(4),

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: theme.spacing(0),
  },
}));
