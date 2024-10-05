import { PageTemplate } from "../../templates";
import { Carrusel } from "../../organism";
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

function ProjectsPage() {
  return (
    <PageTemplate isPageUp>
      <div className="flex flex-col space-y-6">
        <Carrusel
          title="Personal Projects"
          projects={[
            projectMomentumData,
            projectBattlefieldData,
            projectArenaData,
            projectDronData,
            webPortfolioProjectData,
          ]}
        />
        <Carrusel
          title="Professional Projects"
          projects={[
            ticketSellingWebProjectData,
            accountingWebAppProjectData,
            virtualTryOnProjectData,
          ]}
        />
      </div>
    </PageTemplate>
  );
}

export default ProjectsPage;
