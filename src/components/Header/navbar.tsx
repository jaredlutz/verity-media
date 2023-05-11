import { ChildrenProp } from "types";

export const Navbar = ({ children }: ChildrenProp) => {
  return (
    <nav className="flex flex-shrink-0 items-center space-x-6 md:space-x-8 lg:space-x-12">
      {children}
    </nav>
  );
};
