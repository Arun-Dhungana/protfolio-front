import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Open_Sans } from "next/font/google";
import ThemeSwitch from "./ThemeSwitch";
const openSans = Open_Sans({ subsets: ["latin"] });
export const Navbar = () => {
  return (
    <nav
      className={`w-[100%] sticky top-0  bg-white opacity-95  ${openSans.className}  z-10   dark:bg-black dark:text-white `}
    >
      <div className="flex   justify-center">
        <div className="block md:hidden ">
          <div className=" flex flex-row items-center  justify-between">
            <button
              type="button"
              className=" inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ms-2"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* <!--
              Icon when menu is open.
  
              Menu open: "block", Menu closed: "hidden"
            --> */}
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <ThemeSwitch></ThemeSwitch>
          </div>
        </div>
        <div className=" hidden md:block space-x-4 ">
          <div className=" flex flex-row  justify-center items-center">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}

            <Link
              href="/"
              className="  hover:bg-gray-700  hover:text-white rounded-md px-3 py-2 text-lg font-medium"
              aria-current="page"
            >
              Home
            </Link>
            <Link
              href="guestbook"
              className=" hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium"
            >
              Guestbook
            </Link>
            <Link
              href="about"
              className=" hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium"
            >
              About
            </Link>
            <Link
              href="snippet"
              className=" hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium"
            >
              Snippets
            </Link>
            <Link
              href="contact"
              className=" hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium"
            >
              Contact
            </Link>

            <ThemeSwitch></ThemeSwitch>
          </div>
        </div>
      </div>
    </nav>
  );
};
