import { Navbar } from "./molecules";
import { ProjectsPage, WelcomePage } from "./pages";

function App() {
  return (
    <div className="w-full pt-14">
      <Navbar />
      <WelcomePage />
      <ProjectsPage />
    </div>
  );
}

export default App;
