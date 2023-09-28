import { Box, Typography } from "@mui/material";
import React from "react";

interface FormSectionProps {
  title: string;
  children: React.ReactNode;
}

const FormSection: React.FC<FormSectionProps> = ({ title, children }) => {
  return (
    <Box sx={{ mt: 2 }}>
      <Typography
        fontSize={"25px"}
        color={"#273d97"}
        textTransform={"uppercase"}
        sx={{ mb: 2 }}
      >
        {title}
      </Typography>

      <Box>{children}</Box>
    </Box>
  );
};

export default FormSection;
