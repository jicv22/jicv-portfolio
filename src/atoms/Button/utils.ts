import { EButtonType } from "./interfaces";
import { buttonTypeStyles } from "./variables";

export function getStyles({
  grow,
  type,
}: {
  type?: EButtonType;
  grow?: boolean;
}) {
  const generalStyles =
    "rounded-md xl:rounded-lg min-w-fit flex items-center justify-center px-2 xl:px-4 py-1 xl:py-2 transition ease-in-out duration-150";
  const selectedStyles = buttonTypeStyles[type || EButtonType.CONTAINED];
  const growStyles = grow ? "flex-grow" : "";

  if (!selectedStyles) return generalStyles;
  return `${selectedStyles} ${generalStyles} ${growStyles}`;
}
