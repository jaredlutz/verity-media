import { ChildrenProp } from ".";

export const Item = ({ children }: ChildrenProp) => {
  return <div className="flex flex-col gap-0.5">{children}</div>;
};
