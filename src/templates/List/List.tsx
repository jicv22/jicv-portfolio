import { IListParam } from "./interfaces";

function List({ children }: IListParam) {
  return (
    <ul className="list-none pl-6">
      {children.map((child, index) => (
        <li
          key={`li-${index}`}
          className="relative text-white before:content-['●'] before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:text-white before:text-lg"
        >
          {child}
        </li>
      ))}
    </ul>
  );
}

export default List;
