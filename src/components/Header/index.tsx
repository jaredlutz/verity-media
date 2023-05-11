"use client";
import useScrollY from "@/hooks/useScrollY";

import { Container } from "./container";
import { Logo } from "./logo";
import { NavItem } from "./navItem";
import { NavItems } from "./navItems";
import { Notification } from "./notification";
import { Panel } from "./panel";
import { Profile } from "./profile";
import { Search } from "./search";
import { SignInBtn } from "./signInBtn";
import { Spacer } from "./spacer";

type HeaderProps = {
  children: React.ReactNode;
  user: string | null;
};

const Header = ({ children, user }: HeaderProps) => {
  const isScrolled = useScrollY();

  return (
    <Container isScrolled={isScrolled} user={user}>
      {children}
    </Container>
  );
};

Header.Panel = Panel;
Header.Spacer = Spacer;
Header.Logo = Logo;
Header.NavItems = NavItems;
Header.NavItem = NavItem;
Header.Search = Search;
Header.Notification = Notification;
Header.Profile = Profile;
Header.SignInBtn = SignInBtn;

export default Header;
