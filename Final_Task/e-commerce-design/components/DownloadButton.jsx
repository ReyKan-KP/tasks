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
    <button
      onClick={handleDownload}
      className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Download T-shirt Preview
    </button>
  );
};

export default DownloadButton;
