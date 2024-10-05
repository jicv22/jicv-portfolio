import { ETextType, Text } from "../../atoms";
import { ProjectCard } from "../../molecules";
import { ICarruselParams } from "./interface";

function Carrusel({ title, projects }: ICarruselParams) {
  return (
    <div className="space-y-6">
      <Text type={ETextType.H5}>{title}</Text>
      <div className="flex space-x-4 max-w-full overflow-x-auto py-3 px-1 scrollbar-thin scrollbar-thumb-darkGray scrollbar-track-transparent">
        {projects.map((project, index) => (
          <ProjectCard key={`${index}-${project.name}`} projectData={project} />
        ))}
      </div>
    </div>
  );
}

export default Carrusel;
