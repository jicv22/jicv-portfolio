import { EMediaContentType, IMediaContentType } from "../../pages";

export const isPlayableMedia = ({ type }: IMediaContentType) => {
  return type === EMediaContentType.VIDEO;
};
