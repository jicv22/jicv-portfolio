export function getBluredSpheresPosition(isTopRight: boolean) {
  return isTopRight
    ? {
        upperSphere: "-bottom-48 -left-48",
        lowerSphere: "-top-48 -right-48",
      }
    : {
        upperSphere: "-top-48 -left-48",
        lowerSphere: "-bottom-48 -right-48",
      };
}
