import { Navbar } from "./molecules";
import { AboutMePage, EducationPage, ProjectsPage, WelcomePage } from "./pages";

function App() {
  return (
    <div className="w-full pt-14">
      <Navbar />
      <WelcomePage />
      <ProjectsPage />
      <AboutMePage />
      <EducationPage />
    </div>
  );
}

export default App;
