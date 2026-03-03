import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-12 sm:py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* first col  */}
          <div>
            <h1 className="text-lg sm:text-xl font-semibold mb-4">
              Food&<span className="text-primary"> Flame</span>
            </h1>
            <p className="text-sm sm:text-base">
              Experience the finest culinary journey in the heart of the city.
            </p>
          </div>

          {/* second col  */}
          <div>
            <h1 className="text-lg sm:text-xl text-dark font-semibold mb-4">
              Quick Links
            </h1>
            <ul className="space-y-2 text-sm sm:text-base">
              <li className="hover:text-primary cursor-pointer">
                <a href="/">Home</a>
              </li>

              <li className="hover:text-primary cursor-pointer">
                <a href="#about">About</a>
              </li>
              <li className="hover:text-primary cursor-pointer">
                <a href="#menu">Menu</a>
              </li>
              <li className="hover:text-primary cursor-pointer">
                <a href="#reservation">Reservation</a>
              </li>
              <li className="hover:text-primary cursor-pointer">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* third col  */}
          <div>
            <h1 className="text-lg sm:text-xl text-dark font-semibold mb-4">
              Contact Info
            </h1>
            <ul className="space-y-4 text-sm sm:text-base">
              <li>VIP Road, Food Street, Vesu, Surat</li>
              <li>+91 12345 67890</li>
              <li>info@foodflame.com</li>
            </ul>
          </div>

          {/* four col  */}
          <div>
            <h1 className="text-lg sm:text-xl text-dark font-bold mb-4">Follow Us</h1>
            <div className="flex items-center gap-3 sm:gap-4 mb-6">
              <div className="w-10 h-10 bg-primary text-white flex items-center justify-center rounded-full">
                <FaFacebook className="text-2xl" />
              </div>
              <div className="w-10 h-10 bg-primary text-white flex items-center justify-center rounded-full">
                <FaInstagram className="text-2xl" />
              </div>
              <div className="w-10 h-10 bg-primary text-white flex items-center justify-center rounded-full">
                <FaLinkedin className="text-2xl" />
              </div>
              <div className="w-10 h-10 bg-primary text-white flex items-center justify-center rounded-full">
                <FaTwitter className="text-2xl" />
              </div>
            </div>

            <div>
              <h1 className="text-lg sm:text-xl font-bold text-dark mb-4">
                Subscibe to Newsletter
              </h1>
              <div className="flex border border-primary rounded">
                <input
                  type="email"
                  className="w-full px-3 sm:px-4 py-2 rounded outline-none placeholder:text-xs sm:placeholder:text-sm"
                  placeholder="Your Email "
                />
                <button className="border-l px-3 sm:px-4 py-2 cursor-pointer bg-primary text-white rounded-r">
                  <FaLocationArrow />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t py-4 mt-6 border-gray-300">
          <p className="text-dark/50 text-center text-xs sm:text-sm md:text-base">
            © 2026 Food&Flame. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
