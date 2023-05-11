import { HeaderSearchIcon } from "@/svg";

export const Search = () => {
  return (
    <button>
      <HeaderSearchIcon
        strokeWidth={2}
        className="h-4 w-4 text-white md:h-5 md:w-5"
      />
    </button>
  );
};
