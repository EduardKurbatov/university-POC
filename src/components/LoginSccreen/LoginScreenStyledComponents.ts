import { Box, styled } from "@mui/material";

export const LoginContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#fff",
  boxShadow: "1px 0px 17px 3px #ddd",
  padding: theme.spacing(4),
  width: "30%",

  [theme.breakpoints.down("lg")]: {
    width: "50%",
    padding: theme.spacing(3),
  },

  [theme.breakpoints.down("md")]: {
    width: "70%",
    padding: theme.spacing(3),
  },
}));
