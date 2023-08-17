import React from "react";
// WMS is Abbreviation of WelcomeScreenStyles
import WSS from "../assets/css/components/WelcomeScreenStyles.module.css";

export default function WelcomeScreen() {
  return (
    <div className={WSS.WelcomeScreen}>
      <h1>
        <b>Welcome to SuperShop!</b>
      </h1>
      <p>Find your daily super products.</p>
    </div>
  );
}
