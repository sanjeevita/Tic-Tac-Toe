import "./styles.css";
import React, { useContext } from "react";
import Board from "./Board";
import { GameContext } from "./App";
const Game = () => {
  const { setisNextX, setcurrentMove, history } = useContext(GameContext);
  const moveLog = history.map((squares, move) => {
    let description;
    if (move > 0) description = "Go to move " + move;
    else description = "Go to Game start";

    const reset = (move) => {
      setcurrentMove(move);
      setisNextX(move % 2 === 0);
    };

    return (
      <li key={move}>
        <button onClick={() => reset(move)}>{description}</button>
      </li>
    );
  });

  return (
    <>
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <ol> {moveLog} </ol>
        </div>
      </div>
    </>
  );
};
export default Game;
