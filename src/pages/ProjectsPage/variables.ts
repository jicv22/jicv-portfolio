import {
  ELastProjectState,
  EMediaContentType,
  EProjectPlatform,
  EProjectTechnology,
  IMediaContentType,
  IProjectData,
} from "./interfaces";
import { getCloudinaryImageUrl } from "../../utils/cloudinary";
import { getEnvVariable } from "../../utils/environment";

const projectMomentumA =
  getCloudinaryImageUrl(
    `${getEnvVariable("PROJECT_MOMENTUM_IMAGES_DIR")}/ProjectBally_lw0lvq`
  ) || "";

const projectDronA =
  getCloudinaryImageUrl(
    `${getEnvVariable("PROJECT_DRON_IMAGES_DIR")}/ProjectDron_-_Drony_lyyect`
  ) || "";
const projectDronB =
  getCloudinaryImageUrl(
    `${getEnvVariable("PROJECT_DRON_IMAGES_DIR")}/ProjectDron_-_Dronky3_dmsozu`
  ) || "";
const projectDronC =
  getCloudinaryImageUrl(
    `${getEnvVariable(
      "PROJECT_DRON_IMAGES_DIR"
    )}/ProjectDron_-_Dronky4Red_a0b4ux`
  ) || "";
const projectDronD =
  getCloudinaryImageUrl(
    `${getEnvVariable("PROJECT_DRON_IMAGES_DIR")}/ProjectDron_-_Dronky2_tdzj3u`
  ) || "";
const projectDronE =
  getCloudinaryImageUrl(
    `${getEnvVariable("PROJECT_DRON_IMAGES_DIR")}/ProjectDron_frar2e`
  ) || "";

const projectBattlefieldA =
  getCloudinaryImageUrl(
    `${getEnvVariable(
      "PROJECT_BATTLEFIELD_IMAGES_DIR"
    )}/ProjectBattlefield_ratt3x`
  ) || "";

const projectArenaA =
  getCloudinaryImageUrl(
    `${getEnvVariable(
      "PROJECT_ARENA_IMAGES_DIR"
    )}/ProjectArena_-_TripleLeg_apqavg`
  ) || "";

const WebPortfolioA =
  getCloudinaryImageUrl(
    `${getEnvVariable("DIGITAL_PORTFOLIO_IMAGES_DIR")}/WebPortfolio_urszlz`
  ) || "";

const projectMomentumMediaContent: IMediaContentType[] = [
  {
    type: EMediaContentType.IMAGE,
    url: projectMomentumA,
  },
  {
    type: EMediaContentType.VIDEO,
    url: "https://www.youtube.com/embed/YFIA0XQq4OQ?si=83Lc_ziXhQlZpabu",
  },
];

const projectBattlefieldMediaContent: IMediaContentType[] = [
  { type: EMediaContentType.IMAGE, url: projectBattlefieldA },
  {
    type: EMediaContentType.VIDEO,
    url: "https://www.youtube.com/embed/5zxxRw8czxM?si=8AQBlk7kiUb5XGPq",
  },
];

const projectArenaMediaContent: IMediaContentType[] = [
  { type: EMediaContentType.IMAGE, url: projectArenaA },
  {
    type: EMediaContentType.VIDEO,
    url: "https://www.youtube.com/embed/brBREgyXDYA?si=Expnq7aUlCOe8RqR",
  },
];

const ProjectDronMediaContent: IMediaContentType[] = [
  { type: EMediaContentType.IMAGE, url: projectDronA },
  { type: EMediaContentType.IMAGE, url: projectDronB },
  { type: EMediaContentType.IMAGE, url: projectDronC },
  { type: EMediaContentType.IMAGE, url: projectDronD },
  { type: EMediaContentType.IMAGE, url: projectDronE },
  {
    type: EMediaContentType.VIDEO,
    url: "https://www.youtube.com/embed/67cm3S2esJc?si=MrSE5JKIUqxt0rBH",
  },
];

