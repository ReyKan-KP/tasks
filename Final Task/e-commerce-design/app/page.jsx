"use client"
import { useState } from "react";
import DesignUploader from "../components/DesignUploader";
import TShirtPreview from "../components/TShirtPreview";
import DownloadButton from "../components/DownloadButton";
import ColorPicker from "../components/ColorPicker";
import FilterControls from "../components/FilterControls";

export default function Home() {
  const [design, setDesign] = useState(null);
  const [tshirtColor, setTshirtColor] = useState("#ffffff");
  const [filters, setFilters] = useState({
    brightness: 100,
    contrast: 100,
    saturation: 100,
  });



  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Customize Your T-shirt</h1>
      <DesignUploader setDesign={setDesign} />
      {design && (
        <>
          <ColorPicker setTshirtColor={setTshirtColor} />
          <FilterControls filters={filters} setFilters={setFilters} />
          <TShirtPreview
            design={design}
            tshirtColor={tshirtColor}
            filters={filters}
          />
          <DownloadButton />
        </>
      )}
    </div>
  );
}
