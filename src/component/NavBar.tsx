/* eslint-disable @next/next/no-img-element */
import React from "react";
import BoxMaxWidth from "./BoxMaxWidth";
import PageLink from "./PageLink";



const NavBar = () => {
  const Logo = () => {
    return (
      <div style={{ width: "50px" }}>
        <img
          style={{
            width: "100%",
          }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png"
          alt="logo"
        />
      </div>
    );
  };
  const Navigate = () => {
    return (
      <div
        style={{
          display: "flex",
        }}
      >
        <div style={{ padding: ".5em 1em" }}>
          <PageLink name="Home" href="/" />
        </div>
        <div style={{ padding: ".5em 1em" }}>
          <PageLink name="About" href="/about" />
        </div>
        <div style={{ padding: ".5em 1em" }}>
          <PageLink name="Contact" href="/contact" />
        </div>
      </div>
    );
  };
  return (
    <BoxMaxWidth>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding:'1.5em 0'
        }}
      >
        <Logo />
        <Navigate />
        <div>
          Notify
          <PageLink name="Cart" href="/cart" />
        </div>
      </div>
    </BoxMaxWidth>
  );
};

export default NavBar;
