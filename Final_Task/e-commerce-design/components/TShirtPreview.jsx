import React from "react";
import Image from "next/image";
import { Rnd } from "react-rnd";

const TShirtPreview = ({ design, tshirtColor, filters }) => {
  const { brightness, contrast, saturation } = filters;

  return (
    <div id="tshirt-preview" className="relative inline-block mt-6">
      <div
        className="relative bg-transparent rounded-lg shadow-md"
        style={{
          backgroundColor: tshirtColor,
          width: "38rem",
          height: "40vh",
        }}
      >
        <Image
          src="/tshirt.png"
          alt="T-shirt"
          layout="fill"
          style={{ mixBlendMode: "multiply" }}
        />
      </div>

      {design && (
        <Rnd
          default={{
            x: 100,
            y: 100,
            width: 200,
            height: 200,
          }}
          bounds="parent"
        >
          <img
            src={design}
            alt="Design"
            className="absolute"
            style={{
              width: "100%",
              height: "100%",
              filter: `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)`,
            }}
          />
        </Rnd>
      )}
    </div>
  );
};

export default TShirtPreview;
