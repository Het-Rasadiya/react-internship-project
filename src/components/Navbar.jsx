import React, { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="shadow-md sticky top-0 z-50 backdrop-blur-3xl">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-24">
        <div className="flex justify-between items-center py-4 sm:py-6 md:py-8">
          {/* logo */}
          <div className="flex items-center text-xl sm:text-2xl font-bold">
            <img className="w-10 h-10 sm:w-12 sm:h-12" src="./logo2.png" alt="logo" />
            <h1 className="text-primary">
              Food&<span className="text-accent">Flame</span>
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-dark">
            <a className="font-semibold hover:text-primary " href="#home">
              Home
            </a>
            <a className="font-semibold hover:text-primary " href="#about">
              About
            </a>
            <a className="font-semibold hover:text-primary " href="#menu">
              Menu
            </a>
            <a
              className="font-semibold hover:text-primary "
              href="#reservation"
            >
              Reservation
            </a>
            <a className="font-semibold hover:text-primary " href="#contact">
              Contact
            </a>
            
          </nav>
          <div className="md:hidden">
            {showMenu ? (
              <FaXmark
                onClick={() => setShowMenu(!showMenu)}
                className="text-xl cursor-pointer"
              />
            ) : (
              <FaBars
                onClick={() => setShowMenu(!showMenu)}
                className="text-xl cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>

      {showMenu && (
        <div className="md:hidden flex flex-col items-center space-y-6 py-12 sm:py-20 h-screen bg-white">
          <a
            onClick={() => setShowMenu(!showMenu)}
            className="font-semibold hover:text-primary "
            href="#home"
          >
            Home
          </a>
          <a
            onClick={() => setShowMenu(!showMenu)}
            className="font-semibold hover:text-primary "
            href="#about"
          >
            About
          </a>
          <a
            onClick={() => setShowMenu(!showMenu)}
            className="font-semibold hover:text-primary "
            href="#menu"
          >
            Menu
          </a>
          <a
            onClick={() => setShowMenu(!showMenu)}
            className="font-semibold hover:text-primary "
            href="#reservation"
          >
            Reservation
          </a>
          <a
            onClick={() => setShowMenu(!showMenu)}
            className="font-semibold hover:text-primary "
            href="#contact"
          >
            Contact
          </a>
          <Link
            onClick={() => setShowMenu(!showMenu)}
            className="font-semibold hover:text-primary"
            to="/admin-login"
          >
            Admin
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
