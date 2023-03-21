import { ChildrenProp } from ".";
import { useJumbotronItemData } from "./context";

export const Pane = ({ children }: ChildrenProp) => {
  const data = useJumbotronItemData();
  return (
    <div
      className={`mx-auto flex max-w-[1100px] ${
        data.item?.direction === "ltr" ? "flex-row" : "flex-row-reverse"
      } gap-12 py-16 text-left`}
    >
      {children}
    </div>
  );
};
