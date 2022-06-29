import React from "react";
import "../assets/css/SliderMenu.css";

function SliderMenu(props) {
  const { list, category } = props;
  return (
    <div>
      <label htmlFor={category}>
        {category}
        <select id={category}>
          {list.map((element) => (
            <option value={element}>{element}</option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default SliderMenu;
