import { Box, styled } from "@mui/material";

export const SectionContainer = styled(Box)(({ theme }) => ({
  width: "50%",

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
