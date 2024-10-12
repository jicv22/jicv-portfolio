import { IPageTemplateParam } from "./interfaces";
import { getBluredSpheresPosition } from "./utils";

function PageTemplate({ children, isPageUp, height }: IPageTemplateParam) {
  const bluredSpherePosition = getBluredSpheresPosition(!!isPageUp);

  return (
    <div
      className={`relative ${
        isPageUp ? "bg-darkDarkGray z-10" : "bg-black z-0"
      } shadow-[rgba(0,0,0,0.5)_0px_0px_24px_10px] overflow-clip
      py-24 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-36`}
      style={{ height: height ? height : "auto" }}
    >
      <div
        className={`z-0 absolute ${bluredSpherePosition.upperSphere} rounded-full w-64 aspect-square blur-[300px] bg-electricBlue`}
      />
      <div
        className={`z-0 absolute ${bluredSpherePosition.lowerSphere} rounded-full w-64 aspect-square blur-[300px] bg-lightGray`}
      />
      <div className="z-10 h-full w-full">{children}</div>
    </div>
  );
}

export default PageTemplate;
