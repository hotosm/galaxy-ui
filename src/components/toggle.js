import React from "react";

export const SwitchToggle = ({ label, isChecked, handleChange }) => {
  return (
    <div className="flex items-center justify-start w-full my-4 px-4">
      <div className="mr-3 text-xl">{label}</div>
      <label
        htmlFor={`${label}-toggle`}
        className="flex items-center cursor-pointer"
      >
        <div className="relative">
          <input
            type="checkbox"
            id={`${label}-toggle`}
            className="sr-only"
            checked={isChecked}
            onChange={handleChange}
          />
          <div
            className={`block w-16 h-8 rounded-full transition duration-300 ease-in-out translate-x-full ${
              isChecked ? "bg-red" : "bg-blue-grey"
            }`}
          />
          <div
            className={`absolute top-0 left-0 bg-white w-8 h-8 border rounded-full transition duration-300 ease-in-out ${
              isChecked ? "transform translate-x-full" : ""
            }`}
          />
        </div>
      </label>
    </div>
  );
};
