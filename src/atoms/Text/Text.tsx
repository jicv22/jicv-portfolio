import { ITextParam } from "./interfaces";
import { getStyles } from "./utils";

function Text({ children, type, mode, lineClamp }: ITextParam) {
  return (
    <span
      className={getStyles({ type, mode })}
      style={{
        ...(lineClamp && {
          display: "-webkit-box",
          WebkitLineClamp: lineClamp,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }),
      }}
    >
      {children}
    </span>
  );
}

export default Text;
