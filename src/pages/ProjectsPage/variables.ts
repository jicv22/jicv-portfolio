import {
  ELastProjectState,
  EMediaContentType,
  EProjectPlatform,
  EProjectTechnology,
  IMediaContentType,
  IProjectData,
} from "./interfaces";
import { getCloudinaryImageUrl } from "../../utils/cloudinary";

const projectMomentumA =
  getCloudinaryImageUrl(
    `${import.meta.env.VITE_PROJECT_MOMENTUM_DIR}/ProjectBally_lw0lvq`
  ) || "";

const projectDronA =
  getCloudinaryImageUrl(
    `${import.meta.env.VITE_PROJECT_DRON_DIR}/ProjectDron_-_Drony_lyyect`
  ) || "";
const projectDronB =
  getCloudinaryImageUrl(
    `${import.meta.env.VITE_PROJECT_DRON_DIR}/ProjectDron_-_Dronky3_dmsozu`
  ) || "";
const projectDronC =
  getCloudinaryImageUrl(
    `${import.meta.env.VITE_PROJECT_DRON_DIR}/ProjectDron_-_Dronky4Red_a0b4ux`
  ) || "";
const projectDronD =
  getCloudinaryImageUrl(
    `${import.meta.env.VITE_PROJECT_DRON_DIR}/ProjectDron_-_Dronky2_tdzj3u`
  ) || "";
const projectDronE =
  getCloudinaryImageUrl(
    `${import.meta.env.VITE_PROJECT_DRON_DIR}/ProjectDron_frar2e`
  ) || "";

const projectBattlefieldA =
  getCloudinaryImageUrl(
    `${import.meta.env.VITE_PROJECT_BATTLEFIELD_DIR}/ProjectBattlefield_ratt3x`
  ) || "";

const projectArenaA =
  getCloudinaryImageUrl(
    `${import.meta.env.VITE_PROJECT_ARENA_DIR}/ProjectArena_-_TripleLeg_apqavg`
  ) || "";

const WebPortfolioA =
  getCloudinaryImageUrl(
    `${import.meta.env.VITE_DIGITAL_PORTFOLIO_DIR}/WebPortfolio_urszlz`
  ) || "";

console.log("G => ", getCloudinaryImageUrl(projectMomentumA));
console.log("H => ", getCloudinaryImageUrl(projectDronA));
console.log("I => ", getCloudinaryImageUrl(projectBattlefieldA));
console.log("J => ", getCloudinaryImageUrl(projectArenaA));
console.log("K => ", getCloudinaryImageUrl(WebPortfolioA));

const projectMomentumMediaContent: IMediaContentType[] = [
  {
    type: EMediaContentType.IMAGE,
    url: projectMomentumA,
  },
  { type: EMediaContentType.IMAGE, url: projectMomentumA },
];

const projectBattlefieldMediaContent: IMediaContentType[] = [
  { type: EMediaContentType.IMAGE, url: projectBattlefieldA },
];

const projectArenaMediaContent: IMediaContentType[] = [
  { type: EMediaContentType.IMAGE, url: projectArenaA },
];

const ProjectDronMediaContent: IMediaContentType[] = [
  { type: EMediaContentType.IMAGE, url: projectDronA },
  { type: EMediaContentType.IMAGE, url: projectDronB },
  { type: EMediaContentType.IMAGE, url: projectDronC },
  { type: EMediaContentType.IMAGE, url: projectDronD },
  { type: EMediaContentType.IMAGE, url: projectDronE },
  // { type: EMediaContentType.Video, url: "https://youtu.be/67cm3S2esJc" }, // TODO: Implement a proper way to reference videos' links
];

export const projectMomentumData: IProjectData = {
  thumbnail: projectMomentumMediaContent[0].url,
  name: "Project Momentum",
  startDate: new Date("08-19-2024"),
  endDate: ELastProjectState.IN_PROGRESS,
  platforms: [EProjectPlatform.PC],
  technologies: [
    EProjectTechnology.UNREAL_ENGINE,
    EProjectTechnology.BLENDER,
    EProjectTechnology.FIGMA,
    EProjectTechnology.CLICKUP,
  ],
  descriptions: [
    "Project Momentum is a 3D platformer game currently in development, designed to appeal to a wide range of players through accessible yet challenging gameplay. In this title, players control a ball tasked with overcoming a series of thematic levels filled with obstacles, using both the environment and the unique properties of different types of balls.",
    "Each ball offers distinct characteristics such as varying bounce, weight, friction and more, allowing players to tailor their strategy based on the challenges of each stage. Additionally, the game introduces strategic power-ups that unlock new ways to solve puzzles and discover creative solutions to complete levels.",
    "With its blend of simple mechanics and strategic depth, Project Momentum delivers a dynamic experience that rewards both skill and experimentation, appealing to casual players and those seeking more elaborate challenges alike.",
  ],
  keyFeatures: [
    "asd",
    "zxczxczxc",
    "as dasd asd",
    "1sd12 asd   123",
    "asdazc v v v v",
  ],
  contributions: ["asdasdad", "cna lkn ", "a xca"],
  links: {
    gitHub: "https://github.com/jicv22/project-momentum",
  },
  mediaContent: projectMomentumMediaContent,
};

