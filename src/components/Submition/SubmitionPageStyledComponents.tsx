import { Box, styled } from "@mui/material";

export const SubmitionPageWrapper = styled(Box)(({ theme }) => ({
  display: "flex",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    padding: theme.spacing(2),
  },
}));
