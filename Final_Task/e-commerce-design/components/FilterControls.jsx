import React from "react";

const FilterControls = ({ filters, setFilters }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  return (
    <div className="my-6 grid grid-cols-1 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Brightness
        </label>
        <input
          type="range"
          name="brightness"
          min="50"
          max="150"
          value={filters.brightness}
          onChange={handleChange}
          className="w-full focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Contrast
        </label>
        <input
          type="range"
          name="contrast"
          min="50"
          max="150"
          value={filters.contrast}
          onChange={handleChange}
          className="w-full focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Saturation
        </label>
        <input
          type="range"
          name="saturation"
          min="50"
          max="150"
          value={filters.saturation}
          onChange={handleChange}
          className="w-full focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default FilterControls;