export const projectBattlefieldData: IProjectData = {
  thumbnail: projectBattlefieldMediaContent[0].url,
  name: "Project Battlefield",
  startDate: new Date("02-01-2024"),
  endDate: ELastProjectState.PAUSED,
  platforms: [EProjectPlatform.PC],
  technologies: [
    EProjectTechnology.CPP,
    EProjectTechnology.UNREAL_ENGINE,
    EProjectTechnology.BLENDER,
    EProjectTechnology.FIGMA,
    EProjectTechnology.JIRA,
  ],
  descriptions: [
    "Project Battlefield is a 3D third-person video game that offers an immersive experience in a post-apocalyptic world where robots are the last remaining civilization on Earth. The game is designed to present wave-based battles across various thematic levels, each with its own atmosphere and challenges.",
    "Through a simple yet thought-provoking narrative, Project Battlefield invites players to reflect on human essence, fear, perception of the world based on personal identity, and the importance of camaraderie in adversity.",
    "The game combines classic third-person shooter action with a mechanic that allows players to possess and control their enemies, leveraging their abilities to advance in combat. As players progress, they can enhance the characteristics of the robots they have captured and utilize strategic power-ups that add dynamism to the gameplay.",
    "With its focus on action and reflection, Project Battlefield promises to deliver a unique experience that challenges both players' skills and their understanding of humanity in a technology-dominated world.",
  ],
  keyFeatures: [
    "asd",
    "zxczxczxc",
    "as dasd asd",
    "1sd12 asd   123",
    "asdazc v v v v",
  ],
  contributions: ["asdasdad", "cna lkn ", "a xca"],
  links: {
    gitHub: "https://github.com/jicv22/project-battlefield  ",
  },
  mediaContent: projectBattlefieldMediaContent,
};

export const projectArenaData: IProjectData = {
  thumbnail: projectArenaMediaContent[0].url,
  name: "Project Arena",
  startDate: new Date("09-29-2023"),
  endDate: ELastProjectState.CANCELED,
  platforms: [EProjectPlatform.PC],
  technologies: [
    EProjectTechnology.CPP,
    EProjectTechnology.UNREAL_ENGINE,
    EProjectTechnology.BLENDER,
    EProjectTechnology.FIGMA,
  ],
  descriptions: [
    "Project Arena is a 3D third-person video game designed for players to face waves of enemies trying to eliminate them. With a shoulder-mounted view, the main objective is to overcome challenging levels where players must demonstrate their combat skills against robots.",
    "Although Project Arena did not have a deep narrative, its focus was on action and gameplay. This project was conceived primarily as a learning opportunity, allowing for the exploration and application of various gameplay, animation, and artificial intelligence concepts.",
    "Although Project Arena was ultimately canceled, the ideas and insights gained during its development have been integrated into Project Battlefield, ensuring that the learning experience contributes to a more ambitious project.",
  ],
  keyFeatures: [
    "asd",
    "zxczxczxc",
    "as dasd asd",
    "1sd12 asd   123",
    "asdazc v v v v",
  ],
  contributions: ["asdasdad", "cna lkn ", "a xca"],
  mediaContent: projectArenaMediaContent,
};

