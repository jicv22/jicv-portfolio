export interface INestedInfoListParam {
  nestedInfo: INestedListInfo[];
}

export interface INestedListInfo {
  info: string;
  childInfo?: INestedListInfo[];
}
