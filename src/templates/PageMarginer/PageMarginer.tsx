import { IPageMarginerParam } from "./interfaces";

function PageMarginer({ children }: IPageMarginerParam) {
  return <div className="px-36 py-24">{children}</div>;
}

export default PageMarginer;
