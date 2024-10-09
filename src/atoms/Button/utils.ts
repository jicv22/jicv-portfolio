import { EButtonType } from "./interfaces";
import { buttonTypeStyles } from "./variables";

export function getStyles(type?: EButtonType) {
  const generalStyles =
    "rounded-md xl:rounded-lg min-w-fit flex items-center justify-center px-2 xl:px-4 py-1 xl:py-2";
  const selectedStyles = buttonTypeStyles[type || EButtonType.CONTAINED];

  if (!selectedStyles) return generalStyles;
  return `${selectedStyles} ${generalStyles}`;
}
