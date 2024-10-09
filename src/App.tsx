import { Navbar } from "./molecules";
import { AboutMePage, EducationPage, ProjectsPage, WelcomePage } from "./pages";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <WelcomePage />
      <ProjectsPage />
      <AboutMePage />
      <EducationPage />
    </div>
  );
}

export default App;
