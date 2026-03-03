import React from "react";

const TextAreaField = ({ label, placeholder, name, value, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-dark  mb-2 font-semibold">
        {label}
      </label>
      <textarea
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows="4"
        className="w-full px-4 py-2 rounded border placeholder:text-xs"
      ></textarea>
    </div>
  );
};

export default TextAreaField;
