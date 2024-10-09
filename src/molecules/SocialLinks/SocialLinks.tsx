import { Button, EButtonType, Text, ETextType } from "../../atoms";
import { handleDownload, openGitHub, openLinkedIn } from "./utils";

function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <Button type={EButtonType.CONTENT_ONLY} onClick={handleDownload}>
        <Text type={ETextType.T1}>CV</Text>
      </Button>
      <Button type={EButtonType.OUTLINE} onClick={openLinkedIn}>
        <Text type={ETextType.T1}>LinkedIn</Text>
      </Button>
      <Button type={EButtonType.CONTAINED} onClick={openGitHub}>
        <Text type={ETextType.T1}>GitHub</Text>
      </Button>
    </div>
  );
}

export default SocialLinks;
