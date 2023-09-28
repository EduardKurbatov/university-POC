import { Box, Typography } from "@mui/material";

const Menu = () => {
  const menuItems = [
    { label: "Get started" },
    { label: "Personal information", active: true },
    { label: "Academic background" },
    { label: "Motivations" },
    { label: "Supporting documents" },
    { label: "Validation of the application" },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {menuItems.map((item) => (
        <Box sx={{ py: 1 }} key={item.label}>
          <Typography
            component={"span"}
            color={"#273d96"}
            fontWeight={item.active ? 600 : 300}
            fontFamily={"Montserrat"}
          >
            {item.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Menu;
