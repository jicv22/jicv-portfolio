import { FC } from "react";
import { IListItemParam } from "./interfaces";

const ListItem: FC<IListItemParam> = ({ children }) => (
  <li className="relative text-white before:content-['●'] before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:text-white before:text-lg">
    {children}
  </li>
);

export default ListItem;
