import { ETextType, Text } from "../../atoms";
import { Carousel } from "../../templates";
import { ITitledCarouselParam } from "./interface";

function TitledCarousel({ titleAttributes, children }: ITitledCarouselParam) {
  return (
    <div className="space-y-1 lg:space-y-3 2xl:space-y-5">
      {titleAttributes && (
        <Text type={titleAttributes.type || ETextType.H5}>
          {titleAttributes.title}
        </Text>
      )}
      <Carousel>{children}</Carousel>
    </div>
  );
}

export default TitledCarousel;
