import React, { useState } from "react";
import "../assets/css/SearchBar.css";

function SearchBar() {
  const [keyWordlist, setKeyWordlist] = useState([]);
  const [paramFilter, setParamFilter] = useState("");

  const deletekeyWordlist = (keyWord) => {
    const index = keyWordlist.indexOf(keyWord);
    setKeyWordlist([
      ...keyWordlist.slice(0, index),
      ...keyWordlist.slice(index + 1),
    ]);
  };
  return (
    <form className="search-bar">
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Rechercher"
          onChange={(event) => setParamFilter(event.target.value)}
        />{" "}
        <button
          type="button"
          onClick={() =>
            keyWordlist.includes(paramFilter)
              ? null
              : setKeyWordlist([...keyWordlist, paramFilter])
          }
        >
          {" "}
          coucou{" "}
        </button>
      </div>
      <div className="key-word-filter-list">
        {keyWordlist !== ""
          ? keyWordlist.map((keyWord) => (
              <button
                type="button"
                className="key-word-filter-item"
                onClick={() => {
                  deletekeyWordlist(keyWord);
                }}
              >
                {`${keyWord}`}{" "}
                <img alt="placeholder" src="https://www.placecage.com/20/20" />
              </button>
            ))
          : null}
      </div>
    </form>
  );
}

export default SearchBar;
