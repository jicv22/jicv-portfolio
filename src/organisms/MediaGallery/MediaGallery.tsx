import React, { FC, useState } from "react";
import { IMediaGalleryParam } from "./interfaces";
import { Carousel, MediaThumbnail } from "../../molecules";
import { isPlayableMedia } from "./helpers";
import { getYouTubeVideoThumbnailFromUrl } from "../../utils/links";

const MediaGallery: FC<IMediaGalleryParam> = ({ mediaContent }) => {
  const [selectedMedia, setSelectedMedia] = useState(mediaContent[0]);

  const onThumbnailClicked = (clickedIndex: number) =>
    setSelectedMedia(mediaContent[clickedIndex]);

  return (
    <React.Fragment>
      {!isPlayableMedia(selectedMedia) ? (
        <img
          className="w-full aspect-[4/3] object-cover"
          src={selectedMedia.url}
          alt="Project Image"
        />
      ) : (
        <iframe
          className="w-full aspect-[4/3]"
          src={selectedMedia.url}
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      )}
      <Carousel>
        {mediaContent.map(({ url, type }, index) => {
          const isMediaPlayable = isPlayableMedia({ url, type });

          return (
            <MediaThumbnail
              key={`thb-${url}`}
              thumbnailUrl={
                isMediaPlayable ? getYouTubeVideoThumbnailFromUrl(url) : url
              }
              isPlayableMedia={isMediaPlayable}
              onClick={() => onThumbnailClicked(index)}
            />
          );
        })}
      </Carousel>
    </React.Fragment>
  );
};

export default MediaGallery;
