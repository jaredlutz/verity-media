import { useJumbotronItemData } from "./context";

export const Title = () => {
  const data = useJumbotronItemData();

  return <h2 className="text-5xl font-semibold">{data.item.title}</h2>;
};
