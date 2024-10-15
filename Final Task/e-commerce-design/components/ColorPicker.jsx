import React from "react";

const ColorPicker = ({ setTshirtColor }) => {
  const handleColorChange = (event) => {
    setTshirtColor(event.target.value);
  };

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Choose T-shirt Color
      </label>
      <input
        type="color"
        onChange={handleColorChange}
        className="w-16 h-16 rounded-lg shadow"
      />
    </div>
  );
};

export default ColorPicker;
