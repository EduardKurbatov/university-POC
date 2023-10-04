import { Box, IconButton, MenuItem } from "@mui/material";
import GBFlag from "../../icons/GBFlag";
import FRFlag from "../../icons/FRFlag";
import {
  HeaderContainer,
  HeaderToolContainer,
  HeaderWrapper,
  LanguageSelect,
  NavigationLable,
} from "./HeaderStyledComponents";
import LogOutIcon from "../../icons/LogOutIcon";
import React from "react";

interface HeaderProps {
  isLoggined: boolean;
  setIsLoggined: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ isLoggined, setIsLoggined }) => {
  const handlelogOut = () => {
    setTimeout(() => {
      localStorage.removeItem("isLoggined");
      setIsLoggined(false);
    }, 700);
  };

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Box display={"flex"} height={"100%"} alignItems={"center"}>
          <img
            width={150}
            height={50}
            src="https://admission.fgses-um6p.ma/images/logo.svg"
          />
        </Box>

        <Box display={"flex"} height={"100%"} alignItems={"flex-end"}>
          <HeaderToolContainer>
            <NavigationLable>Home</NavigationLable>
          </HeaderToolContainer>
          <HeaderToolContainer>
            <NavigationLable>FAQ</NavigationLable>
          </HeaderToolContainer>
          <HeaderToolContainer>
            <NavigationLable>Contact</NavigationLable>
          </HeaderToolContainer>
          <Box sx={{ px: 1 }}>
            <LanguageSelect defaultValue={1}>
              <MenuItem value={1}>
                <GBFlag />
              </MenuItem>
              <MenuItem value={2}>
                <FRFlag />
              </MenuItem>
            </LanguageSelect>
          </Box>

          {isLoggined && (
            <Box sx={{ px: 1 }}>
              <IconButton onClick={handlelogOut}>
                <LogOutIcon fill={"#fff"} />
              </IconButton>
            </Box>
          )}
        </Box>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
