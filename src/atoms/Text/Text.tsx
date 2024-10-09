import { ITextParam } from "./interfaces";
import { getCustomStyles, getStyles } from "./utils";

function Text({ children, type, mode, lineClamp, alignment }: ITextParam) {
  return (
    <span
      className={getStyles({ type, mode })}
      style={getCustomStyles({ lineClamp, alignment })}
    >
      {children}
    </span>
  );
}

export default Text;
