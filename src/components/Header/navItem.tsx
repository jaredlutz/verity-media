import { ChildrenProp } from "types";

export const NavItem = ({ children }: ChildrenProp) => {
  return <li className="header-link font-semibold">{children}</li>;
};
