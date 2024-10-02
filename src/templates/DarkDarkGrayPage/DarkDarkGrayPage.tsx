import { PageMarginer } from "../PageMarginer";
import { IDarkDarkGrayPageParam } from "./interaces";

function DarkDarkGrayPage({ children }: IDarkDarkGrayPageParam) {
  return (
    <div className="bg-darkDarkGray">
      <PageMarginer>{children}</PageMarginer>
    </div>
  );
}

export default DarkDarkGrayPage;
