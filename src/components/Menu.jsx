import React, { useState } from "react";
import { foodMenu } from "../assets/assets";
import ItemModal from "./ItemModal";

const Menu = () => {
  const getMenuItems = () => {
    const stored = localStorage.getItem("menuItems");
    if (!stored) {
      localStorage.setItem("menuItems", JSON.stringify(foodMenu));
      return foodMenu;
    }
    return JSON.parse(stored);
  };

  const [menuItems] = useState(getMenuItems());
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };
  return (
    <div id="menu" className="py-12 sm:py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl text-dark font-bold mb-4 sm:mb-6">Our Menu</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8">
            Crafted with passion and the finest ingredients
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {menuItems.map((food, index) => (
              <div
                onClick={() => openModal(food)}
                key={index}
                className="rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition duration-300 cursor-pointer"
              >
                <img
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                  src={food.image}
                  alt="food-menu"
                />
                <div className="p-3 sm:p-4">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h1 className="text-base sm:text-lg md:text-xl text-dark font-semibold">
                      {food.title}
                    </h1>
                    <span className="text-sm text-primary font-semibold">
                      {food.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 ">{food.ingredients}</p>
                </div>
              </div>
            ))}
          </div>
          <ItemModal
            isOpen={isModalOpen}
            onClose={closeModal}
            item={selectedItem}
          />

          <div className="text-center">
            <button className="bg-primary hover:scale-105 transition duration-300 px-6 sm:px-8 py-2 sm:py-3 rounded-full mt-8 sm:mt-12 text-white cursor-pointer text-sm sm:text-base">
              View Full Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
