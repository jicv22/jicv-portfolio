export interface INavbarParam {
  sectionRefs: ISectionReferences;
}

export interface ISectionReferences {
  welcomeRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  aboutMeRef: React.RefObject<HTMLDivElement>;
  educationRef: React.RefObject<HTMLDivElement>;
}
