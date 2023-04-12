import React from "react";
import BoxMaxWidth from "./BoxMaxWidth";

function Footer() {
  const FindLink: React.FC<any> = ({ children, isBranch }) => {
    return (
      <div
        style={{
          fontWeight: `${isBranch ? "500" : "700"}`,
          textTransform: `${isBranch ? "capitalize" : "uppercase"}`,
        }}
      >
        {children}
      </div>
    );
  };

  const SocialLink: React.FC<any> = ({ children }) => {
    return (
      <div
        style={{
          background: "gray",
          width: "2em",
          height: "2em",
          borderRadius: "1em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
    );
  };
  return (
    <div style={{ background: "black" }}>
      <BoxMaxWidth>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "white",
            padding:'20px 0'
          }}
        >
          <div>
            <FindLink>Find a store</FindLink>
            <FindLink>Become a partner</FindLink>
            <FindLink>Sign up for email</FindLink>
            <FindLink>Send us feedback</FindLink>
            <FindLink>Student discount</FindLink>
          </div>
          <div>
            <FindLink>Get help</FindLink>
            <FindLink isBranch>Order Status</FindLink>
            <FindLink isBranch>Delivery</FindLink>
            <FindLink isBranch>Returns</FindLink>
            <FindLink isBranch>Payment Options</FindLink>
            <FindLink isBranch>Contact Us</FindLink>
          </div>
          <div>
            <FindLink>About Nike</FindLink>
            <FindLink isBranch>News</FindLink>
            <FindLink isBranch>Careers</FindLink>
            <FindLink isBranch>Investors</FindLink>
            <FindLink isBranch>Sustainability</FindLink>
          </div>
          <div style={{ display: "flex", gap: "1em" }}>
            <SocialLink>f</SocialLink>
            <SocialLink>t</SocialLink>
            <SocialLink>y</SocialLink>
            <SocialLink>i</SocialLink>
          </div>
        </div>
      </BoxMaxWidth>
    </div>
  );
}

export default Footer;
