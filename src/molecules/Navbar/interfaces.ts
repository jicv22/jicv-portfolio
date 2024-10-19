export interface INavbarParam {
  sectionRefs: ISectionReferences;
}

export interface ISectionReferences {
  welcome: React.RefObject<HTMLDivElement>;
  projects: React.RefObject<HTMLDivElement>;
  aboutMe: React.RefObject<HTMLDivElement>;
  education: React.RefObject<HTMLDivElement>;
}
