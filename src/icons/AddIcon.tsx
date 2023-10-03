import { SvgIcon, SvgIconProps } from "@mui/material";
import React from "react";

const AddIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props} width="24" height="24" viewBox="0 0 24 24">
      <path
        d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 7C11.6203 7 11.3065 7.28215 11.2568 7.64823L11.25 7.75V11.25H7.75C7.33579 11.25 7 11.5858 7 12C7 12.3797 7.28215 12.6935 7.64823 12.7432L7.75 12.75H11.25V16.25C11.25 16.6642 11.5858 17 12 17C12.3797 17 12.6935 16.7178 12.7432 16.3518L12.75 16.25V12.75H16.25C16.6642 12.75 17 12.4142 17 12C17 11.6203 16.7178 11.3065 16.3518 11.2568L16.25 11.25H12.75V7.75C12.75 7.33579 12.4142 7 12 7Z"
        fill={props.fill || "#a2a4a6"}
      />
    </SvgIcon>
  );
};

export default AddIcon;
