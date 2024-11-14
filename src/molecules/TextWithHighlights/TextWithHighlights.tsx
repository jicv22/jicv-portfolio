import { ETextMode, ETextType, Text } from "../../atoms";
import { ITextWithHighlightsParam } from "./interfaces";

function TextWithHighlights({ texts }: ITextWithHighlightsParam) {
  return texts.map((item, index) => (
    <Text
      key={index}
      type={ETextType.T4}
      mode={item.highlight ? ETextMode.HIGHLIGHTED : undefined}
    >
      {item.text}
    </Text>
  ));
}

export default TextWithHighlights;
