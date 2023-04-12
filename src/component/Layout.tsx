import React, { ReactNode } from "react";
import ProcessLoadPage from "./ProcessLoadPage";
import Link from "next/link";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Toast from "./Toast";
import Popup from "./Popup";

interface LayoutP {
  children: ReactNode;
}
const Layout: React.FC<LayoutP> = ({ children }) => {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <ProcessLoadPage />
      <NavBar />
      <div style={{ flex: "1" }}>{children}</div>
      <div>
        <Footer />
      </div>
      <Toast />
      <Popup/>
    </div>
  );
};

export default Layout;