export const projectMomentumData: IProjectData = {
  thumbnail: projectMomentumMediaContent[0].url,
  name: "Project Momentum",
  startDate: new Date("08-19-2024"),
  endDate: ELastProjectState.PAUSED,
  platforms: [EProjectPlatform.PC],
  technologies: [
    EProjectTechnology.UNREAL_ENGINE,
    EProjectTechnology.UE_BLUEPRINTS,
    EProjectTechnology.BLENDER,
    EProjectTechnology.FIGMA,
    EProjectTechnology.CLICKUP,
  ],
  descriptions: [
    "Project Momentum is a 3D platformer game currently in development, designed to appeal to a wide range of players through accessible yet challenging gameplay. In this title, players control a ball tasked with overcoming a series of thematic levels filled with obstacles, using both the environment and the unique properties of different types of balls.",
    "Each ball offers distinct characteristics such as varying bounce, weight, friction and more, allowing players to tailor their strategy based on the challenges of each stage. Additionally, the game introduces strategic power-ups that unlock new ways to solve puzzles and discover creative solutions to complete levels.",
    "With its blend of simple mechanics and strategic depth, Project Momentum delivers a dynamic experience that rewards both skill and experimentation, appealing to casual players and those seeking more elaborate challenges alike.",
  ],
  links: {
    gitHub: "https://github.com/jicv22/project-momentum",
  },
  mediaContent: projectMomentumMediaContent,
  contributions: [
    {
      info: "Game Mechanics Programming",
      childInfo: [
        {
          info: "Developed throwing and collision functions, ensuring precise interactions between the player and environmental elements.",
        },
      ],
    },
    {
      info: "Game Physics Implementation",
      childInfo: [
        {
          info: "Programmed the physics that determine the behavior of different types of balls, including characteristics such as bounce, weight, and friction, to provide a dynamic gameplay experience.",
        },
      ],
    },
    {
      info: "Power-up Development",
      childInfo: [
        {
          info: "Created basic power-ups that enable players to unlock new abilities and strategies, enhancing gameplay and puzzle-solving for when the game is completed in the future.",
        },
      ],
    },
  ],
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
    "Project Battlefield is a 3D third-person video game that offers an immersive experience in a post-apocalyptic world where robots are the last remaining civilization on Earth. The game is designed to present wave-based battles across various thematic levels, each with its own atmosphere and challenges to represent parts of the history and the lore in this world.",
    "Through a simple yet thought-provoking narrative, Project Battlefield invites players to reflect on human essence, fear, perception of the world based on personal identity, and the importance of camaraderie in adversity.",
    "The game combines classic third-person shooter action with a mechanic that allows players to possess and control their enemies, leveraging their abilities to advance in combat. As players progress, they can enhance the characteristics of the robots they have captured and utilize strategic power-ups that add dynamism to the gameplay.",
    "With its focus on action and reflection, Project Battlefield promises to deliver a unique experience that challenges both players' skills and their understanding of humanity in a technology-dominated world.",
  ],
  links: {
    gitHub: "https://github.com/jicv22/project-battlefield  ",
  },
  mediaContent: projectBattlefieldMediaContent,
  contributions: [
    {
      info: "Game Mechanics Development",
      childInfo: [
        {
          info: "Programmed the enemy possession system, as well as movement and shooting systems, ensuring smooth and dynamic gameplay.",
        },
      ],
    },
    {
      info: "Interactions and Level Design",
      childInfo: [
        {
          info: "Implemented basic interactions between ammunition and environmental objects and designed test levels to assess mobility and game mechanics.",
        },
      ],
    },
    {
      info: "Narrative and Characters",
      childInfo: [
        {
          info: "Developed the game's story and created character profiles and statistics, ensuring balance and diversity in playable abilities.",
        },
      ],
    },
    {
      info: "Concept Art Planning",
      childInfo: [
        {
          info: "Carried out initial planning for experimental concept art in levels and characters, establishing a solid foundation for future visual developments.",
        },
      ],
    },
  ],
};

