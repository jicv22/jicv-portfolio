export interface IEducationItemParam {
  mainTitle: string;
  achievements: IEducationAchievement[];
}

export interface IEducationAchievement {
  achievement: string;
  institute: string;
  description?: string;
}
