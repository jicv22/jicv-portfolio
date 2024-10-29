export enum ETextType {
  H6 = "h6",
  H5 = "h5",
  H4 = "h4",
  H3 = "h3",
  H2 = "h2",
  H1 = "h1",
  T6 = "t6",
  T5 = "t5",
  T4 = "t4",
  T3 = "t3",
  T2 = "t2",
  T1 = "t1",
}

export enum ETextMode {
  NORMAL = "normal",
  HIGHLIGHTED = "highlighted",
  BOLD = "bold",
}

export interface ITextStylesParam {
  type?: ETextType;
  mode?: ETextMode;
}

export interface ITextParam {
  children: string;
  type?: ETextType;
  mode?: ETextMode;
  lineClamp?: number;
  alignment?: TTextAlignment;
}

export type TTextAlignment = "start" | "center" | "end";
