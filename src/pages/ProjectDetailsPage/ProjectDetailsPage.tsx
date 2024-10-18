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

  return (
    <div className="space-y-8">
      <Text type={ETextType.H3}>{projectName}</Text>
      <div className="space-y-8 lg:space-y-0 lg:space-x-8 lg:flex">
        <div className="max-h-full overflow-clip space-y-8 md:px-12 lg:px-0 lg:w-1/2">
          {mediaContent && <MediaGallery mediaContent={mediaContent} />}
        </div>
        <div className="space-y-4 overflow-clip flex flex-col lg:w-1/2">
          <div className="space-y-8">
            {descriptions && (
              <div className="space-y-3 flex flex-col">
                <Text type={ETextType.H6}>Description</Text>
                {descriptions.map((description, index) => (
                  <Text key={`desc-${index}`} type={ETextType.T3}>
                    {description}
                  </Text>
                ))}
              </div>
            )}
            {technologies && (
              <TitledComponent
                titleAttributes={{ title: "Technologies", type: ETextType.H6 }}
              >
                <Carousel>
                  {technologies.map((technology, index) => (
                    <Button
                      key={`${technology}-${index}`}
                      type={EButtonType.OUTLINE}
                    >
                      <Text type={ETextType.T3}>{technology}</Text>
                    </Button>
                  ))}
                </Carousel>
              </TitledComponent>
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
          </div>
          <div className="flex-grow flex flex-col justify-end">
            {projectLinks && <ProjectLinks links={projectLinks} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailsPage;
