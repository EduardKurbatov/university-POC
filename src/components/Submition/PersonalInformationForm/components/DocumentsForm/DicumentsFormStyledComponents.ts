import { Typography, styled } from "@mui/material";

export const AddFileLabel = styled("label")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100px",
  boxShadow: "0px 5px 30px 0px rgba(14, 63, 128, 0.11)",
  backgroundColor: `#273d97`,
  cursor: "pointer",
  padding: theme.spacing(1),
  border: "1px solid #a2a4a6",
  borderRadius: "5px",
  color: "#fff",

  ":hover": {
    color: "#273d97",
    backgroundColor: `#f5f5f5`,
    border: "1px solid #273d97",
  },
}));

export const FileName = styled(Typography)({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  fontFamily: "Montserrat",
});
