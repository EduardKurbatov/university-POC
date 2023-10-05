import { Box, Container, Select, Typography, styled } from "@mui/material";

export const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  minHeight: "120px",
  backgroundColor: "#2d2c8b",
  padding: `${theme.spacing(1)} 0`,
}));

export const HeaderWrapper = styled(Container)(({ theme }) => ({
  display: "flex",
  height: "100%",
  justifyContent: "space-between",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const HeaderToolContainer = styled(Box)(({ theme }) => ({
  padding: `0 ${theme.spacing(1)}`,
  marginBottom: theme.spacing(1),
}));

export const NavigationLable = styled(Typography)({
  color: "#fff",
  fontSize: "14px",
  fontFamily: "Montserrat",
});

export const LanguageSelect = styled(Select)({
  height: "24px",
  boxShadow: "none",
  ".MuiOutlinedInput-notchedOutline": { border: 0 },
  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    border: 0,
  },
  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: 0,
  },
});
