import { useRef } from "react";
import { Navbar } from "./molecules";
import { AboutMePage, EducationPage, ProjectsPage, WelcomePage } from "./pages";

const App = () => {
  const sectionRefs = {
    welcomeRef: useRef<HTMLDivElement>(null),
    projectsRef: useRef<HTMLDivElement>(null),
    aboutMeRef: useRef<HTMLDivElement>(null),
    educationRef: useRef<HTMLDivElement>(null),
  };

  return (
    <div className="w-full">
      <Navbar sectionRefs={sectionRefs} />
      <WelcomePage ref={sectionRefs.welcomeRef} />
      <ProjectsPage ref={sectionRefs.projectsRef} />
      <AboutMePage ref={sectionRefs.aboutMeRef} />
      <EducationPage ref={sectionRefs.educationRef} />
    </div>
  );
};

export default App;
