import React from "react";
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
    <div className="flex flex-col gap-4 md:gap-2 xl:gap-4 2xl:gap-8">
      {hasValidContent(mediaContent) && (
        <div className="m-auto w-full sm:w-11/12 md:w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12">
          <MediaGallery mediaContent={mediaContent} />
        </div>
      )}
      <Text type={ETextType.H4}>{projectName}</Text>
      <div>
        {descriptions &&
          descriptions.map((description) => (
            <React.Fragment>
              <Text key={description} type={ETextType.T4}>
                {description}
              </Text>
              <br />
            </React.Fragment>
          ))}
      </div>
      {technologies && (
        <Carousel>
          {technologies.map((technology) => (
            <Button key={`${technology}`} type={EButtonType.OUTLINE}>
              <Text type={ETextType.T4}>{technology}</Text>
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
              <Button key={platform}>
                <Text type={ETextType.T4}>{platform}</Text>
              </Button>
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
