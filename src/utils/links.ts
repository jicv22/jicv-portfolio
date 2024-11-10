export const openLinkInNewTab = (url: string) => {
  window.open(url);
};

export const getYouTubeIdFromUrl = (videoUrl: string) => {
  const videoParts = videoUrl.split(/embed\/|\?si=/);
  const youTubeId = videoParts[1];
  return youTubeId;
};

export const getYouTubeVideoThumbnailById = (youTubeId: string) =>
  `https://img.youtube.com/vi/${youTubeId}/default.jpg`;

export const getYouTubeVideoThumbnailFromUrl = (url: string) =>
  `https://img.youtube.com/vi/${getYouTubeIdFromUrl(url)}/default.jpg`;
