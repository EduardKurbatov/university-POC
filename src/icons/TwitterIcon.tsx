import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const TwitterIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props} width="48" height="48" viewBox="0 0 48 48">
      <path
        d="M36.6526 3.8078H43.3995L28.6594 20.6548L46 43.5797H32.4225L21.7881 29.6759L9.61989 43.5797H2.86886L18.6349 25.56L2 3.8078H15.9222L25.5348 16.5165L36.6526 3.8078ZM34.2846 39.5414H38.0232L13.8908 7.63406H9.87892L34.2846 39.5414Z"
        fill="white"
      />
    </SvgIcon>
  );
};

export default TwitterIcon;