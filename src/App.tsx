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
