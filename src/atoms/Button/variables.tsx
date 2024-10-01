import { EButtonMode } from "./interfaces";

export const modesStyles = {
  [EButtonMode.CONTAINED]: `bg-darkElectricBlue text-white`,
  [EButtonMode.OUTLINE]: `border-solid border-2 border-darkElectricBlue text-darkElectricBlue`,
  [EButtonMode.CONTENT]: `text-white`,
};
