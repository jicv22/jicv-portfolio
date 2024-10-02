import { Button, EButtonType, ETextType, Text } from "./atoms";
import { Navbar } from "./molecules";
import { PageTemplate } from "./templates";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <div className="h-16" />
      <PageTemplate isPageUp={false}>
        <Text type={ETextType.H5}>Quick Test Black</Text>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Button type={EButtonType.CONTAINED}>
          <Text type={ETextType.H5}>Quick Button Test Black</Text>
        </Button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Button type={EButtonType.OUTLINE}>
          <Text type={ETextType.H5}>Quick Button Test Black</Text>
        </Button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Button type={EButtonType.CONTENT_ONLY}>
          <Text type={ETextType.H5}>Quick Button Test Black</Text>
        </Button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </PageTemplate>
      <PageTemplate isPageUp={true}>
        <Text type={ETextType.H5}>Quick Test Dark Dark Gray</Text>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Button type={EButtonType.CONTAINED}>
          <Text type={ETextType.H5}>Quick Button Test Dark Dark Gray</Text>
        </Button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Button type={EButtonType.OUTLINE}>
          <Text type={ETextType.H5}>Quick Button Test Dark Dark Gray</Text>
        </Button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Button type={EButtonType.CONTENT_ONLY}>
          <Text type={ETextType.H5}>Quick Button Test Dark Dark Gray</Text>
        </Button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </PageTemplate>
      <PageTemplate isPageUp={false}>
        <Text type={ETextType.H5}>Quick Test Dark Dark Gray</Text>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Button type={EButtonType.CONTAINED}>
          <Text type={ETextType.H5}>Quick Button Test Dark Dark Gray</Text>
        </Button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Button type={EButtonType.OUTLINE}>
          <Text type={ETextType.H5}>Quick Button Test Dark Dark Gray</Text>
        </Button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Button type={EButtonType.CONTENT_ONLY}>
          <Text type={ETextType.H5}>Quick Button Test Dark Dark Gray</Text>
        </Button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </PageTemplate>
    </div>
  );
}

export default App;
