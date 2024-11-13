import { getCloudinaryImageUrl } from "../../utils/cloudinary";
import { getEnvVariable } from "../../utils/environment";
import { openLinkInNewTab } from "../../utils/links";
import { gitHubURL, linkedInURL } from "./variables";

export function openLinkedIn() {
  openLinkInNewTab(linkedInURL);
}
export function openGitHub() {
  openLinkInNewTab(gitHubURL);
}

export function openCV() {
  const publicId = "CV_Jose_Isaac_Cambronero_Valverde";

  const cvUrl = getCloudinaryImageUrl(
    `${getEnvVariable("CV_DIR")}/${publicId}`
  );

  if (!cvUrl) return;

  openLinkInNewTab(cvUrl);
}
