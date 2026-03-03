import React from "react";

const ItemModal = ({ isOpen, onClose, item }) => {
  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-4 sm:p-8 max-w-md w-full shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:right-4 hover:text-white text-xl border w-8 h-8 rounded-full bg-primary text-white cursor-pointer "
        >
          &times;
        </button>
        <img
          src={item.image}
          alt={item.title}
          className="rounded w-full h-40 sm:h-48 object-cover mb-4"
        />
        <h2 className="text-lg sm:text-xl font-semibold mb-2">{item.title}</h2>
        <p className="text-sm sm:text-base text-gray-600 mb-2">{item.description}</p>
        <p className="text-base sm:text-lg text-primary font-semibold">{item.price}</p>
      </div>
    </div>
  );
};

export default ItemModal;
