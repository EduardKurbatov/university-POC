import { Box, styled } from "@mui/material";

export const FooterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "90px",
  backgroundColor: "#323232",
  padding: `${theme.spacing(1)} 0`,

  [theme.breakpoints.down("md")]: {
    padding: `${theme.spacing(2)} 0`,
    height: "auto",
  },
}));

export const FooterWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "80%",
  height: "100%",
  justifyContent: "space-between",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
}));
