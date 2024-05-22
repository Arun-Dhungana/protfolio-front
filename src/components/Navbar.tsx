"use client";
import Link from "next/link";
import React from "react";
import { Open_Sans } from "next/font/google";
import ThemeSwitch from "./ThemeSwitch";
import { usePathname } from "next/navigation";
const openSans = Open_Sans({ subsets: ["latin"] });

import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <nav
      className={`sticky top-0 bg-white opacity-95 dark:bg-black dark:text-white z-10 ${openSans}`}
    >
      <div className="w-full my-2 relative flex flex-row items-center md:justify-center">
        {/* Hamburger Icon for Small Screens */}
        <div className="block md:hidden w-[100%]">
          <div className="flex flex-col ">
            <div className="flex flex-row items-center justify-between p-1">
              <button
                title="toggle-button"
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ms-2"
              >
                <svg
                  className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12h18M3 6h18M3 18h18"
                  ></path>
                </svg>
                <svg
                  className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>

              <ThemeSwitch></ThemeSwitch>
            </div>
            <div className={`${isOpen ? "block" : "hidden"} flex flex-col`}>
              <Link
                href="/"
                className={`${
                  pathname === "/" ? "bg-slate-600 text-white" : ""
                } hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium `}
                onClick={() => setIsOpen(!isOpen)}
              >
                Home
              </Link>
              <Link
                href="/guestbook"
                className={`${
                  pathname === "/guestbook" ? "bg-slate-600 text-white" : ""
                } hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium `}
                onClick={() => setIsOpen(!isOpen)}
              >
                Guestbook
              </Link>
              <Link
                href="/about"
                className={`${
                  pathname === "/about" ? "bg-slate-600 text-white" : ""
                } hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium `}
                onClick={() => setIsOpen(!isOpen)}
              >
                About
              </Link>
              <Link
                href="/snippet"
                className={`${
                  pathname === "/snippet" ? "bg-slate-600 text-white" : ""
                } hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium `}
                onClick={() => setIsOpen(!isOpen)}
              >
                Snippets
              </Link>
              <Link
                href="/contact"
                className={`${
                  pathname === "/contact" ? "bg-slate-600 text-white" : ""
                } hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium `}
                onClick={() => setIsOpen(!isOpen)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Navbar Items */}
        <div className={` hidden md:block `}>
          <div className="flex flex-row justify-center md:justify-between space-x-4">
            <Link
              href="/"
              className={`${
                pathname === "/" ? "bg-slate-600 text-white" : ""
              } hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium `}
            >
              Home
            </Link>
            <Link
              href="/guestbook"
              className={`${
                pathname === "/guestbook" ? "bg-slate-600 text-white" : ""
              } hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium `}
            >
              Guestbook
            </Link>
            <Link
              href="/about"
              className={`${
                pathname === "/about" ? "bg-slate-600 text-white" : ""
              } hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium `}
            >
              About
            </Link>
            <Link
              href="/snippet"
              className={`${
                pathname === "/snippet" ? "bg-slate-600 text-white" : ""
              } hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium `}
            >
              Snippets
            </Link>
            <Link
              href="/contact"
              className={`${
                pathname === "/contact" ? "bg-slate-600 text-white" : ""
              } hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium `}
            >
              Contact
            </Link>
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
