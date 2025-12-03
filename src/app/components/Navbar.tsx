"use client";

import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const theme = "dark";
  const [isMobileMneuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMneuOpen);
  };
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contct", href: "/contact" },
  ];
  return (
    <nav className=" w-full bg-dark/80 backdrop-blur-sm">
      <div className="container max-w-7xl mx-auto px-4">
        {/* desktop menu */}
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-primary">
            Portfolio
          </Link>
          {/* desktop menu */}
          <div className="hidden md:flex items-center space-x-8 ">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:text-primary transition-colors ${
                    isActive ? "text-primary font-semibold" : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer">
              {theme === "dark" ? (
                <SunIcon className="h-6 w-6 text-yellow-400" />
              ) : (
                <MoonIcon className="h-6 w-6 text-gray-800" />
              )}
            </button>
          </div>
          {/* mobile menu btn */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:bg-gray-800 transition-colors cursor-pointer"
          >
            {isMobileMneuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
        {/* mobile menu */}
        {isMobileMneuOpen && (
          <div className="md:hidden">
            <div className="py-4 space-y-4">
              {menuItems.map((item, index) => (
                <div key={index} onClick={toggleMobileMenu}>
                  <Link
                    href={item.href}
                    className="block py-2 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
              <div>
                <button className="flex items-center py-2 hover:text-primary transition-colors">
                  {theme === "dark" ? (
                    <>
                      {" "}
                      <SunIcon className="h-6 w-6 text-yellow-400 mr-2" />
                      Light Mode{" "}
                    </>
                  ) : (
                    <>
                      {" "}
                      <MoonIcon className="h-6 w-6 text-gray-800 mr-2" />
                      Dark Mode
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
