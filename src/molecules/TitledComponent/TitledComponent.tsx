import { ETextType, Text } from "../../atoms";
import { ITitledComponentParam } from "./interface";

function TitledComponent({ titleAttributes, children }: ITitledComponentParam) {
  return (
    <div className="space-y-1 lg:space-y-3 2xl:space-y-5">
      <Text type={titleAttributes.type || ETextType.H6}>
        {titleAttributes.title}
      </Text>
      {children}
    </div>
  );
}

export default TitledComponent;
