import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const CrossIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props} width="96" height="96" viewBox="0 0 96 96" fill="none">
      <rect width="96" height="96" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_1_5" transform="scale(0.0104167)" />
        </pattern>
        <image
          id="image0_1_5"
          width="96"
          height="96"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB5UlEQVR4nO2dPXLCMBQG35n8FeZm0JEyl03GN1Aae4YhQLADfj/arSnQrjQ2sgabAQAAAAAAAAAAQDpOZjZafcZ5rKH4MLNmZpOZHawuMrPveayfFkx+Kx5BF/JblAjX8qtG0A357hHuya8WQQ/ku0U4/fGFLiNkvjCP8xieGeuuF+bBzL5WRDgUnfnNc6JVjqDo8itHUBb5FSMom/xKEZRVfoUIyi4/cwRVkZ8xgqrJzxRBVeVniKDq8iNHUC/yI0ZQb/IjRVCv8iNEUO/yPSMI+X4RhHy/CEK+XwQh3y+CkO8XQcj3iyDk+0UQ8v0iCPl+Z3GmlZ8t+wvXcyU05MeOMDHz/SJMyPdbCRPy/SJMyH8tWnGruWbbAt4gnwgB5DdWgr/8RgR/+Y0I6xnZivBDGzbWIhx5KYH+satJBEf5C0TYiF64n08ER/kLRHgSvfFJFhEc5S8Q4Q57PsMduEX1k79AhBnP0wtD7yshwtGRodcIEeR3GyGS/O4iRJTfTYTI8stHyCC/bIRM8stFyCi/TITM8tNHqCA/bYRK8tNFqCg/TYTK8lNE4K+L7VeE3d8pcCw687eshLM5cSwu/5kIbvLvRagm/1EEd/nXEarKvxUhjPwFXuIDAAAAAAAAAAAAFpYfaDRgQW8B0IsAAAAASUVORK5CYII="
        />
      </defs>
    </SvgIcon>
  );
};

export default CrossIcon;
