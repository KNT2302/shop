import { wait } from "@/ulties/common";
import React, { useEffect, useRef, useState } from "react";

interface LoadingBarI {
  triggerPrecent: (
    setPrecent: React.Dispatch<React.SetStateAction<number>>
  ) => void;
}
const LoadingBar: React.FC<LoadingBarI> = ({ triggerPrecent }) => {
  const [precent, setPrecent] = useState(0);

  const timer = useRef<any>();

  useEffect(() => {
    clearTimeout(timer.current);
  });

  useEffect(() => {
    if (precent === 100) {
      wait(250, timer).then(() => {
        setPrecent(0);
      });
    }
  }, [precent]);

  useEffect(() => {
    triggerPrecent(setPrecent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {precent > 0 && (
        <div
          style={{
            width: `${precent}%`,
            height: "100%",
            background: "black",
            transition: ".25s",
          }}
        ></div>
      )}
    </>
  );
};

export default LoadingBar;
