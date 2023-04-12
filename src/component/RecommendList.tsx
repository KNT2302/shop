/* eslint-disable @next/next/no-img-element */
import React from "react";
import BoxList from "./BoxList";
import Link from "next/link";

const getCardContent = () => {
  return (
    <Link
      href="/product/1"
      style={{ textDecoration: "none", color: "black" }}
    >
      <div style={{ padding: "10px 10px", border: "1px solid" }}>
        <img
          style={{ width: "100%", height: "auto" }}
          src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/585e2cd2-4f2a-408c-a8ba-f89952cdf332/revolution-6-next-nature-road-running-shoes-NC0P7k.png"
          alt="shoe"
        />
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h1 style={{ fontSize: "18px" }}>Air Jordan</h1>
            <p>10</p>
          </div>
          <div>Discount</div>
        </div>
      </div>
    </Link>
  );
};

const RecommendList = () => {
  return (
    <div>
      <div style={{height:'5em'}}></div>
      <h2>You might also like</h2>
      <div style={{height:'1em'}}></div>
      <BoxList getCardContent={getCardContent} />
    </div>
  );
};

export default RecommendList;
