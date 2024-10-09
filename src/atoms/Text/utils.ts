import { CSSProperties } from "react";
import {
  ETextMode,
  ETextType,
  ITextStylesParam,
  TTextAlignment,
} from "./interfaces";
import { textModeStyles, textTypeStyles } from "./variables";

export function getStyles({ mode, type }: ITextStylesParam) {
  return `${textTypeStyles[type || ETextType.T4]} ${
    textModeStyles[mode || ETextMode.NORMAL]
  }`;
}

export function getCustomStyles({
  lineClamp,
  alignment,
}: {
  lineClamp?: number;
  alignment?: TTextAlignment;
}): CSSProperties {
  const generalStyles: CSSProperties = { textAlign: alignment || "start" };
  const lineClampStyles: CSSProperties = lineClamp
    ? {
        display: "-webkit-box",
        WebkitLineClamp: lineClamp,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      }
    : {};
  return { ...generalStyles, ...lineClampStyles };
}
