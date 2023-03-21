import Image from "next/image";
import { useJumbotronItemData } from "./context";

export const JumboImage = () => {
  const data = useJumbotronItemData();

  return (
    <div className="flex w-full items-center justify-center">
      <Image
        src={data.item.imageURL}
        alt={data.item.title}
        width={data.item.width}
        height={data.item.height}
      />
    </div>
  );
};
