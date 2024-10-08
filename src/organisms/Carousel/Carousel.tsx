import { ETextType, Text } from "../../atoms";
import { ICarruselParams } from "./interface";

function Carousel({ title, elements }: ICarruselParams) {
  return (
    <div className="space-y-1 lg:space-y-3 2xl:space-y-5">
      <Text type={ETextType.H5}>{title}</Text>
      <div className="flex space-x-4 max-w-full overflow-x-auto py-3 px-1 scrollbar-thin scrollbar-thumb-darkGray scrollbar-track-transparent">
        {elements.map((element) => element)}
      </div>
    </div>
  );
}

export default Carousel;
