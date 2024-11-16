import { FC, ReactNode, useState } from "react";
import DrawerContext from "./DrawerContext";
import { IDrawerProviderProps } from "./interfaces";
import { Drawer } from "../../molecules";

const DrawerProvider: FC<IDrawerProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState<ReactNode | null>(null);

  const openDrawer = (drawerComponent: ReactNode) => {
    setDrawerContent(drawerComponent);
    setIsOpen(true);
  };

  const closeDrawer = () => {
    setDrawerContent(null);
    setIsOpen(false);
  };

  return (
    <DrawerContext.Provider value={{ isOpen, openDrawer, closeDrawer }}>
      {children}
      <Drawer isOpen={isOpen}>{drawerContent}</Drawer>
    </DrawerContext.Provider>
  );
};

export default DrawerProvider;
