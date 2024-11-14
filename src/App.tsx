import { useRef } from "react";
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
    <div className="w-full">
      <Navbar sectionRefs={sectionRefs} />
      <WelcomePage ref={sectionRefs.welcome} />
      <ProjectsPage ref={sectionRefs.projects} />
      <AboutMePage ref={sectionRefs.aboutMe} />
      <EducationPage ref={sectionRefs.education} />
    </div>
  );
};

export default App;
