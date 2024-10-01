import { MouseEvent, ReactNode } from "react";

export enum EButtonMode {
  CONTAINED = "contained",
  OUTLINE = "outline",
  CONTENT_ONLY = "content_only",
}

export interface IButtonParam {
  children: ReactNode;
  mode: EButtonMode;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}
