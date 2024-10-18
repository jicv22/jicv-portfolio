import { FC } from "react";
import { Button, ETextType, Text } from "../../atoms";
import { IProjectLinksParam } from "./interfaces";
import { openLink } from "../../utils/links";

const ProjectLinks: FC<IProjectLinksParam> = ({ links }) => {
  return (
    <div className="flex justify-around space-x-4">
      {links?.download && (
        <Button grow onClick={() => openLink(links.download!)}>
          <Text type={ETextType.H6}>Get a Try</Text>
        </Button>
      )}
      {links?.gitHub && (
        <Button grow onClick={() => openLink(links.gitHub!)}>
          <Text type={ETextType.H6}>GitHub</Text>
        </Button>
      )}
      {links?.webPage && (
        <Button grow onClick={() => openLink(links.webPage!)}>
          <Text type={ETextType.H6}>Web Page</Text>
        </Button>
      )}
    </div>
  );
};

export default ProjectLinks;
