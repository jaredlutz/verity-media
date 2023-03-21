import { CaretDownIcon } from "@/svg";
import { Menu } from "@headlessui/react";

const MobileMenuDropdown = () => {
  return (
    <Menu>
      {({ open }) => (
        <>
          <Menu.Button className="flex items-center gap-1 md:hidden">
            <p className="text-sm">Browse</p>
            <CaretDownIcon
              className={`transition duration-200 ${
                open && "rotate-180"
              } h-4 w-4`}
              strokeWidth={2}
            />
          </Menu.Button>
          <Menu.Items className="absolute top-0 mt-8 flex w-48 origin-top-right flex-col border-t-2 border-white bg-[#141414] opacity-90">
            <Menu.Item>
              {({ active }) => (
                <div className={`${active && "underline"} dropdown-menu`}>
                  <p>Home</p>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div className={`${active && "underline"} dropdown-menu`}>
                  <p>TV Shows</p>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div className={`${active && "underline"} dropdown-menu`}>
                  <p>Movies</p>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div className={`${active && "underline"} dropdown-menu`}>
                  <p>New & Popular</p>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div className={`${active && "underline"} dropdown-menu`}>
                  <p>My List</p>
                </div>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
};

export default MobileMenuDropdown;
