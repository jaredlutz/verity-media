import { ChildrenProp } from "types";

type ContainerProps = {
  isScrolled: boolean;
  user: string | null;
} & ChildrenProp;

export const Container = ({ children, isScrolled, user }: ContainerProps) => {
  const styles = user
    ? isScrolled
      ? "bg-[#141414] fixed top-0 z-50 header-gradient"
      : "fixed top-0 z-50 header-gradient"
    : "absolute bg-transparent z-50";

  return (
    <header
      className={`${styles} flex w-full px-4 py-2 text-white transition duration-500 sm:px-8 md:py-5 lg:px-12`}
    >
      <div className="mx-auto flex w-full max-w-5xl items-center">
        {children}
      </div>
    </header>
  );
};
