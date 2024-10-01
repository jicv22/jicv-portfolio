import { IButtonParam } from "./interfaces";
import { getStyles } from "./utils";

function Button({ children, type, onClick }: IButtonParam) {
  return (
    <button className={getStyles(type)} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
