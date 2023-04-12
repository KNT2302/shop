import useScreen from "@/ulties/hook/useScreen";
import React, { ReactElement, useState } from "react";

interface BoxListI {
  space?: number;
  padding?: number;
  getCardContent: (card: any) => ReactElement;
  list?: any[];
  breakpoint?: {
    [px: number]: number;
  };
}

const BoxList: React.FC<BoxListI> = ({
  space = 10,
  padding = 10,
  getCardContent,
  list = [],
  breakpoint = {
    1200: 4,
    900: 3,
    600: 2,
    400: 1,
  },
}) => {
  const { screen } = useScreen();

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        marginLeft: `-${space + padding}px`,
        marginRight: `-${padding}px`,
      }}
    >
      {list.map((item: any, index: any) => {
        return (
          <div
            key={index}
            style={{
              width: `${(1 / breakpoint[screen]) * 100}%`,
            }}
          >
            <div
              style={{
                width: `calc(100% + ${space}px)`,
                padding: `${space}px`,
                marginTop: `-${space}px`,
              }}
            >
              {getCardContent(item)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BoxList;
