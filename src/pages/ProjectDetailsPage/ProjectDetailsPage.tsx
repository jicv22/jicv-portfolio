import { Button, EButtonType, ETextType, Text } from "../../atoms";
import { Carousel, ProjectLinks, TitledComponent } from "../../molecules";
import { MediaGallery, TitledList } from "../../organisms";
import { IProjectDetailsPageParam } from "./interaces";

function ProjectDetailsPage({ projectData }: IProjectDetailsPageParam) {
  const {
    descriptions,
    mediaContent,
    links: projectLinks,
    keyFeatures,
    contributions,
    technologies,
    name: projectName,
  } = projectData;

  const isMediaContent = mediaContent && mediaContent.length > 0;

  return (
    <div className="flex flex-col space-y-1 md:space-y-2 xl:space-y-4 2xl:space-y-8">
      {isMediaContent && (
        <div className="w-8/12 m-auto">
          <MediaGallery mediaContent={mediaContent} />
        </div>
      )}
      <TitledComponent
        titleAttributes={{ title: projectName, type: ETextType.H3 }}
      >
        {descriptions && (
          <div className="flex flex-col space-y-2">
            {descriptions.map((description, index) => (
              <Text key={`desc-${index}`} type={ETextType.T3}>
                {description}
              </Text>
            ))}
          </div>
        )}
      </TitledComponent>
      {technologies && (
        <Carousel>
          {technologies.map((technology, index) => (
            <Button key={`${technology}-${index}`} type={EButtonType.OUTLINE}>
              <Text type={ETextType.T3}>{technology}</Text>
            </Button>
          ))}
        </Carousel>
      )}
      {keyFeatures && (
        <TitledList title="Key Features">
          {keyFeatures.map((child, index) => (
            <Text key={`fki-${index}`} type={ETextType.T3}>
              {child?.toString() || ""}
            </Text>
          ))}
        </TitledList>
      )}
      {contributions && (
        <TitledList title="Contributions">
          {contributions.map((child, index) => (
            <Text key={`cbi-${index}`} type={ETextType.T3}>
              {child?.toString() || ""}
            </Text>
          ))}
        </TitledList>
      )}
      {projectLinks && <ProjectLinks links={projectLinks} />}
    </div>
  );
}

export default ProjectDetailsPage;
