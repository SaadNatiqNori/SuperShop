import React from "react";
// Loading Styles
import LSS from "../../../assets/css/components/shared/others/LoadingSpinner.module.css";

export default function LoadingSpinner() {
  return (
    <div className={LSS.loadingParent}>
      <div className={LSS.ldsDefault}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <br />
      <p>
        <b>Loading ...</b>
      </p>
    </div>
  );
}
