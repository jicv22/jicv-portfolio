import { ITextParam } from "./interfaces";
import { getStyles } from "./utils";

function Text({ children, type, mode }: ITextParam) {
  return <span className={getStyles(type, mode)}>{children}</span>;
}

export default Text;
