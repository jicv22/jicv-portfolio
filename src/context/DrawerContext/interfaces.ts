import { ReactNode } from "react";

export interface IDrawerContextParam {
  isOpen: boolean;
  openDrawer: (drawerComponent: ReactNode) => void;
  closeDrawer: () => void;
}

export interface IDrawerProviderProps {
  children: ReactNode;
}
