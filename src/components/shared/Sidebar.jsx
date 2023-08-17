import React, { useState } from "react";
import { Link } from "react-router-dom";
// My Styles
import SS from "../../assets/css/components/shared/SidebarStyles.module.css";
// My Icons & Images
import burgerButtonImg from "../../assets/icons/burgerButton.png";
import productsIcon from "../../assets/icons/productsIcon.png";

export default function Sidebar() {
  // Open & Close Sidebar Function
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const handleToggleMenu = () => {
    let menu = document.getElementById("sidebar");
    if (toggleSidebar) {
      menu.style.width = "6%";
      setToggleSidebar(false);
    } else {
      menu.style.width = "25%";
      setToggleSidebar(true);
    }
  };
  return (
    <div className={SS.sidebar}>
      <div className={SS.head} onClick={handleToggleMenu}>
        <img src={burgerButtonImg} width={48} height={48} alt="menu-icon" />
      </div>
      <div className={SS.content}>
        <ul>
          <Link to="/products">
            <li>
              <img src={productsIcon} width={34} height={34} alt="menu-icon" />
              {toggleSidebar ? <p>Products</p> : ""}
            </li>
          </Link>
          <Link to="/notes">
            <li>
              <img src={productsIcon} width={34} height={34} alt="menu-icon" />
              {toggleSidebar ? <p>Notes</p> : ""}
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
