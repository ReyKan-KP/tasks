import React from "react";

const DesignUploader = ({ setDesign }) => {
  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const imgBase64 = reader.result;
        setDesign(imgBase64);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mb-8">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Upload Your Design
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
  );
};

export default DesignUploader;
