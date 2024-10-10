import { createContext } from "react";
import { ModalContextType } from "./interfaces";

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export default ModalContext;
