import { FC } from "react";
import { Button, ETextMode, ETextType, Text } from "../../atoms";
import { IProjectLinksParam } from "./interfaces";
import { openLinkInNewTab } from "../../utils/links";

const ProjectLinks: FC<IProjectLinksParam> = ({ links }) => {
  return (
    <div className="justify-around flex flex-col md:flex-row md:space-x-1 lg:space-x-4 space-y-4 md:space-y-0 ">
      {links?.download && (
        <Button grow onClick={() => openLinkInNewTab(links.download!)}>
          <Text type={ETextType.T1} mode={ETextMode.BOLD}>Get a Try</Text>
        </Button>
      )}
      {links?.gitHub && (
        <Button grow onClick={() => openLinkInNewTab(links.gitHub!)}>
          <Text type={ETextType.T1} mode={ETextMode.BOLD}>GitHub</Text>
        </Button>
      )}
      {links?.webPage && (
        <Button grow onClick={() => openLinkInNewTab(links.webPage!)}>
          <Text type={ETextType.T1} mode={ETextMode.BOLD}>Web Page</Text>
        </Button>
      )}
    </div>
  );
};

export default ProjectLinks;
