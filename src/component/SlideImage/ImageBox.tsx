/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

const ImageBox: React.FC<{image:string}> = ({ image }) => {
  const [translateX, setTranslateX] = useState(50);
  const [opacity, setOpacity] = useState(0.5);
  useEffect(() => {
    setTranslateX(0);
    setOpacity(1);
  }, []);
  return (
    <div style={{ overflow: "hidden", background: "#f6f6f6" }}>
      <img
        style={{
          width: "100%",
          height: "auto",
          transform: `translateX(${translateX}%)`,
          opacity,
          transition: ".3s",
        }}
        src={image}
        alt="shoe"
      />
    </div>
  );
};

export default ImageBox
