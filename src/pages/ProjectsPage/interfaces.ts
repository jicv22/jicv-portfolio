export enum EProjectPlatform {
  PC = "PC",
  PS5 = "PS5",
  PS4 = "PS4",
  PS3 = "PS3",
  XBOXSX = "XBOX Series X",
  XBOXSS = "XBOX Series S",
  NITENTO_SWITCH = "Nintendo Switch",
  WEB = "Web",
}

export enum EProjectTechnology {
  CPP = "C++",
  HTML = "HTML",
  TYPESCRIPT = "TypeScript",
  JAVASCRIPT = "JavaScript",
  React = "React",
  CSS = "CSS",
  TAILWINDCSS = "Tailwind CSS",
  MATERIALUI = "Material UI",
  NODEJS = "Node.JS",
  THREEJS = "Three.JS",
  GRAPHQL = "GraphQL",
  PRISMA = "Prisma",
  MYSQL = "MySQL",
  GIT = "Git",
  GITBHUB = "GitHub",
  LINUX = "Linux",
  ATOMIC_DESIGN = " Atomic Design",
  MEDIAPIPE = "MediaPipe",
  TENSORFLOW = "Tensorflow",
  FIREBASE = "Firebase",

  FIGMA = "Figma",
  BLENDER = "Blender",
  PHOTOSHOP = "Photoshop",
  REAPER = "Reaper",

  JIRA = "Jira",
  CLICKUP = "ClickUp",
  NOTION = "Notion",

  UNREAL_ENGINE = "Unreal Engine",
}

export enum ELastProjectState {
  IN_PROGRESS = "In Progress",
  PAUSED = "Paused",
  CANCELED = "Canceled",
  ABANDONED = "Abandoned",
}

export interface IProjectData {
  thumbnail?: string;
  name: string;
  startDate: Date;
  endDate: Date | ELastProjectState;
  platforms?: EProjectPlatform[];
  technologies?: EProjectTechnology[];
  descriptions?: string[];
  keyFeatures?: string[];
  contributions?: string[];
  links?: ILinks;
  mediaContent?: IMediaContentType[];
}

export interface IMediaContentType {
  url: string;
  type: EMediaContentType;
}

export enum EMediaContentType {
  IMAGE = "img",
  Video = "vid",
}

export interface ILinks {
  download?: string;
  gitHub?: string;
  webPage?: string;
}
