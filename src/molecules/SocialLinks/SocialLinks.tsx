import { Button, EButtonType, Text, ETextType } from "../../atoms";

function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <Button type={EButtonType.CONTENT_ONLY}>
        <Text type={ETextType.T1}>CV</Text>
      </Button>
      <Button type={EButtonType.OUTLINE}>
        <Text type={ETextType.T1}>LinkedIn</Text>
      </Button>
      <Button type={EButtonType.CONTAINED}>
        <Text type={ETextType.T1}>GitHub</Text>
      </Button>
    </div>
  );
}

export default SocialLinks;