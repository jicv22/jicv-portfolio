import { ModalProvider } from "./context";
import { Navbar } from "./molecules";
import { AboutMePage, EducationPage, ProjectsPage, WelcomePage } from "./pages";

function App() {
  return (
    <ModalProvider>
      <div className="w-full">
        <Navbar />
        <WelcomePage />
        <ProjectsPage />
        <AboutMePage />
        <EducationPage />
      </div>
    </ModalProvider>
  );
}

export default App;
