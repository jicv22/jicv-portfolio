import { ETextType, Text } from "../../atoms";
import useModal from "../../hooks/useModal";
import { ProjectDetailsPage } from "../../pages";
import { getDayMonthYearDate } from "../../utils/dates";
import { IProjectCardParam } from "./interfaces";
import { getEndDateValue, getTechnologiesString } from "./utils";

function ProjectCard({ projectData }: IProjectCardParam) {
  const { openModal } = useModal();

  const endDateValue = getEndDateValue(projectData.endDate);
  const TechnologiesString = projectData.technologies
    ? getTechnologiesString(projectData.technologies)
    : undefined;

  return (
    <button
      className="relative p-6 rounded-3xl hover:shadow-[rgb(0,123,255)_0px_0px_12px_-4px] w-56 lg:w-64 2xl:w-72 min-w-56 lg:min-w-64 2xl:min-w-72"
      onClick={() => openModal(<ProjectDetailsPage />)}
    >
      {projectData.thumbnail && (
        <img
          className="w-full object-fill rounded-2xl mb-6 h-24 lg:h-28 2xl:h-32"
          src={projectData.thumbnail}
          alt="Project Image"
        />
      )}
      <div className="flex flex-col items-start space-y-2 overflow-clip">
        <Text type={ETextType.H6} lineClamp={1}>
          {projectData.name}
        </Text>
        <Text type={ETextType.T3}>{`${getDayMonthYearDate(
          projectData.startDate
        )} - ${endDateValue}`}</Text>
        {TechnologiesString && (
          <Text type={ETextType.T2} lineClamp={1}>
            {TechnologiesString}
          </Text>
        )}
      </div>
    </button>
  );
}

export default ProjectCard;
