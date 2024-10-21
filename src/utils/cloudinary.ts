import { Cloudinary } from "@cloudinary/url-gen";
import { getEnvVariable } from "./environment";

const cloudinary = new Cloudinary({
  cloud: {
    cloudName: getEnvVariable("CLOUD_NAME"),
  },
});

export const getCloudinary = () => cloudinary;

export const getCloudinaryImageUrl = (publicId: string): string | null => {
  try {
    return getCloudinary().image(publicId).toURL();
  } catch {
    console.error("Error getting the url");
    return null;
  }
};
