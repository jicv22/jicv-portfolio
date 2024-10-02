import { PageMarginer } from "../PageMarginer";
import { IBlackPageParam } from "./interaces";

function BlackPage({ children }: IBlackPageParam) {
  return (
    <div className="bg-black">
      <PageMarginer>{children}</PageMarginer>
    </div>
  );
}

export default BlackPage;
