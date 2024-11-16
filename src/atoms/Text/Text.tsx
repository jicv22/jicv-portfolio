import { FC } from "react";
import { ITextParam } from "./interfaces";
import { getCustomStyles, getStyles } from "./utils";

const Text: FC<ITextParam> = ({
  children,
  className,
  type,
  mode,
  lineClamp,
  alignment,
}) => (
  <span
    className={`${className} ${getStyles({ type, mode })}`}
    style={getCustomStyles({ lineClamp, alignment })}
  >
    {children}
  </span>
);

export default Text;
