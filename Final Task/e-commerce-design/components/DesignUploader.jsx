import React from "react";

const DesignUploader = ({ setDesign }) => {
  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const imgBase64 = reader.result;
        const imageWithoutBg = await removeBackground(imgBase64);
        setDesign(imageWithoutBg || imgBase64);
      };
      reader.readAsDataURL(file);
    }
  };


  return (
    <div className="mb-6">
      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
      />
    </div>
  );
};

export default DesignUploader;
