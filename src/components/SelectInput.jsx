import React from "react";

const SelectInput = ({ label, name, value, onChange, options, required = false }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-dark mb-2 font-semibold">
        {label}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 rounded border text-xs "
        required={required}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
