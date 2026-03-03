import { useState } from "react";
import React from "react";
import InputField from "./InputField";
import SelectInput from "./SelectInput";
import {
  partySizeOptions,
  tableRefOptions,
  timeOptions,
} from "../assets/assets";
import TextAreaField from "./TextAreaField";
import BookingModal from "./BookingModal";

const Reservation = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    specialRequest: "",
    email: "",
    time: "",
    partySize: "",
    tableRef: "",
    date: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservations = JSON.parse(localStorage.getItem("reservations") || "[]");
    reservations.push(formData);
    localStorage.setItem("reservations", JSON.stringify(reservations));
    setIsModalOpen(true);
    // reset form data
    setFormData({
      fullName: "",
      phone: "",
      specialRequest: "",
      email: "",
      time: "",
      date: "",
      partySize: "",
      tableRef: "",
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="reservation" className="w-full bg-secondary py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-xl sm:text-2xl md:text-3xl text-dark font-bold mb-4">
            Make a Reservation
          </h1>
          <div className="w-20 h-1 bg-primary mb-4 mx-auto"></div>
          <p className="text-sm sm:text-base text-gray-700">
            Book your table in advance to ensure the best dining experience
          </p>
        </div>
        {/* Reservatyion form  */}
        <div className="max-w-2xl mx-auto bg-gray-50 p-4 sm:p-6 md:p-8 rounded shadow">
          {/* booking form  */}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              <InputField
                label="Date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
              <SelectInput
                label="Time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                options={timeOptions}
                required
              />
              <SelectInput
                label="Party Size"
                name="partySize"
                value={formData.partySize}
                onChange={handleChange}
                options={partySizeOptions}
                required
              />
              <SelectInput
                label="Table Prefrence"
                name="tableRef"
                value={formData.tableRef}
                onChange={handleChange}
                options={tableRefOptions}
                required
              />
              <InputField
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />

              <InputField
                label="Phone Number"
                name="phone"
                value={formData.phone}
                type="tel"
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
              <InputField
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
              <TextAreaField
                label="Special Request"
                placeholder="Any Special requests?"
                name="specialRequest"
                value={formData.specialRequest}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="mt-4 w-full bg-primary text-white py-2 sm:py-3 px-4 rounded hover:bg-red-700 cursor-pointer text-sm sm:text-base"
            >
              Confirm Reservation
            </button>
          </form>

          {/* booking confirm modal  */}
          <BookingModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default Reservation;
