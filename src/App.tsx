import { Navbar } from "./molecules";
import { AboutMePage, ProjectsPage, WelcomePage } from "./pages";

function App() {
  return (
    <div className="w-full pt-14">
      <Navbar />
      <WelcomePage />
      <ProjectsPage />
      <AboutMePage />
    </div>
  );
}

export default App;
