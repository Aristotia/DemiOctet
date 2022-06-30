import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../assets/css/carousel.css";
import ProjectCards from "./ProjectCards";

function Carousel({ arrayImg }) {
  // arrayimg doit etre un tableau d'object //

  return (
    <div className="containercarousel">
      <Slide easing="ease" autoplay={false} arrows duration={1000}>
        {arrayImg.map(() => (
          <div className="each-slide">
            <ProjectCards />
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default Carousel;
