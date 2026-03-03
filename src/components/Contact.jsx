import React, { useState } from "react";
import { BiHandicap } from "react-icons/bi";
import { FaClock, FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";

const Contact = () => {
  const [FormData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevstate) => {
      return {
        ...prevstate,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  return (
    <div id="contact" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl text-dark font-bold mb-4">Let's Talk</h1>
          <div className="w-20 h-1 mx-auto bg-primary mb-4"></div>
          <p className="text-sm sm:text-base text-gray-700">We'd love to hear from you</p>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* left  side  */}
          <div className="w-full md:w-1/2">
            <div className="w-full overflow-hidden p-4 sm:p-6 md:p-8">
              <h1 className="text-xl sm:text-2xl mb-4 sm:mb-6 text-dark font-bold">
                Get in Touch
              </h1>
              <div className="flex items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <FaLocationArrow />
                </div>
                <div>
                  <p className="text-base sm:text-lg md:text-xl text-dark font-semibold">Address</p>
                  <p className="text-sm sm:text-base">VIP Road, Food Street, Vesu, Surat</p>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <FaPhone />
                </div>
                <div>
                  <p className="text-base sm:text-lg md:text-xl text-dark font-semibold">Phone</p>
                  <p className="text-sm sm:text-base">+91 12345 67890</p>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-base sm:text-lg md:text-xl text-dark font-semibold">
                    Email Address
                  </p>
                  <p className="text-sm sm:text-base">info@foodflame.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <FaClock />
                </div>
                <div>
                  <p className="text-base sm:text-lg md:text-xl text-dark font-semibold">Hours</p>
                  <p className="text-sm sm:text-base">
                    Monday - Thursday: 5:00 PM - 10:00 PM <br /> Friday -
                    Saturday: 5:00 PM - 11:00 PM <br /> Sunday: 11:00 AM - 9:00
                    PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* right side form  */}
          <div className="w-full md:w-1/2">
            <div className="w-full rounded-xl shadow-xl overflow-hidden p-4 sm:p-6 md:p-8">
              <h1 className="mb-4 sm:mb-6 text-xl sm:text-2xl text-dark font-bold">
                Send a Message
              </h1>
              <form onSubmit={handleSubmit}>
                <InputField
                  name="fullName"
                  label="Full Name"
                  value={FormData.fullName}
                  placeholder="Full Name"
                  onChange={handleChange}
                />
                <InputField
                  name="email"
                  label="Email"
                  value={FormData.email}
                  placeholder="email"
                  onChange={handleChange}
                />
                <InputField
                  name="subject"
                  label="Subject"
                  value={FormData.subject}
                  placeholder="subject"
                  onChange={handleChange}
                />
                <TextAreaField
                  name="message"
                  value={FormData.message}
                  label="Message"
                  placeholder="Message"
                  onChange={handleChange}
                />

                <button
                  type="submit"
                  className="mt-4 bg-primary text-white py-2 sm:py-3 px-6 sm:px-8 rounded-full hover:bg-red-700 cursor-pointer text-sm sm:text-base"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
