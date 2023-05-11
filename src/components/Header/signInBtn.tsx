import Link from "next/link";

export const SignInBtn = () => {
  return (
    <Link href="/login">
      <button className="flex h-full flex-shrink-0 cursor-pointer items-center gap-2 rounded bg-[#e50914] py-1 px-4 text-sm font-semibold">
        Sign In
      </button>
    </Link>
  );
};
