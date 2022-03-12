import { useCallback } from "react";
import "./chessboard.css";

export default function ChessBoard() {
  const chessBox = Array(64).fill(null);
  const handleClick = useCallback((index) => {
    var indexDummmy = index;
    var box;
    const eleList = document.querySelectorAll(".highlighted");
    eleList.forEach((box) => {
      box.classList.remove("highlighted");
    });
    const boxColor = document
      .querySelector(`#box-${index}`)
      .classList.contains("boxWhite")
      ? "boxWhite"
      : "boxBlack";
    while (indexDummmy < 64) {
      box = document.querySelector(`#box-${indexDummmy}`);
      if (box.classList.contains(boxColor)) box.classList.add("highlighted");
      indexDummmy = indexDummmy + 9;
    }
    indexDummmy = index - 9;
    while (indexDummmy >= 0) {
      box = document.querySelector(`#box-${indexDummmy}`);
      if (box.classList.contains(boxColor)) box.classList.add("highlighted");
      indexDummmy = indexDummmy - 9;
    }
    indexDummmy = index + 7;
    while (indexDummmy < 64) {
      box = document.querySelector(`#box-${indexDummmy}`);
      if (box.classList.contains(boxColor)) box.classList.add("highlighted");
      indexDummmy = indexDummmy + 7;
    }
    indexDummmy = index - 7;
    while (indexDummmy >= 0) {
      box = document.querySelector(`#box-${indexDummmy}`);
      if (box.classList.contains(boxColor)) box.classList.add("highlighted");
      indexDummmy = indexDummmy - 7;
    }
  }, []);
  return (
    <>
      <h2>
        <u>ChessBoard</u>
      </h2>
      <div className="chessboard">
        {chessBox.map((box, index) => {
          const row = Math.floor(index / 8);
          const col = Math.floor(index % 8);
          return (
            <div
              className={(row + col) % 2 ? "boxWhite" : "boxBlack"}
              onClick={() => handleClick(index)}
              id={`box-${index}`}
            ></div>
          );
        })}
      </div>
    </>
  );
}
