/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import BoxMaxWidth from "@/component/BoxMaxWidth";
import BoxList from "@/component/BoxList";
import Link from "next/link";
import { useQuery, dehydrate } from "react-query";
import { queryClient } from "./_app";
import { data } from "@/data";
import ListRecommendProduct from "@/feature/home/ListRecommendProduct";
import { NextPage } from "next";

const inter = Inter({ subsets: ["latin"] });

const Sologan = () => {
  return (
    <BoxMaxWidth>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1em",
        }}
      >
        <h1>Cushioning for Your Miles</h1>
        <p style={{ maxWidth: "500px", width: "100%", textAlign: "center" }}>
          A lightweight Nike ZoomX midsole is combined with increased stack
          heights to help provide sushioning during extended stretches of
          running.
        </p>
      </div>
    </BoxMaxWidth>
  );
};

const Banner = () => {
  return (
    <BoxMaxWidth>
      <div
        style={{
          position: "relative",
          minHeight: "200px",
          background: "#f6f6f6",
        }}
      >
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <img
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "500px",
            }}
            src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/a162ca4b-a442-4182-bfa0-4be07063e623/air-max-alpha-trainer-5-training-shoes-x8Jzj6.png"
          />
        </div>
        <div
          style={{
            position: "absolute",
            left: "0",
            bottom: "20px",
            padding: "1em",
          }}
        >
          <div style={{ border: "1px solid black", padding: ".5em 1em" }}>
            SHOP NOW
          </div>
        </div>
      </div>
    </BoxMaxWidth>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner />
        <Sologan />
        <BoxMaxWidth>
          <div style={{ paddingTop: "10px" }}>
            <ListRecommendProduct />
          </div>
        </BoxMaxWidth>
      </main>
    </>
  );
};

export default Home
