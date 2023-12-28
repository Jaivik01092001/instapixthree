import React, { useState } from "react";
import logo from "../../Assets/Navbar logo.png";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className="bg-white hederhight dark:bg-gray-900 borderbottom"
        id="home"
      >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between hcontentheight">
            <div className="md:flex md:items-center md:gap-12">
              <a href="home">
                <img className="logo" src={logo} alt="" />
              </a>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex text-white items-center gap-14 text-sm">
                  {/* ... your navigation links here ... */}

                  <a href="#home">
                    <li className="navli">Home</li>
                  </a>
                  <a href="#ourworks">
                    <li className="navli">Our Works</li>
                  </a>
                  <a href="#features">
                    <li className="navli">Features</li>
                  </a>
                  <a href="#faq">
                    <li className="navli">FAQ</li>
                  </a>

                  {/* ... other mobile menu items ... */}
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4 contactbg">
                <a
                  className="rounded-md contactbtn bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-500"
                  href="#footer"
                >
                  CONTACT US
                </a>

                {/* <div className="hidden sm:flex">
                <a
                  className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                  href="/"
                >
                  Register
                </a>
              </div> */}
              </div>

              <div className="block md:hidden">
                <button
                  onClick={toggleMenu}
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mobilemenu">
            <ul>
              <a href="#home">
                <li className="navli">Home</li>
              </a>
              <a href="#ourworks">
                <li className="navli">Our Works</li>
              </a>
              <a href="#features">
                <li className="navli">Features</li>
              </a>
              <a href="#faq">
                <li className="navli">FAQ</li>
              </a>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
