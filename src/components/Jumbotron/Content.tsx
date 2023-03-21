import { ChildrenProp } from ".";

export const Content = ({ children }: ChildrenProp) => {
  return (
    <div className="flex w-full flex-col justify-center gap-6">{children}</div>
  );
};
