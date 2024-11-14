import { IMediaThumbnailProps } from "./interfaces";
import playIcon from "/src/assets/icos/play.svg";

const MediaThumbnail = ({
  thumbnailUrl,
  isPlayableMedia,
  onClick,
}: IMediaThumbnailProps) => (
  <div
    className={`relative aspect-square object-cover cursor-pointer bg-cover bg-center min-w-16 sm:min-w-20 md:min-w-24
      transition ease-in-out duration-150 hover:brightness-125 hover:scale-110`}
    style={{ backgroundImage: `url(${thumbnailUrl})` }}
    onClick={onClick}
  >
    {isPlayableMedia && (
      <img
        className="absolute invert drop-shadow-md inset-4 sm:inset-5 lg:inset-7"
        src={playIcon}
        title="Play Video"
        alt="play"
      />
    )}
  </div>
);

export default MediaThumbnail;
