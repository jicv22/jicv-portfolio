import { ReactNode } from "react";

export interface IDrawerProps {
  children: ReactNode;
  isOpen?: boolean;
  location?: EDrawerLocation;
}

export enum EDrawerLocation {
  TOP = "top",
  BOTTOM = "bottom",
  LEFT = "left",
  RIGHT = "right",
}
