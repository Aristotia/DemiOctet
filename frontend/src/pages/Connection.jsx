import React from "react";
import SearchBar from "../components/SearchBar";
import BurgerMenu from "../components/BurgerMenu";

function Connection() {
  return (
    <div className="homecontainer">
      <BurgerMenu />

      <div className="leftside">coucou</div>
      <div className="rightside"> lol</div>
      <SearchBar />
    </div>
  );
}

export default Connection;
