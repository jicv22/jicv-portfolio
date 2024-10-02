import { MouseEvent, ReactNode } from "react";

export enum EButtonType {
  CONTAINED = "contained",
  OUTLINE = "outline",
  CONTENT_ONLY = "content_only",
}

export interface IButtonParam {
  children: ReactNode;
  type?: EButtonType;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}