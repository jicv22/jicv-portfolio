import React, { ReactNode, FC } from "react";
import { IListParam } from "./interfaces";

const ListItem: FC<{ children: ReactNode }> = ({ children }) => (
  <li className="relative text-white before:content-['●'] before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:text-white before:text-lg">
    {children}
  </li>
);

const List: FC<IListParam> = ({ children }) => (
  <ul className="list-none pl-6">
    {React.Children.map(children, (child, index) => (
      <ListItem key={`li-${index}`}>{child}</ListItem>
    ))}
  </ul>
);

export default List;