export const projectArenaData: IProjectData = {
  thumbnail: projectArenaMediaContent[0].url,
  name: "Project Arena",
  startDate: new Date("09-29-2023"),
  endDate: ELastProjectState.CANCELED,
  platforms: [EProjectPlatform.PC],
  mediaContent: projectArenaMediaContent,
  technologies: [
    EProjectTechnology.UNREAL_ENGINE,
    EProjectTechnology.UE_BLUEPRINTS,
    EProjectTechnology.BLENDER,
    EProjectTechnology.FIGMA,
  ],
  descriptions: [
    "Project Arena is a 3D third-person video game designed for players to face waves of enemies trying to eliminate them. With a shoulder-mounted view, the main objective is to overcome challenging levels where players must demonstrate their combat skills against robots.",
    "Although Project Arena did not have a deep narrative, its focus was on action and gameplay. This project was conceived primarily as a learning opportunity, allowing for the exploration and application of various gameplay, animation, and artificial intelligence concepts.",
    "Although Project Arena was ultimately canceled, the ideas and insights gained during its development have been integrated into Project Battlefield, ensuring that the learning experience contributes to a more ambitious project.",
  ],
  contributions: [
    {
      info: "Programming",
      childInfo: [
        {
          info: "Created procedural animations using Inverse Kinematics to dynamically position character legs.",
        },
        {
          info: "Developed state machines for the locomotion system, enabling the character to execute appropriate walk, jump or other animations based on the current context.",
        },
      ],
    },
    {
      info: "AI",
      childInfo: [
        {
          info: "Programmed a basic navigation AI capable of traversing elements of varying heights using a Behavior Tree.",
        },
      ],
    },
    {
      info: "3D Modeling",
      childInfo: [
        {
          info: "Designed and modeled the test character from scratch using Blender.",
        },
        {
          info: "Textured the character with a combination of hand-painted and procedural techniques in Blender and Substance Painter.",
        },
      ],
    },
    {
      info: "Rigging",
      childInfo: [
        {
          info: "Rigged the complete character in Blender, incorporating inverse kinematics to streamline the animation process.",
        },
      ],
    },
    {
      info: "Animation",
      childInfo: [
        {
          info: "Developed core locomotion animations, including:",
          childInfo: [
            { info: "Idle" },
            {
              info: "Walk:",
              childInfo: [
                {
                  info: "Initiation with left or right leg",
                },
                {
                  info: "Loop",
                },
                {
                  info: "End with left or right leg",
                },
              ],
            },
            {
              info: "Turn-around:",
              childInfo: [{ info: "Basic left and right rotation on-site" }],
            },
            {
              info: "Jump:",
              childInfo: [
                {
                  info: "Start (from standstill or while moving)",
                },
                {
                  info: "Falling loop",
                },
                {
                  info: "Landing (while stationary or in motion)",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const projectDronData: IProjectData = {
  // TODO: Add contributions
  thumbnail: ProjectDronMediaContent[0].url,
  name: "Project Dron",
  startDate: new Date("10-02-2022"),
  endDate: ELastProjectState.CANCELED,
  platforms: [EProjectPlatform.PC],
  mediaContent: ProjectDronMediaContent,
  technologies: [
    EProjectTechnology.UNREAL_ENGINE,
    EProjectTechnology.UE_BLUEPRINTS,
    EProjectTechnology.BLENDER,
    EProjectTechnology.FIGMA,
  ],
  descriptions: [
    "Project Dron is a 3D third-person video game conceived as a learning exercise in the development of combat and animation mechanics. With a shoulder-mounted view, players must face enemies across various levels, focusing on shooting action.",
    "Although Project Dron did not have a specific narrative, its main objective was to explore and apply fundamental concepts in game development, including: Animation systems, Shooting mechanics, Artificial intelligence.",
    "This project provided a valuable opportunity to gain knowledge in key areas of game development, even though it was ultimately canceled. However, the lessons learned during its creation have been instrumental in the growth of subsequent projects, such as Project Battlefield.",
  ],
  contributions: [
    {
      info: "3D Modeling and Art",
      childInfo: [
        {
          info: "Created characters and environment models using Blender.",
        },
        {
          info: "Developed detailed textures and optimized materials using Blender.",
        },
        {
          info: "Fully rigged the characters using Blender.",
        },
      ],
    },
    {
      info: "Animation",
      childInfo: [
        {
          info: "Designed detailed animations for various actions (idle, walking, running, jumping, etc.), covering each action's full cycle (start, loop, end) using Blender",
        },
        {
          info: "Built an advanced locomotion system using Unreal Engine's State Machines, enabling smooth transitions between different movement animations.",
        },
        {
          info: "Developed a procedural aiming system based on interpolations between specific animations, allowing for realistic and flexible targeting adapted to preset values using blender and Unreal Engine's Blend Spaces",
        },
      ],
    },
    {
      info: "AI and Navigation",
      childInfo: [
        {
          info: "Created an offensive AI system for enemies using Behavior Trees, allowing complex and adaptive behavior patterns.",
        },
        {
          info: "Implemented a navigation system enabling enemies to move fluidly and realistically in the environment, anticipating and reacting to player movements.",
        },
      ],
    },
    {
      info: "Gameplay Mechanics Programming",
      childInfo: [
        {
          info: "Programmed the shooting and aiming system using blueprints, state machines and blend spaces",
        },
      ],
    },
  ],
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
  links: {
    webPage: "https://jicv-portfolio.vercel.app/",
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
  contributions: [
    {
      info: "Managed and optimized the MySQL database to ensure efficient handling of events and transactions.",
    },
    {
      info: "Developed and enhanced the backend (using Apollo Server, GraphQL, Prisma and Node.js), ensuring system stability and performance.",
    },
    {
      info: "Implemented a first secure payment gateway version (using tilopay), enabling both physical and online purchases.",
    },
    {
      info: "Contributed to the frontend development (using React, Tailwind CSS and Apollo Client) from scratch and continuously updated it, teaching and closely collaborating with new team members who joined during the project.",
    },
  ],
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
    "This project involves the development of an accounting web application that facilitates the financial management of companies and/or businesses.",
    "Due to the confidential nature of the project, no further details can be provided. However, it represents a significant step forward in developing efficient solutions in the accounting field.",
  ],
  contributions: [
    {
      info: "Enhanced multiple backend areas (using Apollo Server/GraphQL, Knex.js/Bookshelf.js, and Firebase) and frontend components (using React, MUI, Bulma CSS, Apollo Client, and Firebase), optimizing performance, strengthening security, and elevating the user experience (UX).",
    },
    {
      info: "Redesigned the MySQL database structure and implemented new procedures to ensure data integrity, streamline operations, and support system scalability.",
    },
    {
      info: "Collaborated closely with designers and other stakeholders to align the platform's functionality with user needs and business goals.",
    },
  ],
};

export const virtualTryOnProjectData: IProjectData = {
  thumbnail: WebPortfolioA,
  name: "Virtual Try-on Web App Prototype",
  startDate: new Date("09-09-2024"),
  endDate: ELastProjectState.CANCELED,
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
  contributions: [
    {
      info: "Pioneering Research",
      childInfo: [
        {
          info: "Conducted ground-up research in AI and 3D technology, being the first person to explore these fields within the company.",
        },
      ],
    },
    {
      info: "Implementation of Advanced Models",
      childInfo: [
        {
          info: "Integrated machine learning and deep learning models through frameworks such as MediaPipe and Tensorflow for accurate real-time detection of faces and bodies in video streams.",
        },
      ],
    },
    {
      info: "Creation of 3D Models",
      childInfo: [
        {
          info: "Designed and tested 3D models to validate overlay technologies when using Three.js, allowing users to visualize accessories on their own image through the camera.",
        },
      ],
    },
    {
      info: "End-to-End Prototype Development",
      childInfo: [
        {
          info: "Managed all phases of the prototype, from conceptualization to implementation, ensuring a seamless interactive experience that represents an innovative breakthrough in e-commerce.",
        },
      ],
    },
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
