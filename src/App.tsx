import { Button, EButtonType, ETextType, Text } from "./atoms";
import { Navbar } from "./molecules";
import { BlackPage, DarkDarkGrayPage } from "./templates";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <BlackPage>
        <Text type={ETextType.H5}>Quick Test Black</Text>
        <br />
        <br />
        <Button type={EButtonType.CONTAINED}>
          <Text type={ETextType.H5}>Quick Button Test Black</Text>
        </Button>
        <br />
        <br />
        <Button type={EButtonType.OUTLINE}>
          <Text type={ETextType.H5}>Quick Button Test Black</Text>
        </Button>
        <br />
        <br />
        <Button type={EButtonType.CONTENT_ONLY}>
          <Text type={ETextType.H5}>Quick Button Test Black</Text>
        </Button>
        <br />
        <br />
      </BlackPage>
      <DarkDarkGrayPage>
        <Text type={ETextType.H5}>Quick Test Dark Dark Gray</Text>
        <br />
        <br />
        <Button type={EButtonType.CONTAINED}>
          <Text type={ETextType.H5}>Quick Button Test Dark Dark Gray</Text>
        </Button>
        <br />
        <br />
        <Button type={EButtonType.OUTLINE}>
          <Text type={ETextType.H5}>Quick Button Test Dark Dark Gray</Text>
        </Button>
        <br />
        <br />
        <Button type={EButtonType.CONTENT_ONLY}>
          <Text type={ETextType.H5}>Quick Button Test Dark Dark Gray</Text>
        </Button>
        <br />
        <br />
      </DarkDarkGrayPage>
    </div>
  );
}

export default App;
