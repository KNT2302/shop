import { wait } from "@/ulties/common";
import { time } from "console";
import React, { ReactElement, useEffect, useRef, useState } from "react";

interface DoActionI {
  children: ReactElement;
  disable?: boolean;
  onClick: () => Promise<any>;
}
const DoAction: React.FC<DoActionI> = ({ onClick, children, disable }) => {
  const [isDisable, setIsDisable] = useState(() => disable);
  const [isLoading, setIsLoading] = useState(false);
  const timer = useRef<any>();
  const handleOnClick = async () => {
    setIsDisable(true);
    setIsLoading(true);
    wait(250, timer).then(async () => {
      await onClick();
      setIsDisable(false);
      setIsLoading(false);
    });
  };

  return (
    <button
      style={{
        width: "100%",
        border: "none",
        background: "none",
        overflow: "hidden",
      }}
      disabled={isDisable}
      onClick={handleOnClick}
    >
      {!isLoading ? children : <div>Processing...</div>}
    </button>
  );
};

export default DoAction;
