import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { cursious } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    setOpenNavigation((prev) => {
      const next = !prev;
      next ? disablePageScroll() : enablePageScroll();
      return next;
    });
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b border-gray-800 lg:bg-gray-900/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-gray-900" : "bg-gray-900/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center h-[4.5rem] px-5 lg:px-8 xl:px-12 max-lg:py-3">
        {/* Logo */}
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={cursious} width={190} height={40} alt="Curious AI Logo" />
        </a>

        {/* Navigation Links */}
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-gray-900 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-20 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation
              .filter(
                (item) =>
                  item.title !== "Sign In" && item.title !== "New Account"
              )
              .map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={handleClick}
                  className={`block relative font-mono text-2xl uppercase text-white transition-colors hover:text-orange-400 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.5 lg:text-xs lg:font-semibold ${
                    item.url === pathname.hash
                      ? "z-20 lg:text-white"
                      : "lg:text-white/60"
                  } lg:leading-5 lg:hover:text-white xl:px-12`}
                >
                  {item.title}
                </a>
              ))}
          </div>

          {/* Background Decoration */}
          <HamburgerMenu />
        </nav>

        {/* CTA Desktop Button */}
        <Button
          className="hidden lg:flex bg-orange-500 hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 text-white font-semibold text-sm px-5 py-2 rounded-xl transition duration-300"
          href="https://calendly.com/cursious-ai/30min?month=2025-07"
        >
          Book a free consultation
        </Button>

        {/* Mobile Menu Toggle Button */}
        <Button
          className="ml-auto lg:hidden bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white rounded-lg p-2 transition duration-300"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
