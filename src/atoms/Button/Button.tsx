import { IButtonParam } from "./interfaces";
import { getStyles } from "./utils";

function Button({ children, type, grow, onClick }: IButtonParam) {
  return (
    <button className={getStyles({ type, grow })} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
