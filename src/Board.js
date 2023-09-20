import "./styles.css";
import React, { useContext } from "react";
import Square from "./Square";
import { GameContext } from "./App";

const Board = () => {
  const { currentSquares, isNextX, Winner } = useContext(GameContext);

  let winner = Winner(currentSquares);
  let status;
  if (winner) status = "Winner is: " + winner;
  else if (!currentSquares.includes(null)) status = "Its a draw!";
  else {
    status = "Next turn: " + (isNextX ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square index={0} />
        <Square index={1} />
        <Square index={2} />
      </div>
      <div className="board-row">
        <Square index={3} />
        <Square index={4} />
        <Square index={5} />
      </div>
      <div className="board-row">
        <Square index={6} />
        <Square index={7} />
        <Square index={8} />
      </div>
    </>
  );
};
export default Board;
