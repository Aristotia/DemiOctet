import axios from "axios";
import React, { useEffect, useState } from "react";

function Test({ keyWordlist, setKeyWordlist, paramFilter }) {
  const [GlobalDescriptionList, setGlobalDescriptionList] = useState([]);
  const [GlobalKeyWordList, setGlobalKeyWordList] = useState([]);
  useEffect(() => {
    if (GlobalDescriptionList !== []) {
      axios
        .get(`http://localhost:5000/projectsDescription`)
        .then((res) => {
          setGlobalDescriptionList(res.data);
        })
        .catch((err) => console.error(err));
    }
  }, []);

  useEffect(() => {
    GlobalDescriptionList.forEach((Description) => {
      Description.description
        .split(" ")
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
        .forEach((Word) => {
          setGlobalKeyWordList([...GlobalKeyWordList, Word]);
        });
    });
  }, [GlobalDescriptionList]);

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
          {GlobalKeyWordList.filter((keyWord) =>
            keyWord.toLowerCase().includes(paramFilter.toLowerCase())
          )
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
