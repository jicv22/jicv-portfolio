import { ICarouselParam } from "./interfaces";

function Carousel({ children }: ICarouselParam) {
  return (
    <div className="flex space-x-4 max-w-full overflow-x-auto py-3 px-1 scrollbar-thin scrollbar-thumb-darkGray scrollbar-track-transparent">
      {children}
    </div>
  );
}

export default Carousel;
