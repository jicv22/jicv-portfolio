import { EButtonMode } from "./interfaces";

export const modesStyles = {
  [EButtonMode.CONTAINED]: `bg-darkElectricBlue text-lightGray hover:bg-electricBlue`,
  [EButtonMode.OUTLINE]: `border-solid border-2 border-darkElectricBlue text-darkElectricBlue hover:border-electricBlue hover:text-electricBlue`,
  [EButtonMode.CONTENT_ONLY]: `text-lightGray hover:text-white hover:text-shadow-white`,
};
