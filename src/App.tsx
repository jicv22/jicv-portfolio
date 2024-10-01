import { Button, ETextMode, ETextType, Text } from "./atoms";

function App() {
  return (
    <div className="w-full px-36 py-24">
      <Text type={ETextType.H4} mode={ETextMode.HIGHLIGHTED}>
        I'm a Text
      </Text>
      <br />
      <br />
      <Button>
        <Text type={ETextType.H6}>Touch Me!</Text>
      </Button>
    </div>
  );
}

export default App;
