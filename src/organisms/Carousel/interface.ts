import { ReactNode } from "react";
import { ETextType } from "../../atoms";

export interface ICarruselParams {
  titleAttributes?: ITitleParam;
  elements: ReactNode[];
}

export interface ITitleParam {
  title: string;
  type?: ETextType;
}
