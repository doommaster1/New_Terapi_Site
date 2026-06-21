import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = ({ text = "dark", scroll = "dark" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const base = "flex flex-col md:flex-row md:space-x-8";

  const textStyles = {
    dark: "text-gray-900",
    light: "text-white",
  };

  const scrollStyles = {
    dark: "text-gray-900",
    light: "text-white",
  };

  const isNavActive = isScrolled || isOpen;

  const activeColor = isNavActive ? scrollStyles[scroll] : textStyles[text];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 mx-6 
        ${
          isNavActive
            ? `bg-white shadow-md mt-2 py-2 ${activeColor}` // Tampilan saat di-scroll
            : `bg-transparent mt-6 py-4 ${activeColor}` // Tampilan awal
        } rounded-2xl`}
      id="nav"
    >
      <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/">
          <h1
            className={`space-x-3 font-bold text-md md:text-xl ${activeColor}`}
          >
            Terapi Lintah Mekarsari Depok
          </h1>
        </Link>

        {/* hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className={`cursor-pointer inline-flex items-center p-2 w-10 justify-center ${activeColor} rounded-lg md:hidden hover:bg-gray-300 focus:outline-none focus:ring-gray-200`}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
        >
          <ul className={`${base} ${activeColor}`}>
            <li className="block py-2 px-3 rounded duration-200 hover:text-amber-600 ease-in md:p-0 w-full whitespace-nowrap">
              <HashLink smooth to="/#home">Home</HashLink>
            </li>
            <li className="block py-2 px-3 rounded duration-200 hover:text-amber-600 ease-in md:p-0 w-full whitespace-nowrap">
              <HashLink smooth to="/OurService#service_page">Our Service</HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
