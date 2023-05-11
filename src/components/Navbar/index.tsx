"use client";
import Header from "../Header";

type NavbarProps = {
  user: string | null;
};

const Navbar = ({ user }: NavbarProps) => {
  return (
    <Header user={user}>
      <Header.Panel side="left">
        <Header.Logo />
        {user && (
          <Header.NavItems>
            <Header.NavItem>Home</Header.NavItem>
            <Header.NavItem>TV Shows</Header.NavItem>
            <Header.NavItem>Movies</Header.NavItem>
            <Header.NavItem>New & Popular</Header.NavItem>
            <Header.NavItem>My List</Header.NavItem>
          </Header.NavItems>
        )}
      </Header.Panel>
      <Header.Spacer />
      <Header.Panel side="right">
        {user ? (
          <>
            <Header.Search />
            <Header.Notification />
            <Header.Profile />
          </>
        ) : (
          <Header.SignInBtn />
        )}
      </Header.Panel>
    </Header>
  );
};

export default Navbar;
