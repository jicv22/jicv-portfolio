export interface ITextWithHighlightsParam {
  texts: IHighlightableText[];
}

export interface IHighlightableText {
  text: string;
  highlight?: boolean;
}
