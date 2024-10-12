import { PageTemplate } from "../../templates";
import { personalProjects, professionalProjects } from "./variables";
import { ProjectCard } from "../../molecules";
import { TitledCarousel } from "../../organisms";

function ProjectsPage() {
  return (
    <PageTemplate isPageUp>
      <div className="flex flex-col space-y-6">
        <TitledCarousel titleAttributes={{ title: "Personal Projects" }}>
          {personalProjects.map((project, index) => (
            <ProjectCard
              key={`${index}-${project.name}`}
              projectData={project}
            />
          ))}
        </TitledCarousel>
        <TitledCarousel titleAttributes={{ title: "Professional Projects" }}>
          {professionalProjects.map((project, index) => (
            <ProjectCard
              key={`${index}-${project.name}`}
              projectData={project}
            />
          ))}
        </TitledCarousel>
      </div>
    </PageTemplate>
  );
}

export default ProjectsPage;
