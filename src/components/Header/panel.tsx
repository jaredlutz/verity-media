import { ChildrenProp } from "types";

type PanelProps = {
  side: "left" | "right";
} & ChildrenProp;

export const Panel = ({ children, side }: PanelProps) => {
  return (
    <div
      className={`flex flex-shrink-0 items-center ${
        side === "left" ? "space-x-6 md:space-x-8 lg:space-x-12" : "space-x-6"
      }`}
    >
      {children}
    </div>
  );
};
