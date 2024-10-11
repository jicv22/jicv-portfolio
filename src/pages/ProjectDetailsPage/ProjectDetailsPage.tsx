import { Button, EButtonType, ETextType, Text } from "../../atoms";
import { Carousel } from "../../organisms";
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
          <Carousel
            elements={[
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
          />
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
          {/* <Carousel // TODO: MAKE THE ELEMENTS AS CHILDREN... CHECK IT SHOULD BE DONE
          // TODO: MAKE THE CAROUNSOLE USING TWO TWO SEPARATED ELEMENTS (CAROUSEL IT SELF AND THE TEXT).
          // TODO: DO SAME WITH THE UNORDERED LIST...
            titleAttributes={{ title: "Technologies", type: ETextType.H6 }}
            elements={[
              <Button type={EButtonType.OUTLINE}>
                <Text type={ETextType.T3}>C++</Text>
              </Button>,
              <Button type={EButtonType.OUTLINE}>
                <Text type={ETextType.T3}>Unreal Engine</Text>
              </Button>,
              <Button type={EButtonType.OUTLINE}>
                <Text type={ETextType.T3}>Blender</Text>
              </Button>,
              <Button type={EButtonType.OUTLINE}>
                <Text type={ETextType.T3}>Figma</Text>
              </Button>,
            ]}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailsPage;
