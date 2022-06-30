import React from "react";

import GlobalDescriptionList from "./PlaceHolderDescription";

function Test({ keyWordlist, setKeyWordlist, paramFilter }) {
  const GlobalKeyWordList = [];
  GlobalDescriptionList.forEach((Description) => {
    Description.split(" ")
      .map((word) => {
        let output = word;
        if (word[word.length - 1] === "," || word[word.length - 1] === ".") {
          output = word
            .split("")
            .slice(0, word.length - 1)
            .join("");
        }
        return output.toLowerCase();
      })
      .filter((word) => word.length > 5 && !GlobalKeyWordList.includes(word))
      .forEach((Word) => GlobalKeyWordList.push(Word));
  });
  // console.log(GlobalKeyWordList);

  const deletekeyWordlist = (keyWord) => {
    const index = keyWordlist.indexOf(keyWord);
    setKeyWordlist([
      ...keyWordlist.slice(0, index),
      ...keyWordlist.slice(index + 1),
    ]);
  };
  return (
    <div className="containerresult">
      {paramFilter !== "" ? (
        <div className="key-word-list">
          {GlobalKeyWordList.filter((keyWord) => keyWord.includes(paramFilter))
            .slice(0, 5)
            .map((word) => (
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
                <img src="https://www.placecage.com/20/20" alt="Cross logo" />
              </button>
            ))
          : null}
      </div>
    </div>
  );
}

export default Test;
