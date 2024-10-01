import { ETextMode, ETextType } from "./interfaces";
import { textModeStyles, textTypeStyles } from "./variables";

export function getStyles(type?: ETextType, mode?: ETextMode) {
  return `${textTypeStyles[type || ETextType.T4]} ${
    textModeStyles[mode || ETextMode.NORMAL]
  }`;
}
