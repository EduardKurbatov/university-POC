import { Box, IconButton, Typography } from "@mui/material";
import { FooterContainer, FooterWrapper } from "./FooterStyledComponents";
import FaceBookIcon from "../../icons/FaceBookIcon";
import InstagramIcon from "../../icons/InstagramIcon";
import LinkedInIcon from "../../icons/LinkedInIcon";
import TwitterIcon from "../../icons/TwitterIcon";
import YouTubeIcon from "../../icons/YouTubeIcon";

const Footer = () => {
  const iconsProps = {
    style: {
      fontSize: "16px",
    },
  };

  const socialMedias = [
    <FaceBookIcon {...iconsProps} />,
    <InstagramIcon {...iconsProps} />,
    <LinkedInIcon {...iconsProps} />,
    <TwitterIcon {...iconsProps} />,
    <YouTubeIcon {...iconsProps} />,
  ];

  return (
    <FooterContainer>
      <FooterWrapper>
        <Box>
          <Typography
            fontSize={"15px"}
            color={"#fff"}
            fontFamily={"Montserrat"}
            fontWeight={600}
          >
            FGSES - ADMISSIONS | +212 530 43 12 46
          </Typography>
          <Typography
            fontSize={"12px"}
            color={"#fff"}
            fontFamily={"Montserrat"}
          >
            © 2022 - Faculté de Gouvernance, Sciences Economiques et Sociales -
            UM6P - Campus Rabat. Inc. All rights reserved
          </Typography>
        </Box>

        <Box>
          {socialMedias.map((socialMedia, index) => (
            <IconButton key={index}>{socialMedia}</IconButton>
          ))}
        </Box>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
