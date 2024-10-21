import { getCloudinaryImageUrl } from "../../utils/cloudinary";
import { gitHubURL, linkedInURL } from "./variables";

const openNewTab = (url: string) => {
  window.open(url);
};

export function openLinkedIn() {
  openNewTab(linkedInURL);
}
export function openGitHub() {
  openNewTab(gitHubURL);
}

export function openCV() {
  const publicId = "CV_-_Game_Dev_blmun6";

  const cvUrl = getCloudinaryImageUrl(`${__CV__}/${publicId}`);

  console.log("Debug - cvUrl", cvUrl);
  console.log("Debug - __APP_ENV__", __APP_ENV__);
  console.log("Debug - import.meta.env.VITE_DOCUMENTS", import.meta.env.VITE_DOCUMENTS);

  if (!cvUrl) return;

  openNewTab(cvUrl);
}
