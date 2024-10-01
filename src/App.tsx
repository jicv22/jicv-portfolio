import { Button } from "./atoms";
import { EButtonMode } from "./atoms/Button/interfaces";

function App() {
  return (
    <Button mode={EButtonMode.OUTLINE} onClick={() => console.log("JUAZJUAZ")}>
      Touch Me!
    </Button>
  );
}

export default App;
