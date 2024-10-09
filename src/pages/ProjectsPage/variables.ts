import {
  ELastProjectState,
  EProjectPlatform,
  EProjectTechnology,
  IProjectData,
} from "./interfaces";
import WebPortfolioThumbnail from "/src/assets/imgs/WebPortfolio.jpg";
import projectMomentumThumbnail from "/src/assets/imgs/ProjectBally.jpg";
import projectDronThumbnail from "/src/assets/imgs/ProjectDron - Drony.jpg";
import projectArenaThumbnail from "/src/assets/imgs/ProjectArena - TripleLeg.jpg";
import projectBattlefieldThumbnail from "/src/assets/imgs/ProjectBattlefield.jpg";

export const projectMomentumData: IProjectData = {
  thumbnail: projectMomentumThumbnail,
  name: "Project Momentum",
  startDate: new Date("08-19-2024"),
  endDate: ELastProjectState.IN_PROGRESS,
  platforms: [EProjectPlatform.PC],
  technologies: [
    EProjectTechnology.UNREAL_ENGINE,
    EProjectTechnology.BLENDER,
    EProjectTechnology.FIGMA,
  ],
};

export const projectBattlefieldData: IProjectData = {
  thumbnail: projectBattlefieldThumbnail,
  name: "Project Battlefield",
  startDate: new Date("02-01-2024"),
  endDate: ELastProjectState.PAUSED,
  platforms: [EProjectPlatform.PC],
  technologies: [
    EProjectTechnology.UNREAL_ENGINE,
    EProjectTechnology.BLENDER,
    EProjectTechnology.FIGMA,
  ],
};

export const projectArenaData: IProjectData = {
  thumbnail: projectArenaThumbnail,
  name: "Project Arena",
  startDate: new Date("09-29-2023"),
  endDate: ELastProjectState.PAUSED,
  platforms: [EProjectPlatform.PC],
  technologies: [
    EProjectTechnology.UNREAL_ENGINE,
    EProjectTechnology.BLENDER,
    EProjectTechnology.FIGMA,
  ],
};

export const projectDronData: IProjectData = {
  thumbnail: projectDronThumbnail,
  name: "Project Dron",
  startDate: new Date("10-02-2022"),
  endDate: ELastProjectState.PAUSED,
  platforms: [EProjectPlatform.PC],
  technologies: [
    EProjectTechnology.UNREAL_ENGINE,
    EProjectTechnology.BLENDER,
    EProjectTechnology.FIGMA,
  ],
};

export const webPortfolioProjectData: IProjectData = {
  thumbnail: WebPortfolioThumbnail,
  name: "Web Portfolio",
  startDate: new Date("09-30-2024"),
  endDate: ELastProjectState.IN_PROGRESS,
  platforms: [EProjectPlatform.WEB],
  technologies: [
    EProjectTechnology.React,
    EProjectTechnology.TAILWINDCSS,
    EProjectTechnology.TYPESCRIPT,
    EProjectTechnology.GIT,
    EProjectTechnology.GITBHUB,
    EProjectTechnology.FIGMA,
    EProjectTechnology.CSS,
    EProjectTechnology.HTML,
    EProjectTechnology.JAVASCRIPT,
  ],
};

export const ticketSellingWebProjectData: IProjectData = {
  thumbnail: WebPortfolioThumbnail,
  name: "Ticket Selling Web App",
  startDate: new Date("02-27-2023"),
  endDate: new Date("03-20-2024"),
  platforms: [EProjectPlatform.WEB],
  technologies: [
    EProjectTechnology.React,
    EProjectTechnology.PRISMA,
    EProjectTechnology.GRAPHQL,
    EProjectTechnology.TAILWINDCSS,
    EProjectTechnology.TYPESCRIPT,
    EProjectTechnology.MYSQL,
    EProjectTechnology.FIGMA,
  ],
};

export const accountingWebAppProjectData: IProjectData = {
  thumbnail: WebPortfolioThumbnail,
  name: "Accounting Web App",
  startDate: new Date("09-07-2022"),
  endDate: ELastProjectState.IN_PROGRESS,
  platforms: [EProjectPlatform.WEB],
  technologies: [
    EProjectTechnology.React,
    EProjectTechnology.PRISMA,
    EProjectTechnology.GRAPHQL,
    EProjectTechnology.MATERIALUI,
    EProjectTechnology.MYSQL,
    EProjectTechnology.FIGMA,
  ],
};

export const virtualTryOnProjectData: IProjectData = {
  thumbnail: WebPortfolioThumbnail,
  name: "Virtual Try-on Web App Prototype",
  startDate: new Date("09-09-2024"),
  endDate: new Date("09-23-2024"),
  platforms: [EProjectPlatform.WEB],
  technologies: [
    EProjectTechnology.React,
    EProjectTechnology.THREEJS,
    EProjectTechnology.MEDIAPIPE,
    EProjectTechnology.TENSORFLOW,
    EProjectTechnology.FIGMA,
  ],
};

export const personalProjects = [
  projectBattlefieldData,
  projectMomentumData,
  projectArenaData,
  projectDronData,
  webPortfolioProjectData,
];

export const professionalProjects = [
  ticketSellingWebProjectData,
  accountingWebAppProjectData,
  virtualTryOnProjectData,
];
