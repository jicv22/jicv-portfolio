import { Button, EButtonType, ETextType, Text } from "../../atoms";

function Navbar() {
  return (
    <div className="z-50 bg-darkGray fixed top-0 left-0 right-0 flex justify-between py-2 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-36">
      <Button type={EButtonType.CONTENT_ONLY}>
        <Text type={ETextType.H6}>Isaac CV</Text>
      </Button>
      <div className="self-end flex flex-wrap">
        <Button type={EButtonType.CONTENT_ONLY}>
          <Text type={ETextType.T2}>Projects</Text>
        </Button>
        <Button type={EButtonType.CONTENT_ONLY}>
          <Text type={ETextType.T2}>About Me</Text>
        </Button>
        <Button type={EButtonType.CONTENT_ONLY}>
          <Text type={ETextType.T2}>Education</Text>
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
