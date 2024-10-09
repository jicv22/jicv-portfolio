import { gitHubURL, linkedInURL } from "./variables";

export function openLinkedIn() {
  window.open(linkedInURL);
}
export function openGitHub() {
  window.open(gitHubURL);
}

export function handleDownload() {
  const apiKey = import.meta.env.VITE_MAIN_ROUTE_URL;
  const link = document.createElement("a");
  link.href = `${apiKey}/src/assets/docs/cv.pdf`;
  link.download = "CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
