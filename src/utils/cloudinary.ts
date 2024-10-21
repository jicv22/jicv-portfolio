import { Cloudinary } from "@cloudinary/url-gen";
import { isLocalEnv } from "./environment";

type DirectoryKey = keyof typeof directories;

const cloudinary = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUD_NAME,
  },
});

const directories = {
  documents: {
    local: import.meta.env.VITE_DOCUMENTS,
    production: __DOCUMENTS_DIR__,
  },
  projectDron: {
    local: import.meta.env.VITE_PROJECT_DRON_DIR,
    production: __PROJECT_DRON_IMAGES_DIRECTORY__,
  },
  projectArena: {
    local: import.meta.env.VITE_PROJECT_ARENA_DIR,
    production: __PROJECT_ARENA_IMAGES_DIRECTORY__,
  },
  projectMomentum: {
    local: import.meta.env.VITE_PROJECT_MOMENTUM_DIR,
    production: __PROJECT_MOMENTUM_IMAGES_DIRECTORY__,
  },
  projectBattlefield: {
    local: import.meta.env.VITE_PROJECT_BATTLEFIELD_DIR,
    production: __PROJECT_BATTLEFIELD_IMAGES_DIRECTORY__,
  },
  digitalPortfolio: {
    local: import.meta.env.VITE_DIGITAL_PORTFOLIO_DIR,
    production: __DIGITAL_PORTFOLIO_IMAGES_DIRECTORY__,
  },
};

export const getCloudinary = () => cloudinary;

export const getCloudinaryImageUrl = (publicId: string): string | null => {
  try {
    return getCloudinary().image(publicId).toURL();
  } catch {
    console.error("Error getting the url");
    return null;
  }
};

export const getCloudinaryDirectory = (key: DirectoryKey) => {
  if (!directories[key]) {
    console.error(`Invalid directory key: ${key}`);
    return null;
  }
  return isLocalEnv ? directories[key].local : directories[key].production;
};
