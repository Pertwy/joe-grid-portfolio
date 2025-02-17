import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    {
      title: "ABOUT",
      to: "/about",
      openNewTab: false,
    },
    {
      title: "COMICS",
      to: "/comics",
      openNewTab: false,
    },
    {
      title: "INSTAGRAM",
      to: "https://www.instagram.com/perkins.ink/",
      openNewTab: true,
    },
  ];

  return (
    <nav>
      <div className="navbar">
        <div className="flex justify-between h-12 md:h-16 lg:h-20 items-center">
          <Link
            to="/"
            className="text-gray-900 hover:text-gray-600 font-medium tracking-wider md:text-md lg:text-md"
          >
            HOME
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navItems.map((item) => {
              return (
                <Link
                  to={item.to}
                  className="text-gray-900 hover:text-gray-600 font-medium tracking-wider md:text-md lg:text-md"
                  target={item.openNewTab ? "_blank" : ""}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-600 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <div className=" pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              return (
                <Link
                  to={item.to}
                  className="block py-2 text-gray-900 hover:text-gray-600 font-medium tracking-wider"
                  onClick={() => setIsOpen(false)}
                  target={item.openNewTab ? "_blank" : ""}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
