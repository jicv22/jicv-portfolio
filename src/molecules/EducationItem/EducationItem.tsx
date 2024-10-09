import { ETextMode, ETextType, Text } from "../../atoms";
import { IEducationItemParam } from "./interface";

function EducationItem({ mainTitle, achievements }: IEducationItemParam) {
  return (
    <div className="space-y-4">
      <Text type={ETextType.H5}>{mainTitle}</Text>
      {achievements.map(({ achievement, institute, description }, index) => (
        <div key={`${institute}-${index}`} className="pl-4 space-y-3">
          <Text type={ETextType.H6} mode={ETextMode.HIGHLIGHTED}>
            {achievement}
          </Text>
          <div className="pl-4 flex flex-col space-y-3">
            <Text type={ETextType.T1}>{institute}</Text>
            {description && <Text type={ETextType.T3}>{description}</Text>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default EducationItem;
