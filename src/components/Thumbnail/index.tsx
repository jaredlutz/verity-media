import Image from "next/image";

import { IMovie } from "@/types";
import { thumbnailUrl } from "@/utils/constants/movie";

type ThumbnailProps = {
  item: IMovie;
};

const Thumbnail = ({ item }: ThumbnailProps) => {
  return (
    <div className="relative aspect-video h-24 cursor-pointer hover:scale-105 sm:h-28 md:h-32">
      <Image
        src={`${thumbnailUrl}${item?.backdrop_path || item?.poster_path}`}
        alt={item?.title}
        fill={true}
        className="rounded object-cover"
      />
    </div>
  );
};

export default Thumbnail;
