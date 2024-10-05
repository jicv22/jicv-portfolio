import {
  ELastProjectState,
  EProjectTechnology,
} from "../../pages/ProjectsPage/interfaces";
import { getDayMonthYearDate, isDate } from "../../utils/dates";

export function getEndDateValue(date: Date | ELastProjectState) {
  return isDate(date)
    ? getDayMonthYearDate(date as Date)
    : (date as ELastProjectState);
}

export function getTechnologiesString(technologies: EProjectTechnology[]) {
  return technologies
    .reduce((acc, platform) => `${acc} - ${platform}`, "")
    .slice(3);
}
