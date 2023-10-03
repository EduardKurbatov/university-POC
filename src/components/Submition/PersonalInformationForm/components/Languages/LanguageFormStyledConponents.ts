import { Box, styled } from "@mui/material";

export const SectionContainer = styled(Box)(({ theme }) => ({
  width: `calc(50% - ${theme.spacing(2)})`,

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
