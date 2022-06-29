import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../assets/css/carousel.css";

function Carousel({ arrayImg }) {
  // arrayimg doit etre un tableau d'object //

  return (
    <div className="containercarousel">
      <Slide easing="ease" arrows duration={5000}>
        {arrayImg.map((el) => (
          <div key="{slide}" className="each-slide">
            <div style={{ backgroundImage: `url(${el.url})` }}>
              <p className="texticon">{el.name}</p>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default Carousel;
