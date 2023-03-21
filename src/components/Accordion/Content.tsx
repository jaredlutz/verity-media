import { ChildrenProp } from ".";
import { useAccordionTabs } from "./context";

type ContentProp = {
  value: string;
} & ChildrenProp;

export const Content = ({ children, value }: ContentProp) => {
  const { activeItem } = useAccordionTabs();

  const isActive = activeItem === value;

  return (
    <div
      className={`bg-[#333] text-2xl ${
        isActive ? "h-auto" : "h-0"
      } overflow-hidden transition-all duration-200 ease-in`}
    >
      <p className="px-8 py-5">{children}</p>
    </div>
  );
};
