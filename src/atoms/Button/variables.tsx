import { EButtonType } from "./interfaces";

export const buttonTypeStyles = {
  [EButtonType.CONTAINED]: `bg-darkElectricBlue text-lightGray hover:bg-electricBlue`,
  [EButtonType.OUTLINE]: `border-solid border-2 border-darkElectricBlue text-darkElectricBlue hover:border-electricBlue hover:text-electricBlue`,
  [EButtonType.CONTENT_ONLY]: `text-lightGray hover:text-white hover:text-shadow-white`,
};
