/* eslint-disable @next/next/no-img-element */
import { wait } from "@/ulties/common";
import React, { useEffect, useRef, useState } from "react";

interface ImageListI {
  images: string[];
  setImage: (image: string) => void;
}

const ImageList: React.FC<ImageListI> = ({ images, setImage }) => {
  const [imageWatched, setIamgeWatched] = useState<string>(() => images[0]);

  const handleChooseImage = (image: string) => {
    setImage(image);
    setIamgeWatched(image);
  };
  return (
    <>
      {images.map((image, index) => {
        return (
          <div
            key={index}
            style={{ width: "100%", position: "relative", cursor: "pointer" }}
            onClick={() => handleChooseImage(image)}
          >
            {imageWatched === image && (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: "rgba(0,0,0,0.2)",
                  position: "absolute",
                  top: "0",
                  left: "0",
                }}
              ></div>
            )}

            <img
              style={{ width: "100%", height: "auto" }}
              src={image}
              alt="shoe"
            />
          </div>
        );
      })}
    </>
  );
};

export default ImageList;
