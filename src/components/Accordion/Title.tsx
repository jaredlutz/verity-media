import { PlusIcon } from "@/svg";
import { ChildrenProp } from ".";
import { useAccordionTabs } from "./context";

type TitleProp = {
  value: string;
} & ChildrenProp;

export const Title = ({ children, value }: TitleProp) => {
  const { activeItem, setActiveItem } = useAccordionTabs();

  const active = activeItem === value;

  return (
    <h2
      className="flex w-full cursor-pointer items-center justify-between bg-[#333] px-8 py-5 text-2xl"
      onClick={() => setActiveItem(active ? null : value)}
    >
      {children}
      <PlusIcon
        className={`h-8 w-8 transition-all duration-200 ${
          active ? "rotate-45" : ""
        }`}
        strokeWidth={2}
      />
    </h2>
  );
};
