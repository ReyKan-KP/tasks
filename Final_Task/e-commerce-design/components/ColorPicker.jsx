import React from "react";

const ColorPicker = ({ setTshirtColor }) => {
  const handleColorChange = (event) => {
    setTshirtColor(event.target.value);
  };

  return (
    <center className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Choose T-shirt Color
      </label>
      <input
        type="color"
        onChange={handleColorChange}
        className="w-16 h-16 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500"
      />
    </center>
  );
};

export default ColorPicker;
