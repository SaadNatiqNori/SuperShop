import React from "react";
// My Styles
import LPS from "../assets/css/pages/LayoutPageStyles.module.css";
// My Componenets
import Navbar from "./../components/shared/Navbar";
import Sidebar from "./../components/shared/Sidebar";
import { Outlet } from "react-router-dom";

export default function LayoutPage() {
  return (
    <div className={LPS.layout}>
      <div className={LPS.sidebar} id="sidebar">
        <Sidebar />
      </div>
      <div className={LPS.fragment}>
        <div className={LPS.navbar}>
          <Navbar />
        </div>
        <div className={LPS.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
