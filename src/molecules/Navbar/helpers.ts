export const onButtonClicked = (
  sectionRef: React.RefObject<HTMLDivElement>
) => {
  sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
};
