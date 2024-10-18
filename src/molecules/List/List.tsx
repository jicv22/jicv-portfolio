import React, { FC } from "react";
import { IListParam } from "./interfaces";
import { ListItem } from "../../atoms";

const List: FC<IListParam> = ({ children }) => (
  <ul className="list-none pl-6">
    {React.Children.map(children, (child, index) => (
      <ListItem key={`li-${index}`}>{child}</ListItem>
    ))}
  </ul>
);

export default List;
