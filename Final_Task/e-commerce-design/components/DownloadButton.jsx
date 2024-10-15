import React from "react";
import { toPng } from "html-to-image";

const DownloadButton = () => {
  const handleDownload = () => {
    const node = document.getElementById("tshirt-preview");
    toPng(node)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "tshirt-preview.png";
        link.click();
      })
      .catch((error) => {
        console.error("oops, something went wrong!", error);
      });
  };

  return (
    <center>
      <button
        onClick={handleDownload}
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500"
      >
        Download T-shirt Preview
      </button>
    </center>
  );
};

export default DownloadButton;
