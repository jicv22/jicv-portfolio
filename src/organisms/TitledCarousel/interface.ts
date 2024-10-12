import { ReactNode } from "react";
import { ETextType } from "../../atoms";

export interface ITitledCarouselParam {
  titleAttributes?: ITitleParam;
  children: ReactNode[];
}

export interface ITitleParam {
  title: string;
  type?: ETextType;
}
