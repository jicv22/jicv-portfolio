import { Button, EButtonType, ETextType, Text } from "../../atoms";
import {
  Carousel,
  NestedInfoList,
  ProjectLinks,
  TitledComponent,
} from "../../molecules";
import { MediaGallery } from "../../organisms";
import { hasValidContent } from "../../utils/arrays";
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
    platforms,
  } = projectData;

  return (
    <div className="flex flex-col space-y-1 md:space-y-2 xl:space-y-4 2xl:space-y-8">
      {hasValidContent(mediaContent) && (
        <div className="m-auto w-full sm:w-11/12 md:w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12">
          <MediaGallery mediaContent={mediaContent} />
        </div>
      )}
      <TitledComponent
        titleAttributes={{ title: projectName, type: ETextType.H3 }}
      >
        {descriptions && (
          <div className="flex flex-col space-y-2">
            {descriptions.map((description) => (
              <Text key={description} type={ETextType.T3}>
                {description}
              </Text>
            ))}
          </div>
        )}
      </TitledComponent>
      {technologies && (
        <Carousel>
          {technologies.map((technology) => (
            <Button key={`${technology}`} type={EButtonType.OUTLINE}>
              <Text type={ETextType.T3}>{technology}</Text>
            </Button>
          ))}
        </Carousel>
      )}
      {platforms && (
        <TitledComponent
          titleAttributes={{
            title: platforms.length > 1 ? "Platforms" : "Platform",
          }}
        >
          <Carousel>
            {platforms.map((platform) => (
              <Button key={platform}>{platform}</Button>
            ))}
          </Carousel>
        </TitledComponent>
      )}
      {hasValidContent(keyFeatures) && (
        <TitledComponent
          titleAttributes={{
            title: "Key Features",
          }}
        >
          <NestedInfoList nestedInfo={keyFeatures} />
        </TitledComponent>
      )}
      {hasValidContent(contributions) && (
        <TitledComponent
          titleAttributes={{
            title: "Contributions",
          }}
        >
          <NestedInfoList nestedInfo={contributions} />
        </TitledComponent>
      )}
      {projectLinks && <ProjectLinks links={projectLinks} />}
    </div>
  );
}

export default ProjectDetailsPage;
