import { ETextMode, ETextType, ITextStylesParam } from "./interfaces";
import { textModeStyles, textTypeStyles } from "./variables";

export function getStyles({ mode, type }: ITextStylesParam) {
  const generalStyles = "text-start";
  return `${generalStyles} ${textTypeStyles[type || ETextType.T4]} ${
    textModeStyles[mode || ETextMode.NORMAL]
  }`;
}
