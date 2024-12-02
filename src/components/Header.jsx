import React, { useState, useEffect } from "react";
import { HEADER_LINKS } from "../static";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import SignIn from "./SingIn";
import Modal from "./Modal";
import SignUp from "./SignUp";

const Header = () => {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleActions = () => {
    setSignIn((p) => !p);
    setSignUp((p) => !p);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const header_links = HEADER_LINKS.map((item, inx) => (
    <li
      key={inx}
      className="item hover:text-[#1e8fffd4] transition duration-300 max-lg:hidden"
    >
      <a
        href="#"
        className="hover:underline font-medium text-lg px-3 py-1 rounded-md hover:bg-gray-100 transition duration-300"
      >
        {item.name}
      </a>
    </li>
  ));

  const mobileMenuLinks = HEADER_LINKS.map((item, inx) => (
    <li
      key={inx}
      className="item text-center hover:text-blue-500 transition duration-300 py-2"
    >
      <a
        href="#"
        className="font-medium text-lg px-3 py-1 hover:bg-gray-100 transition duration-300"
      >
        {item.name}
      </a>
    </li>
  ));

  return (
    <>
      <div className="h-20">
        {signIn && (
          <Modal close={() => setSignIn(false)}>
            <SignIn toggle={toggleActions} close={() => setSignIn(false)} />
          </Modal>
        )}
        {signUp && (
          <Modal close={() => setSignUp(false)}>
            <SignUp toggle={toggleActions} close={() => setSignUp(false)} />
          </Modal>
        )}

        <div className=" h-20 w-full bg-gradient-to-r bg-[#0F172A] text-white shadow-md ">
          <div className="container h-full flex items-center justify-between px-6">
            <a href="https://flowbite.com" className="flex items-center">
              <img
                src="https://najottalim.uz/favicon.ico"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Najot Ta'lim
              </span>
            </a>
            <ul className="hidden md:flex gap-5 items-center">
              {header_links}
              <li>
                <button
                  onClick={() => setSignIn(true)}
                  className="rounded-lg bg-white text-blue-700 font-semibold py-2 px-6 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md"
                >
                  Sign In
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSignUp(true)}
                  className="rounded-lg bg-white text-blue-700 font-semibold py-2 px-6 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md"
                >
                  Sign Up
                </button>
              </li>
            </ul>

            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="text-white md:hidden"
            >
              {menuOpen ? (
                <AiOutlineClose size={25} />
              ) : (
                <AiOutlineMenu size={25} />
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="absolute top-20 right-0 w-full bg-white shadow-lg md:hidden">
            <ul className="flex flex-col items-center py-4 gap-3 text-gray-700">
              {mobileMenuLinks}
              <li>
                <button
                  onClick={() => setSignIn(true)}
                  className="w-full text-center py-2 px-3 bg-blue-600 text-white font-semibold rounded-md shadow-md"
                >
                  Sign In
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSignUp(true)}
                  className="w-full text-center py-2 px-3 bg-blue-600 text-white font-semibold rounded-md shadow-md"
                >
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
