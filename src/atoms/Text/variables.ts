import { ETextMode, ETextType } from "./interfaces";

export const textTypeStyles = {
  [ETextType.H1]: "text-8xl font-bold",
  [ETextType.H2]: "text-7xl font-bold",
  [ETextType.H3]: "text-6xl font-bold",
  [ETextType.H4]: "text-5xl font-bold",
  [ETextType.H5]: "text-4xl font-bold",
  [ETextType.H6]: "text-3xl font-bold",
  [ETextType.T1]: "text-2xl",
  [ETextType.T2]: "text-xl",
  [ETextType.T3]: "text-lg",
  [ETextType.T4]: "text-base",
  [ETextType.T5]: "text-sm",
  [ETextType.T6]: "text-xs",
};

export const textModeStyles = {
  [ETextMode.NORMAL]: "",
  [ETextMode.HIGHLIGHTED]: "text-electricBlue font-bold",
};
