import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const FRFlag: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props} width="513" height="343" viewBox="0 0 513 343">
      <g clipPath="url(#clip0_301_1221)">
        <path d="M0 0.925293H513V342.929H0V0.925293Z" fill="white" />
        <path d="M0 0.925293H170.996V342.929H0V0.925293Z" fill="#0052B4" />
        <path
          d="M342.004 0.925293H513V342.929H342.004V0.925293Z"
          fill="#D80027"
        />
      </g>
      <defs>
        <clipPath id="clip0_301_1221">
          <rect
            width="513"
            height="342"
            fill="white"
            transform="translate(0 0.927246)"
          />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

export default FRFlag;
