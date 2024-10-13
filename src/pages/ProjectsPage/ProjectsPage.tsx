import { Carousel, PageTemplate, TitledComponent } from "../../templates";
import { personalProjects, professionalProjects } from "./variables";
import { ProjectCard } from "../../molecules";

function ProjectsPage() {
  return (
    <PageTemplate isPageUp>
      <div className="flex flex-col space-y-6">
        <TitledComponent titleAttributes={{ title: "Personal Projects" }}>
          <Carousel>
            {personalProjects.map((project, index) => (
              <ProjectCard
                key={`${index}-${project.name}`}
                projectData={project}
              />
            ))}
          </Carousel>
        </TitledComponent>
        <TitledComponent titleAttributes={{ title: "Professional Projects" }}>
          <Carousel>
            {professionalProjects.map((project, index) => (
              <ProjectCard
                key={`${index}-${project.name}`}
                projectData={project}
              />
            ))}
          </Carousel>
        </TitledComponent>
      </div>
    </PageTemplate>
  );
}

export default ProjectsPage;
