import React from "react";
import { assets } from "../assets/assets";
import { FaUtensils, FaWineGlassAlt } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl mb-4 font-bold text-dark">
            Our Story
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
          {/* left  section */}
          <div className="md:w-1/2">
            <img
              className="w-full h-full object-cover rounded-xl"
              src={assets.aboutImg}
              alt="aboutImg"
            />
          </div>
          {/* right  section */}
          <div className="md:w-1/2">
            <h3 className="text-2xl sm:text-3xl font-semibold text-dark mb-4 sm:mb-6 md:mb-8">
              A Culinary Journey
            </h3>
            <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
              Founded in 2010, Fork & Flame brings together world-class chefs
              and sommeliers to create an unforgettable dining experience. Our
              philosophy is simple: exceptional food, impeccable service, and a
              warm atmosphere.
            </p>
            <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
              We source our ingredients from local farmers and producers,
              ensuring the freshest seasonal dishes that celebrate the region's
              bounty while supporting our community.
            </p>
            {/* button section  */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center">
                  <FaUtensils className="text-white text-base sm:text-xl" />
                </div>
                <span className="text-sm sm:text-base text-dark font-semibold">Fine Dining</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center">
                  <FaWineGlassAlt className="text-white text-base sm:text-xl" />
                </div>
                <span className="text-sm sm:text-base text-dark font-semibold">Wine Pairing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
