import React from "react";

const InputField = ({
  label,
  type = "text",
  placeholder,
  name,
  value,
  onChange,
  required = false,
}) => {
  const today = new Date().toISOString().split("T")[0];
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-dark mb-2 font-semibold">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        min={type === "date" ? today : undefined}
        className="w-full px-4 py-2 rounded border placeholder:text-xs"
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default InputField;
