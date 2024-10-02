import { Button, EButtonType, ETextType, Text } from "../../atoms";

function Navbar() {
  return (
    <div className="z-50 bg-darkGray fixed top-0 left-0 right-0 px-36 py-2 flex justify-between">
      <Button type={EButtonType.CONTENT_ONLY}>
        <Text type={ETextType.H6}>Isaac CV</Text>
      </Button>
      <div className="self-end">
        <Button type={EButtonType.CONTENT_ONLY}>
          <Text type={ETextType.T3}>Projects</Text>
        </Button>
        <Button type={EButtonType.CONTENT_ONLY}>
          <Text type={ETextType.T3}>About Me</Text>
        </Button>
        <Button type={EButtonType.CONTENT_ONLY}>
          <Text type={ETextType.T3}>Education</Text>
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
