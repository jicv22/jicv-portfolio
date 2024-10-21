import {
  getCloudinaryDirectory,
  getCloudinaryImageUrl,
} from "../../utils/cloudinary";
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

  const cvUrl = getCloudinaryImageUrl(
    `${getCloudinaryDirectory("documents")}/${publicId}`
  );

  if (!cvUrl) return;

  openNewTab(cvUrl);
}
