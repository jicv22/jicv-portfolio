import { Button, EButtonType, ETextType, Text } from "../../atoms";
import { TitledCarousel } from "../../organisms";
import { Carousel } from "../../templates";
import { IProjectDetailsPageParam } from "./interaces";

function ProjectDetailsPage({ projectData }: IProjectDetailsPageParam) {
  return (
    <div className="space-y-8">
      <Text type={ETextType.H3}>{projectData.name}</Text>
      <div className="flex space-x-8">
        <div className="space-y-8 w-1/2">
          <img
            className="w-full aspect-[4/3] object-cover"
            src={projectData.thumbnail}
            alt="Project Image"
          />
          <Carousel>
            {[
              <img
                className="w-24  aspect-square object-cover"
                src={projectData.thumbnail}
                alt="Project Image"
              />,
              <img
                className="w-24  aspect-square object-cover"
                src={projectData.thumbnail}
                alt="Project Image"
              />,
              <img
                className="w-24  aspect-square object-cover"
                src={projectData.thumbnail}
                alt="Project Image"
              />,
              <img
                className="w-24  aspect-square object-cover"
                src={projectData.thumbnail}
                alt="Project Image"
              />,
              <img
                className="w-24  aspect-square object-cover"
                src={projectData.thumbnail}
                alt="Project Image"
              />,
              <img
                className="w-24  aspect-square object-cover"
                src={projectData.thumbnail}
                alt="Project Image"
              />,
              <img
                className="w-24  aspect-square object-cover"
                src={projectData.thumbnail}
                alt="Project Image"
              />,
              <img
                className="w-24  aspect-square object-cover"
                src={projectData.thumbnail}
                alt="Project Image"
              />,
              <img
                className="w-24  aspect-square object-cover"
                src={projectData.thumbnail}
                alt="Project Image"
              />,
            ]}
          </Carousel>
        </div>
        <div className="space-y-8 w-1/2">
          <div className="space-y-3 flex flex-col">
            <Text type={ETextType.H6}>Description</Text>
            <Text type={ETextType.T3}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis,
              suscipit dolores nihil facilis adipisci, debitis dolorum commodi
              molestiae deserunt, cupiditate libero rem sed vel enim corporis
              quod. Velit, id incidunt?
            </Text>
          </div>
          {projectData.technologies && (
            <TitledCarousel
              titleAttributes={{ title: "Technologies", type: ETextType.H6 }}
            >
              {projectData.technologies.map((technology) => (
                <Button type={EButtonType.OUTLINE}>
                  <Text type={ETextType.T3}>{technology}</Text>
                </Button>
              ))}
            </TitledCarousel>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailsPage;
