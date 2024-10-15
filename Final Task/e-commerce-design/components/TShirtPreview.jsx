import React from "react";
import Image from "next/image";
import { Rnd } from "react-rnd";

const TShirtPreview = ({ design, tshirtColor, filters }) => {
  const { brightness, contrast, saturation } = filters;

  return (
    <div id="tshirt-preview" className="relative inline-block">
      <div
        className="relative bg-transparent"
        style={{
          backgroundColor: tshirtColor,
          width: "50vw",
          height: "40vh",
        }}
      >
        <Image
          src="/tshirt.png"
          alt="T-shirt"
          layout="fill"
          // objectFit="contain"
          style={{ mixBlendMode: "multiply" }}
        />
      </div>

      {/* Draggable/Resizable Design */}
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
