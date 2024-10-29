import { ETextMode, ETextType, Text } from "../../atoms";
import { hasValidContent } from "../../utils/arrays";
import { INestedInfoListParam } from "./interfaces";

const NestedInfoList = ({ nestedInfo }: INestedInfoListParam) => (
  <ul className="list-disc pl-6">
    {nestedInfo.map(({ info, childInfo }, index) => (
      <li key={`item-${index}`} className="mb-0 md:mb-1 xl:mb-2">
        <Text type={ETextType.T3} mode={childInfo ? ETextMode.BOLD : undefined}>
          {info}
        </Text>
        {hasValidContent(childInfo) && (
          <NestedInfoList nestedInfo={childInfo} />
        )}
      </li>
    ))}
  </ul>
);

export default NestedInfoList;
