import React, { useState } from "react";
import "../CSS/SearchBar.css";
import GlobalDescriptionList from "./PlaceHolderDescription.js";

function SearchBar() {
  let GlobalKeyWordList = [];
  GlobalDescriptionList.forEach((Description) => {
    Description.split(" ")
      .map((word) => {
        if (word[word.length - 1] === "," || word[word.length - 1] === ".") {
          word = word
            .split("")
            .slice(0, word.length - 1)
            .join("");
        }
        return word.toLowerCase();
      })
      .filter((word) => word.length > 5 && !GlobalKeyWordList.includes(word))
      .forEach((Word) => GlobalKeyWordList.push(Word));
  });
  // console.log(GlobalKeyWordList);
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
                {`${keyWord}`} <img src="https://www.placecage.com/20/20" />
              </button>
            ))
          : null}
      </div>
      {paramFilter !== "" ? (
        <div className="key-word-list">
          {GlobalKeyWordList.filter((keyWord) =>
            keyWord.includes(paramFilter)
          ).map((word) => (
            <button
              className="key-word-item"
              type="button"
              onClick={() => setKeyWordlist([...keyWordlist, word])}
            >
              {word}
            </button>
          ))}
        </div>
      ) : null}
    </form>
  );
}

export default SearchBar;
