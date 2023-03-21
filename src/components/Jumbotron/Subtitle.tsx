import { useJumbotronItemData } from "./context";

export const Subtitle = () => {
  const data = useJumbotronItemData();

  return <h2 className="text-2xl">{data.item.subTitle}</h2>;
};
