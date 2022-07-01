import React from "react";
import "../assets/css/SliderMenu.css";

function SliderMenuSector(props) {
  const { list, category } = props;
  return (
    <div className="labelsearchbar">
      <label className="labeltextsearchbar" htmlFor={category}>
        {category}

        <select id={category}>
          <option
            className="optionsearchbar"
            selected
            disabled
            hiddenvalue="null"
          >
            {" "}
            Merci de choisir une categorie
          </option>
          {list.map((element) => (
            <option className="optionsearchbar" value={element}>
              {element}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default SliderMenuSector;
