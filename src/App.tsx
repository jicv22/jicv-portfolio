import { Button } from "./atoms";
import { EButtonMode } from "./atoms/Button/interfaces";

function App() {
  return (
    <Button
      mode={EButtonMode.CONTAINED}
      onClick={() => console.log("JUAZJUAZ")}
    >
      Touch Me!
    </Button>
  );
}

export default App;