export const projectDronData: IProjectData = {
  thumbnail: ProjectDronMediaContent[0].url,
  name: "Project Dron",
  startDate: new Date("10-02-2022"),
  endDate: ELastProjectState.CANCELED,
  platforms: [EProjectPlatform.PC],
  technologies: [
    EProjectTechnology.UNREAL_ENGINE,
    EProjectTechnology.BLENDER,
    EProjectTechnology.FIGMA,
  ],
  descriptions: [
    "Project Dron is a 3D third-person video game conceived as a learning exercise in the development of combat and animation mechanics. With a shoulder-mounted view, players must face enemies across various levels, focusing on shooting action.",
    "Although Project Dron did not have a specific narrative, its main objective was to explore and apply fundamental concepts in game development, including: Animation systems, Shooting mechanics, Artificial intelligence.",
    "This project provided a valuable opportunity to gain knowledge in key areas of game development, even though it was ultimately canceled. However, the lessons learned during its creation have been instrumental in the growth of subsequent projects, such as Project Battlefield.",
  ],
  keyFeatures: [
    "asd",
    "zxczxczxc",
    "as dasd asd",
    "1sd12 asd   123",
    "asdazc v v v v",
  ],
  contributions: ["asdasdad", "cna lkn ", "a xca"],
  mediaContent: ProjectDronMediaContent,
};

export const webPortfolioProjectData: IProjectData = {
  thumbnail: WebPortfolioA,
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
  descriptions: [
    "This digital portfolio has been created to provide a comprehensive view of my professional and personal journey. The page is designed to highlight my knowledge and skills, as well as showcase a selection of projects across various areas, including: Professional Projects, Personal Projects, Academic Background/Studies, General Experience.",
    "This portfolio not only serves as a showcase of my work but also as a tool to connect with other professionals and potential employers, providing a platform where my skills and aspirations can be appreciated.",
  ],
  keyFeatures: [
    "asd",
    "zxczxczxc",
    "as dasd asd",
    "1sd12 asd   123",
    "asdazc v v v v",
  ],
  contributions: ["asdasdad", "cna lkn ", "a xca"],
  links: {
    webPage: "https://jicv22.github.io/jicv-portfolio/",
  },
};

export const ticketSellingWebProjectData: IProjectData = {
  thumbnail: WebPortfolioA,
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
  descriptions: [
    "This project involves the development of a web application for online ticket sales, designed to manage events of all types, from small gatherings to large festivals. The platform allows users to make both physical and online purchases, facilitating access to events for a wide audience.",
    "With a focus on usability and efficiency, the application aims to enhance the user experience by simplifying the purchasing process and providing management tools for event organizers, among other features.",
    "Due to the confidential nature of the project and the privacy of the company, further details regarding technical specifications or additional functionalities cannot be disclosed. However, this project represents a significant step in my development as a professional in the field of web programming.",
  ],
  keyFeatures: [
    "asd",
    "zxczxczxc",
    "as dasd asd",
    "1sd12 asd   123",
    "asdazc v v v v",
  ],
  contributions: ["asdasdad", "cna lkn ", "a xca"],
};

export const accountingWebAppProjectData: IProjectData = {
  thumbnail: WebPortfolioA,
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
  descriptions: [
    "Este proyecto implica el desarrollo de una aplicación web de contaduría que facilita la gestión financiera de las empresas y/o negocios.",
    "Debido a la naturaleza confidencial del proyecto, no se pueden proporcionar detalles adicionales. Sin embargo, representa un avance significativo en el desarrollo de soluciones eficientes en el ámbito contable.",
  ],
  keyFeatures: [
    "asd",
    "zxczxczxc",
    "as dasd asd",
    "1sd12 asd   123",
    "asdazc v v v v",
  ],
  contributions: ["asdasdad", "cna lkn ", "a xca"],
};

export const virtualTryOnProjectData: IProjectData = {
  thumbnail: WebPortfolioA,
  name: "Virtual Try-on Web App Prototype",
  startDate: new Date("09-09-2024"),
  endDate: ELastProjectState.PAUSED,
  platforms: [EProjectPlatform.WEB],
  technologies: [
    EProjectTechnology.React,
    EProjectTechnology.THREEJS,
    EProjectTechnology.MEDIAPIPE,
    EProjectTechnology.TENSORFLOW,
    EProjectTechnology.FIGMA,
  ],
  descriptions: [
    "This project involves the development of a 'virtual try-on' functionality prototype for a web application, allowing users to virtually try on different clothing items. The initial focus is on upper garments such as hats, glasses, earrings, helmets, and other accessories.",
    "Due to the confidential nature of the project, additional details cannot be disclosed. However, this prototype represents an innovative step towards enhancing the online shopping experience, providing users with an interactive way to visualize how items would look on them.",
  ],
  keyFeatures: [
    "asd",
    "zxczxczxc",
    "as dasd asd",
    "1sd12 asd   123",
    "asdazc v v v v",
  ],
  contributions: ["asdasdad", "cna lkn ", "a xca"],
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
