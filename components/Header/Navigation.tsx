import Link from "next/link";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

import NavItem from "./NavItem";
import { Button } from "components/UI/Button";
import { HeaderProps } from "./Header";
import { Avatar, AvatarFallback, AvatarImage } from "../UI/Avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../UI/Dropdown";

import { LogOut, User } from "lucide-react";

export const Navigation = ({ route, links, data }: HeaderProps) => {
  const router = useRouter();

  const onLogOut = () => {
    signOut();
  };
  return (
    <nav className="hidden sm:flex xl:pr-2">
      <ul className="flex items-center">
        {links.map((link, i) => {
          return (
            <NavItem
              name={link.name}
              link={link.link}
              key={link.id}
              nav
              route={route}
            />
          );
        })}

        {data ? (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="ml-12 transition-all duration-300 cursor-pointer hover:ring-2 hover:ring-slate-300">
                  {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                  <AvatarFallback>
                    {data?.firstName.charAt(0).toUpperCase()}
                    {data?.lastName.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-8 bg-white text-bluePrimary DropdownMenuContent">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href="/dashboard">
                  <DropdownMenuItem className="w-[100%] cursor-pointer hover:bg-bluePrimary hover:text-white">
                    <User className="w-4 h-4 mr-2" />
                    Therapy Dashboard
                  </DropdownMenuItem>
                </Link>

                <DropdownMenuItem
                  className="mt-2 cursor-pointer hover:bg-bluePrimary hover:text-white"
                  onClick={onLogOut}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <Link href="/login">
            <Button styles="bg-[#0cbaba] ml-12 w-[80px] py-1 text-center">
              Login
            </Button>
          </Link>
        )}

        {/* <NavItem name="Dashboard" link="Dashboard" nav /> */}
      </ul>
    </nav>
  );
};
