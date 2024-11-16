import { createContext } from "react";
import { IDrawerContextParam } from "./interfaces";

const DrawerContext = createContext<IDrawerContextParam | undefined>(undefined);

export default DrawerContext;
