import { useContext } from "react";
import { DrawerContext } from "../context";

function useDrawer() {
  const context = useContext(DrawerContext);

  if (!context) {
    throw new Error("useDrawer must be used within a ModalProvider");
  }
  return context;
}

export default useDrawer;
