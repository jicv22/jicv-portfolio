import React, { FC } from "react";
import { EDrawerLocation, IDrawerProps } from "./interfaces";
import { getDrawerGeneralStyles, getTogglingDrawerStyles } from "./helpers";
import { useDrawer } from "../../hooks";

import rightArrow from "/src/assets/icos/right-arrow.svg";

const Drawer: FC<IDrawerProps> = ({
  isOpen,
  location = EDrawerLocation.RIGHT,
  children,
}) => {
  const { closeDrawer } = useDrawer();
  
  return (
    <React.Fragment>
      <button
        className={`fixed inset-0 bg-black opacity-50 z-50 transition duration-150 ease-in-out ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={closeDrawer}
      />
      <div
        className={`${getDrawerGeneralStyles(
          location
        )} ${getTogglingDrawerStyles({
          location,
          isOpen,
        })}`}
      >
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-darkGray h-16 py-2 aspect-[3/6] flex items-center rounded-tr-xl rounded-br-xl
          hover:brightness-150 transition duration-150 ease-in-out"
          onClick={closeDrawer}
        >
          <img
            className="invert h-full w-full"
            src={rightArrow}
            alt="Close Sidebar"
          />
        </button>
        {children}
      </div>
    </React.Fragment>
  );
};

export default Drawer;
