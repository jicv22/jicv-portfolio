import { EButtonMode, IButtonParam } from "./interfaces";
import { modesStyles } from "./variables";

function getStyles(mode: EButtonMode) {
  const generalStyles = "px-4 py-2 rounded-lg";
  const selectedStyles = modesStyles[mode];

  if (!selectedStyles) return generalStyles;
  return `${selectedStyles} ${generalStyles}`;
}

function Button({ children, mode, onClick }: IButtonParam) {
  return (
    <button className={getStyles(mode)} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
