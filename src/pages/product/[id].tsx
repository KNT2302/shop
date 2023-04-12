import BoxList from "@/component/BoxList";
import BoxMaxWidth from "@/component/BoxMaxWidth";
import DoAction from "@/component/DoAction";
import RecommendList from "@/component/RecommendList";
import React from "react";
import { DehydratedState, dehydrate, useQuery } from "react-query";
import { queryClient } from "../_app";
import { data } from "@/data";
import { useRouter } from "next/router";
import SlideImage from "@/component/SlideImage";
import AddToCard from "@/feature/product/AddToCart";
import WhishList from "@/feature/product/WhistList";
import { GetStaticPropsContext } from "next";

const Product: React.FC = () => {
  const { query } = useRouter();
  const idProduct = query.id ? +query.id : -1;
  const { data } = useQuery(
    ["product", query.id],
    () => getProduct(idProduct),
    {
      staleTime: Infinity,
    }
  );
  const product = data;

  return (
    <div>
      <BoxMaxWidth>
        <>
          {product && (
            <>
              <div style={{ display: "flex" }}>
                <div style={{ flex: "1" }}>
                  <SlideImage images={product?.image} />
                </div>
                <div style={{ flex: "1" }}>
                  <div
                    style={{
                      width: "100%",
                      maxWidth: "300px",
                      margin: "0 auto",
                    }}
                  >
                    <div>
                      <h1>{product?.name}</h1>
                      <p>{product?.type}</p>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <p>{product?.price}</p>
                        <p style={{ color: "darkgreen" }}>
                          {product?.discount} off
                        </p>
                      </div>
                    </div>
                    <div style={{ height: "2em" }}></div>

                    <div>
                      <AddToCard item={product} />
                      <div style={{ height: ".5em" }}></div>
                      <WhishList />
                    </div>
                  </div>
                </div>
              </div>
              <RecommendList />
            </>
          )}
        </>
      </BoxMaxWidth>
    </div>
  );
};

export default Product;

const getProduct = (id: number) => {
  const resData = data.filter((product) => product.id == id);
  return resData[0];
};

export const getStaticPaths = () => {
  const paths = data.map((product: any) => {
    return {
      params: {
        id: product.id + "",
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const idProduct = ctx.params?.id || "-1";
  await queryClient.prefetchQuery(["product", ctx.params?.id], () =>
    getProduct(+idProduct)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
