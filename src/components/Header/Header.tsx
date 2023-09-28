import { Box, MenuItem } from "@mui/material";
import GBFlag from "../../icons/GBFlag";
import FRFlag from "../../icons/FRFlag";
import {
  HeaderContainer,
  HeaderToolContainer,
  HeaderWrapper,
  LanguageSelect,
  NavigationLable,
} from "./HeaderStyledComponents";

const Header = () => {
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
        </Box>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
