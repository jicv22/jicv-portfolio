import { ReactNode } from "react";
import { ETextType } from "../../atoms";

export interface ITitledComponentParam {
  titleAttributes: ITitleParam;
  children: ReactNode[] | ReactNode;
}

export interface ITitleParam {
  title: string;
  type?: ETextType;
}
