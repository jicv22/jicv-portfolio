import { PageTemplate } from "../../templates";
import {
  accountingWebAppProjectData,
  projectArenaData,
  projectMomentumData,
  projectBattlefieldData,
  projectDronData,
  ticketSellingWebProjectData,
  virtualTryOnProjectData,
  webPortfolioProjectData,
} from "./variables";
import { ProjectCard } from "../../molecules";
import { Carousel } from "../../organism";

function ProjectsPage() {
  const personalProjects = [
    <ProjectCard key="1" projectData={projectBattlefieldData} />,
    <ProjectCard key="2" projectData={projectMomentumData} />,
    <ProjectCard key="3" projectData={projectArenaData} />,
    <ProjectCard key="4" projectData={projectDronData} />,
    <ProjectCard key="5" projectData={webPortfolioProjectData} />,
  ];
  const professionalProjects = [
    <ProjectCard key="1" projectData={ticketSellingWebProjectData} />,
    <ProjectCard key="2" projectData={accountingWebAppProjectData} />,
    <ProjectCard key="3" projectData={virtualTryOnProjectData} />,
  ];

  return (
    <PageTemplate isPageUp>
      <div className="flex flex-col space-y-6">
        <Carousel title="Personal Projects" elements={personalProjects} />
        <Carousel
          title="Professional Projects"
          elements={professionalProjects}
        />
      </div>
    </PageTemplate>
  );
}

export default ProjectsPage;
