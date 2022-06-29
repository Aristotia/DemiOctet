import React from "react";
import { slide as Menu } from "react-burger-menu";
import "../assets/css/burger.css";

function BurgerMenu() {
  return (
    <div className="burgercontainer">
      <Menu left>
        <a id="home" className="menu-item" href="/">
          cou
        </a>
        <a id="about" className="menu-item" href="/about">
          cou
        </a>
        <a id="contact" className="menu-item" href="/contact">
          ici
        </a>
      </Menu>
    </div>
  );
}

export default BurgerMenu;
