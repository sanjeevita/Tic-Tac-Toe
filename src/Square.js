import "./styles.css";
import React, { useContext } from "react";
import { GameContext } from "./App";

const Square = ({ index }) => {
  const { currentSquares, isNextX, handlePlay, Winner } = useContext(
    GameContext
  );

  const handleClick = () => {
    const nextSquares = currentSquares.slice();
    if (currentSquares[index] || Winner(currentSquares)) return;
    nextSquares[index] = isNextX ? "X" : "O";
    handlePlay(nextSquares);
  };

  return (
    <button className="square" onClick={handleClick}>
      {currentSquares[index]}
    </button>
  );
};
export default Square;
