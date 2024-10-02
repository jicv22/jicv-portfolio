export function getBluredSpheresPosition(isTopRight: boolean) {
  return isTopRight
    ? {
        upperSphere: "-bottom-32 -left-32",
        lowerSphere: "-top-32 -right-32",
      }
    : {
        upperSphere: "-top-32 -left-32",
        lowerSphere: "-bottom-32 -right-32",
      };
}
