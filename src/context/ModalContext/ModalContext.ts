import { createContext } from "react";
import { IModalContextParam } from "./interfaces";

const ModalContext = createContext<IModalContextParam | undefined>(undefined);

export default ModalContext;
