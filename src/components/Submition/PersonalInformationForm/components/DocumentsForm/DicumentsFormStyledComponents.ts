import { Box, Typography, styled } from "@mui/material";

export const AddFileLabel = styled("label")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: `calc(50% - ${theme.spacing(4)})`,
  height: "50px",
  border: "1px dashed #a2a4a6",
  cursor: "pointer",
  padding: theme.spacing(1),
  borderRadius: "5px",
  color: "#fff",
}));

export const UploadedArea = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isDragActive",
})<{ isDragActive?: boolean }>(({ theme, isDragActive }) => ({
  width: `calc(50% - ${theme.spacing(2)})`,
  border: `1px dashed ${isDragActive ? "#273d97" : "#a2a4a6"}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "70px",
  borderRadius: "5px",
  cursor: "pointer",

  ":hover": {
    color: "#273d97",
    border: "1px dashed #273d97",
  },
}));

export const FileName = styled(Typography)({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  fontFamily: "Montserrat",
});
