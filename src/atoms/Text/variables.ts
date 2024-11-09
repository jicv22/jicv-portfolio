import { ETextMode, ETextType } from "./interfaces";

export const textTypeStyles = {
  [ETextType.H1]: "font-bold text-6xl md:text-7xl lg:text-8xl",
  [ETextType.H2]: "font-bold text-5xl md:text-6xl lg:text-7xl",
  [ETextType.H3]: "font-bold text-4xl md:text-5xl lg:text-6xl",
  [ETextType.H4]: "font-bold text-3xl md:text-4xl lg:text-5xl",
  [ETextType.H5]: "font-bold text-2xl md:text-3xl lg:text-4xl",
  [ETextType.H6]: "font-bold text-xl md:text-2xl lg:text-3xl",
  [ETextType.T1]: "text-lg md:text-xl lg:text-2xl",
  [ETextType.T2]: "text-base md:text-lg lg:text-xl",
  [ETextType.T3]: "text-sm md:text-base lg:text-lg",
  [ETextType.T4]: "text-xs md:text-sm lg:text-base",
  [ETextType.T5]: "text-xs md:text-xs lg:text-sm",
  [ETextType.T6]: "text-xs",
};

export const textModeStyles = {
  [ETextMode.NORMAL]: "",
  [ETextMode.HIGHLIGHTED]: "text-electricBlue font-bold",
  [ETextMode.BOLD]: "font-bold",
};
