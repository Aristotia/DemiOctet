import React, { useEffect, useState } from "react";
import axios from "axios";
import SliderMenu from "./SliderMenu";
import "../assets/css/SearchBar.css";
import logo from "../assets/image/logo1.png";
import SliderMenuSector from "./SliderMenuSector";

function SearchBar({
  keyWordlist,
  setKeyWordlist,
  paramFilter,
  setParamFilter,
}) {
  const [agenciesList, setAgenciesList] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/agencies`)
      .then((res) => {
        setAgenciesList(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  const sector = [
    "Banque",
    "Assurance",
    "Mutuelles/Retraites",
    "Telecoms",
    "Multimedia",
    "Retail",
    "Defense",
    "Aeronautique",
    "Spatial",
    "Automobile/Transport",
  ];
  return (
    <form className="search-bar">
      <div className="searchcontainer">
        <img src={logo} alt="logo" className="logosearchbar" />
      </div>
      <div className="search-bar-container">
        {agenciesList ? (
          <SliderMenu
            list={agenciesList}
            category="Ville :"
            className="city-slider"
          />
        ) : null}
        <SliderMenuSector
          list={sector}
          category="Categorie :"
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
    </form>
  );
}

export default SearchBar;
