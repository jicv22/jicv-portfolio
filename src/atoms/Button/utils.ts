import { EButtonType } from "./interfaces";
import { buttonTypeStyles } from "./variables";

export function getStyles(type?: EButtonType) {
  const generalStyles = "px-4 py-2 rounded-lg min-w-fit";
  const selectedStyles = buttonTypeStyles[type || EButtonType.CONTAINED];

  if (!selectedStyles) return generalStyles;
  return `${selectedStyles} ${generalStyles}`;
}
