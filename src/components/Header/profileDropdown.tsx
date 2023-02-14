import { CaretDownIcon, EditIcon, HelpIcon, UserIcon } from "@/svg";
import { Menu } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

type MyLinkProps = {
  href: string;
  children?: React.ReactNode;
  className: string;
};

const MyLink = ({ children, href, ...rest }: MyLinkProps) => {
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
};

const ProfileDropdown = () => {
  return (
    <Menu>
      {({ open }) => (
        <>
          <Menu.Button>
            <div className="flex items-center justify-center space-x-2">
              <div className="relative h-4 w-4 overflow-hidden rounded-sm md:h-6 md:w-6 md:rounded">
                <Image
                  src="/images/user.png"
                  priority
                  alt="User Profile Icon"
                  height={32}
                  width={32}
                />
              </div>
              <CaretDownIcon
                className={`h-4 w-4 transition duration-200 ${
                  open && "rotate-180"
                }`}
                strokeWidth={2}
              />
            </div>
          </Menu.Button>
          <Menu.Items className="absolute top-0 right-0 mt-12 flex w-48 origin-top-right flex-col divide-y divide-slate-700 border-[1px] border-gray-800 bg-[#141414]">
            <Menu.Item>
              {({ active }) => (
                <div className={`${active && "underline"} dropdown-link`}>
                  <EditIcon className="h-5 w-5" />
                  <p>Manage Profiles</p>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <MyLink
                  href="/account"
                  className={`${active && "underline"} dropdown-link`}
                >
                  <UserIcon className="h-5 w-5" />
                  <p>Account</p>
                </MyLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <MyLink
                  href="/help"
                  className={`${active && "underline"} dropdown-link`}
                >
                  <HelpIcon className="h-5 w-5" />
                  <p>Help Center</p>
                </MyLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <MyLink
                  href="/account-settings"
                  className={`${
                    active && "underline"
                  } dropdown-link justify-center`}
                >
                  <p>Sign out of Netflix</p>
                </MyLink>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
};

export default ProfileDropdown;
