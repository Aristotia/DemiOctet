import React from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

function End() {
  const { width, height } = useWindowSize();
  window.setTimeout(() => {
    window.location.href = "/home";
  }, 10000);

  return (
    <div>
      <Confetti width={width} height={height} />

      <h1 className="title">
        Bravo, votre projet est <span className="colortextchange"> crée </span>{" "}
        !{" "}
      </h1>
      <p className="textredirection">Redirection dans 10 secondes...</p>
    </div>
  );
}

export default End;
