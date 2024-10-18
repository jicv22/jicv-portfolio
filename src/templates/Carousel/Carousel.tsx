import { FC } from "react";
import { ICarouselParam } from "./interfaces";

const Carousel: FC<ICarouselParam> = ({ children }) => (
  <div className="flex space-x-4 max-w-full overflow-x-auto py-3 px-1">
    {children}
  </div>
);

export default Carousel;
