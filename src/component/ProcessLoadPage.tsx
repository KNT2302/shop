import React, { useRef, useState } from "react";
import LoadingBar from "./LoadingBar";
import { Router } from "next/router";
import { wait } from "@/ulties/common";

const ProcessLoadPage = () => {
  const timer = useRef<any>();
  const timer1 = useRef<any>();
  const triggerRouteChange = (setPrecent: any) => {
    Router.events.on("routeChangeStart", () => {
      clearTimeout(timer.current);
      clearTimeout(timer1.current);
      setPrecent(0);
    });

    Router.events.on("routeChangeComplete", () => {
      // wait(250, timer).then(() => {
      //   setPrecent(10);
      //   wait(250, timer1).then(() => {
      //     setPrecent(100);
      //   });
      // });
      setPrecent(100);
    });
  };

  return (
    <div style={{ height: "3px", width: "100%" }}>
      <LoadingBar triggerPrecent={triggerRouteChange}></LoadingBar>
    </div>
  );
};

export default ProcessLoadPage;
