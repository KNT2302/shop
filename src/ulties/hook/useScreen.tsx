import React, { useEffect, useState } from "react";

const breakpoint = {
  "1200px": 1200,
  "900px": 900,
  "600px": 600,
  "400px": 400,
};

const useScreen = () => {
  const [screen, setScreen] = useState<any>();

  const setSize = (size: number) => {
    const sizes = Object.values(breakpoint).reverse();
    for (let i = 0; i < sizes.length; i++) {
      if (i === sizes.length - 1) {
        setScreen(sizes[i]);
      }
      if (size <= sizes[i]) {
        setScreen(sizes[i]);
        return;
      }
    }
  };

  useEffect(() => {
    setSize(window.innerWidth);
    window.addEventListener("resize", (e: any) => {
      setSize(e.currentTarget?.innerWidth);
    });
  }, []);

  return {
    screen,
  };
};

export default useScreen;
