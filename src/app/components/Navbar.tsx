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
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme, mounted } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleToggleMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-primary">
            Portfolio
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:text-primary transition-colors ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-gray-800 dark:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <button
              onClick={toggleTheme}
              disabled={!mounted}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
            >
              {mounted && theme === "dark" ? (
                <SunIcon className="h-6 w-6 text-yellow-400" />
              ) : (
                mounted && <MoonIcon className="h-6 w-6 text-gray-800" />
              )}
            </button>
          </div>

          <button
            onClick={handleToggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:bg-gray-800 transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {menuItems.map((item) => (
              <div key={item.href} onClick={handleToggleMenu}>
                <Link
                  href={item.href}
                  className="block py-2 hover:text-primary transition-colors text-gray-800 dark:text-white"
                >
                  {item.name}
                </Link>
              </div>
            ))}

            <button
              onClick={toggleTheme}
              className="flex items-center py-2 hover:text-primary transition-colors"
            >
              {mounted && theme === "dark" ? (
                <>
                  <SunIcon className="h-6 w-6 text-yellow-400 mr-2" />
                  Light Mode
                </>
              ) : (
                <>
                  <MoonIcon className="h-6 w-6 text-gray-800 mr-2" />
                  Dark Mode
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
