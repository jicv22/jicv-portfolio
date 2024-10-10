import { PageTemplate } from "../../templates";
import { personalProjects, professionalProjects } from "./variables";
import { ProjectCard } from "../../molecules";
import { Carousel } from "../../organisms";

function ProjectsPage() {
  return (
    <PageTemplate isPageUp>
      <div className="flex flex-col space-y-6">
        <Carousel
          title="Personal Projects"
          elements={personalProjects.map((project, index) => (
            <ProjectCard
              key={`${index}-${project.name}`}
              projectData={project}
            />
          ))}
        />
        <Carousel
          title="Professional Projects"
          elements={professionalProjects.map((project, index) => (
            <ProjectCard
              key={`${index}-${project.name}`}
              projectData={project}
            />
          ))}
        />
      </div>
    </PageTemplate>
  );
}

export default ProjectsPage;
