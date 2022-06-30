import React from "react";

import SliderMenu from "./SliderMenu";
import BurgerMenu from "./BurgerMenu";
import "../assets/css/SearchBar.css";
import logo from "../assets/image/logo1.png";

function SearchBar({
  keyWordlist,
  setKeyWordlist,
  paramFilter,
  setParamFilter,
}) {
  return (
    <form className="search-bar">
      <div className="searchcontainer">
        <img src={logo} alt="logo" className="logosearchbar" />
      </div>
      <div className="search-bar-container">
        <div id="fields">
          <SliderMenu
            list={["cow", "tartine", "rhubarbe"]}
            category="componentTest"
            className="city-slider"
          />
          <SliderMenu
            list={["crue", "brulée ", "saignante", "PARPAIIING"]}
            category="Cuisson de tartine"
            className="cat-slider"
          />
          <div className="search-field">
            <input
              type="text"
              placeholder="Rechercher"
              className="inputsearchbar"
              onChange={(event) => setParamFilter(event.target.value)}
            />{" "}
            <button
              type="button"
              className="btnsearchbar"
              onClick={() =>
                keyWordlist.includes(paramFilter)
                  ? null
                  : setKeyWordlist([...keyWordlist, paramFilter])
              }
            >
              {" "}
              Recherche{" "}
            </button>
          </div>
        </div>
      </div>
      <BurgerMenu />
    </form>
  );
}

export default SearchBar;
