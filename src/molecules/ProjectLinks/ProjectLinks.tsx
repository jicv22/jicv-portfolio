import { FC } from "react";
import { Button, ETextType, Text } from "../../atoms";
import { IProjectLinksParam } from "./interfaces";
import { openLinkInNewTab } from "../../utils/links";

const ProjectLinks: FC<IProjectLinksParam> = ({ links }) => {
  return (
    <div className="justify-around flex flex-col md:flex-row md:space-x-1 lg:space-x-4 space-y-4 md:space-y-0 ">
      {links?.download && (
        <Button grow onClick={() => openLinkInNewTab(links.download!)}>
          <Text type={ETextType.H6}>Get a Try</Text>
        </Button>
      )}
      {links?.gitHub && (
        <Button grow onClick={() => openLinkInNewTab(links.gitHub!)}>
          <Text type={ETextType.H6}>GitHub</Text>
        </Button>
      )}
      {links?.webPage && (
        <Button grow onClick={() => openLinkInNewTab(links.webPage!)}>
          <Text type={ETextType.H6}>Web Page</Text>
        </Button>
      )}
    </div>
  );
};

export default ProjectLinks;
