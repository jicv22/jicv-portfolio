import React, { FC, useState } from "react";
import { IMediaGalleryParam } from "./interfaces";
import { Carousel } from "../../molecules";

const MediaGallery: FC<IMediaGalleryParam> = ({ mediaContent }) => {
  const [selectedMedia, setSelectedMedia] = useState(mediaContent[0]);

  const onThumbnailClicked = (clickedIndex: number) =>
    setSelectedMedia(mediaContent[clickedIndex]);

  return (
    <React.Fragment>
      <img
        className="w-full aspect-[4/3] object-cover"
        src={selectedMedia.url}
        alt="Project Image"
      />
      <Carousel>
        {mediaContent.map((media, index) => (
          <img
            key={`mdcnt-${index}`}
            className="w-2/12 sm:w-20 md:w-24 aspect-square object-cover cursor-pointer"
            src={media.url}
            alt="Project Image"
            onClick={() => onThumbnailClicked(index)}
          />
        ))}
      </Carousel>
    </React.Fragment>
  );
};

export default MediaGallery;
