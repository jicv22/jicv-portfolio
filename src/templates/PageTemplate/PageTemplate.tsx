import { IPageTemplateParam } from "./interaces";
import { getBluredSpheresPosition } from "./utils";

function PageTemplate({ children, isPageUp }: IPageTemplateParam) {
  const doesIsPageUpUndefined = isPageUp === undefined;
  const pageUpValue = doesIsPageUpUndefined ? false : isPageUp;
  return (
    <div
      className={`relative ${
        pageUpValue ? "bg-darkDarkGray z-10" : "bg-black z-0"
      } px-36 py-24 shadow-[rgba(0,0,0,0.5)_0px_0px_24px_10px] overflow-clip`}
    >
      <div
        className={`z-0 absolute ${
          getBluredSpheresPosition(pageUpValue).upperSphere
        } rounded-full w-64 aspect-square blur-[300px] bg-electricBlue`}
      />
      <div
        className={`z-0 absolute ${
          getBluredSpheresPosition(pageUpValue).lowerSphere
        } rounded-full w-64 aspect-square blur-[300px] bg-lightGray`}
      />
      <div className="z-10">{children}</div>
    </div>
  );
}

export default PageTemplate;
