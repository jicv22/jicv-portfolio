import classNames from "classnames";
import { EDrawerLocation } from "./interfaces";

export const getTogglingDrawerStyles = ({
  location,
  isOpen,
}: {
  location: EDrawerLocation;
  isOpen?: boolean;
}) =>
  classNames({
    "translate-y-0":
      (location === EDrawerLocation.TOP ||
        location === EDrawerLocation.BOTTOM) &&
      isOpen,
    "translate-x-0":
      (location === EDrawerLocation.LEFT ||
        location === EDrawerLocation.RIGHT) &&
      isOpen,
    "-translate-y-full": location === EDrawerLocation.TOP && !isOpen,
    "translate-y-full": location === EDrawerLocation.BOTTOM && !isOpen,
    "-translate-x-full": location === EDrawerLocation.LEFT && !isOpen,
    "translate-x-full": location === EDrawerLocation.RIGHT && !isOpen,
  });

export const getDrawerGeneralStyles = (location: EDrawerLocation) =>
  classNames(
    "fixed bg-darkDarkGray border-4 border-darkGray w-fit p-16 z-50 flex gap-4 transition-transform duration-300 ease-in-out",
    {
      "left-0 w-full h-1/2":
        location === EDrawerLocation.TOP || location === EDrawerLocation.BOTTOM,
      "top-0 h-full w-1/2 flex-col":
        location === EDrawerLocation.LEFT || location === EDrawerLocation.RIGHT,

      "top-0": location === EDrawerLocation.TOP,
      "bottom-0": location === EDrawerLocation.BOTTOM,
      "left-0": location === EDrawerLocation.LEFT,
      "right-0": location === EDrawerLocation.RIGHT,
    }
  );
