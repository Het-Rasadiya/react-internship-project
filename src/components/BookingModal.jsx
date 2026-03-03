import React from "react";
import { FaCheck } from "react-icons/fa";

const BookingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 max-w-md w-full shadow-lg">
        <div className="text-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaCheck className="text-green-600 text-lg sm:text-xl" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
            Booking Confirmed!
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
            Your table has been successfully reserved. We look forward to
            serving you!
          </p>
          <button
            onClick={onClose}
            className="bg-primary hover:bg-red-800 text-white font-bold py-2 px-4 sm:px-6 rounded-lg transition cursor-pointer text-sm sm:text-base"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
