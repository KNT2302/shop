import React, { ReactElement } from "react";
import { useQuery } from "react-query";
import { toast } from "./Toast";

export const message: { message: ReactElement | null } = { message: null };

const Popup = () => {
  const { data } = useQuery("popup", () => message);

  return (
    <div>
      {data?.message && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>{data.message}</div>
        </div>
      )}
    </div>
  );
};

export default Popup;
