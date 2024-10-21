/* export const isLocalEnv = !__APP_ENV__;

type TEnvVarKeys = keyof typeof envVars;
export const getEnvVariable = (varName: TEnvVarKeys) => {
  if (!envVars[varName]) {
    console.error(`Invalid Request`);
    return null;
  }
  if (isLocalEnv) return import.meta.env[envVars[varName].localValue];
  return envVars[varName].productionValue;
};

const envVars = {
  CV_DIR: {
    localValue: "VITE_CV_DIR",
    productionValue: __CV_DIR__,
  },
  PROJECT_ARENA_IMAGES_DIR: {
    localValue: "VITE_PROJECT_ARENA_IMAGES_DIR",
    productionValue: __PROJECT_ARENA_IMAGES_DIR__,
  },
  PROJECT_BATTLEFIELD_IMAGES_DIR: {
    localValue: "VITE_PROJECT_BATTLEFIELD_IMAGES_DIR",
    productionValue: __PROJECT_BATTLEFIELD_IMAGES_DIR__,
  },
  PROJECT_DRON_IMAGES_DIR: {
    localValue: "VITE_PROJECT_DRON_IMAGES_DIR",
    productionValue: __PROJECT_DRON_IMAGES_DIR__,
  },
  PROJECT_MOMENTUM_IMAGES_DIR: {
    localValue: "VITE_PROJECT_MOMENTUM_IMAGES_DIR",
    productionValue: __PROJECT_MOMENTUM_IMAGES_DIR__,
  },
  DIGITAL_PORTFOLIO_IMAGES_DIR: {
    localValue: "VITE_DIGITAL_PORTFOLIO_IMAGES_DIR",
    productionValue: __DIGITAL_PORTFOLIO_IMAGES_DIR__,
  },
};
 */