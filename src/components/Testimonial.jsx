import React, { useEffect, useState } from "react";
import { testimonials } from "../assets/assets";

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const { name, message, image } = testimonials[index];

  const prev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const next = () => {
    setIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-12 sm:py-16 md:py-20 bg-gray-100">
      <h2 className="text-center text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 px-4">
        What Our Customers Say
      </h2>
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-4 sm:p-6 text-center transition-all duration-500 mx-4">
        <img
          className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full mb-4 object-cover"
          src={image}
          alt=""
        />
        <p className="text-sm sm:text-base text-gray-600 mb-4">{message}</p>
        <h1 className="font-semibold text-base sm:text-lg">{name}</h1>
      </div>
      <div className="flex justify-center mt-4 sm:mt-6 space-x-4 sm:space-x-6">
        <button
          onClick={prev}
          className="bg-white border-gray-300 border p-3 rounded-full hover:bg-gray-200 transition cursor-pointer"
        >
          &#8592;
        </button>
        <button
          onClick={next}
          className="bg-white border-gray-300 border p-3 rounded-full hover:bg-gray-200 transition cursor-pointer"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
