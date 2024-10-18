import { FC } from "react";
import { ITitledListParam } from "./interfaces";
import { ETextType } from "../../atoms";
import { List, TitledComponent } from "../../molecules";

const TitledList: FC<ITitledListParam> = ({ children, title }) => (
  <TitledComponent titleAttributes={{ title, type: ETextType.H6 }}>
    <List>{children}</List>
  </TitledComponent>
);
export default TitledList;
