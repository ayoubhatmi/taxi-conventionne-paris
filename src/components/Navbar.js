"use client";
import Image from "next/image";
import { Link } from "react-scroll";
import { useState } from "react";
import logo from "../../public/images/logo.png";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-white shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-2 md:py-2 md:block">
            <a href="/">
              <Image className="sm:w-2/4 w-5/6" src={logo} />
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li>
                <Link
                  className="text-main-color  hover:text-alt-color font-bold hover:text-pink-color whitespace-nowrap hover:cursor-pointer "
                  to="transfertAeroport"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Tansfert Aéroport
                </Link>
              </li>

              <li>
                <Link
                  className="text-main-color hover:text-alt-color font-bold hover:text-pink-color whitespace-nowrap hover:cursor-pointer"
                  to="reservation"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Taxi Conventionné
                </Link>
              </li>
              <li>
                <Link
                  className="text-white font-medium  hover:text-pink-color p-3 px-8 rounded-3xl bg-main-color whitespace-nowrap hover:cursor-pointer hover:bg-alt-color"
                  to="reservastionForm"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Réserver
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
