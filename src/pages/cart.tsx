/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { cart } from "@/cart";
import BoxMaxWidth from "@/component/BoxMaxWidth";
import React from "react";
import { dehydrate, useQuery } from "react-query";
import { queryClient } from "./_app";
import Checkout from "@/feature/cart/Checkout";
import CartItem from "@/feature/cart/CartItem";
import { NextPage } from "next";

const Cart:NextPage = () => {
  const { data } = useQuery("cart", getCart);
  const cart = data;

  if (cart?.items.length) {
    return (
      <div>
        <BoxMaxWidth>
          <div>
            <h1>Shopping Cart</h1>
            <div style={{ display: "flex" }}>
              <div style={{ width: "70%" }}>
                <h2>Cart items</h2>
                {cart?.items.map((item: any, index: any) => {
                  return <CartItem key={index} item={item} />;
                })}
              </div>
              <div style={{ width: "30%" }}>
                <Checkout total={cart?.total} />
              </div>
            </div>
          </div>
        </BoxMaxWidth>
      </div>
    );
  }
  return (
    <div>
      <BoxMaxWidth>
        <div style={{ width: "100%", maxWidth: "500px", margin: "0 auto" }}>
          <img
            style={{ width: "100%" }}
            src="https://janchetnabooks.org/assets/empty-cart.png"
          />
          <div style={{ height: "4em" }}></div>
          <h1 style={{ color: "red", textAlign: "center" }}>Opps!</h1>
          <p style={{ fontSize: "1.2em", textAlign: "center" }}>
            Your shooping cart is empty
          </p>
        </div>
      </BoxMaxWidth>
    </div>
  );
};

export default Cart;

const getCart = () => {
  return cart;
};

export const getServerSideProps = async () => {
  await queryClient.prefetchQuery("cart", getCart);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
