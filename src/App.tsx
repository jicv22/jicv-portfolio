import { useRef } from "react";
import { ModalProvider } from "./context";
import { Navbar } from "./molecules";
import { AboutMePage, EducationPage, ProjectsPage, WelcomePage } from "./pages";

const App = () => {
  const sectionRefs = {
    welcome: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    aboutMe: useRef<HTMLDivElement>(null),
    education: useRef<HTMLDivElement>(null),
  };

  console.log("A => ", import.meta.env.VITE_CLOUD_NAME);
  console.log("B => ", import.meta.env.VITE_PROJECT_ARENA_DIR);
  console.log("C => ", import.meta.env.VITE_PROJECT_BATTLEFIELD_DIR);
  console.log("D => ", import.meta.env.VITE_PROJECT_DRON_DIR);
  console.log("E => ", import.meta.env.VITE_PROJECT_MOMENTUM_DIR);
  console.log("F => ", import.meta.env.VITE_DIGITAL_PORTFOLIO_DIR);

  return (
    <ModalProvider>
      <div className="w-full">
        <Navbar sectionRefs={sectionRefs} />
        <WelcomePage ref={sectionRefs.welcome} />
        <ProjectsPage ref={sectionRefs.projects} />
        <AboutMePage ref={sectionRefs.aboutMe} />
        <EducationPage ref={sectionRefs.education} />
      </div>
    </ModalProvider>
  );
};

export default App;
