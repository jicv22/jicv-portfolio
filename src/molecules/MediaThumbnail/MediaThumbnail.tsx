import { IMediaThumbnailProps } from "./interfaces";
import playIcon from "/src/assets/icos/play.svg";

const MediaThumbnail = ({
  thumbnailUrl,
  isPlayableMedia,
  onClick,
}: IMediaThumbnailProps) => (
  <div
    className={`relative aspect-square object-cover cursor-pointer w-2/12 sm:w-20 md:w-24 bg-cover bg-center`}
    style={{ backgroundImage: `url(${thumbnailUrl})` }}
    onClick={onClick}
  >
    {isPlayableMedia && (
      <img
        className="absolute invert drop-shadow-md inset-1 sm:inset-5 lg:inset-7"
        src={playIcon}
        title="Play Video"
        alt="play"
      />
    )}
  </div>
);

export default MediaThumbnail;
