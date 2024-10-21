import { Cloudinary } from "@cloudinary/url-gen";

const cloudinary = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUD_NAME,
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
