import { ChildrenProp } from "types";

export const NavItems = ({ children }: ChildrenProp) => {
  return (
    <ul className="hidden items-center space-x-4 md:flex lg:space-x-6">
      {children}
    </ul>
  );
};
