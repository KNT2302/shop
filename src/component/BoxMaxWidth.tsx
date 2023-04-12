import React, { ReactElement } from "react";

const BoxMaxWidth = ({ children }: { children: ReactElement }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "0 20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default BoxMaxWidth;
