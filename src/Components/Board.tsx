import styled from "styled-components";
import type { Board as BoardType } from "../Game/Core/type";
import Cell from "./Cell";

type BoardProps = {
  curBoard: BoardType;
};

const BoardWrapper = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 1px;
  background: #1f2937;
  border: 4px solid black;
  border-radius: 6px;
`;

function Board({ curBoard }: BoardProps) {
  return (
    <BoardWrapper>
      {curBoard.map((row, rowIndex) => {
        return row.map((cell, colIndex) => {
          return (
            <Cell key={`${rowIndex}-${colIndex}`} cellNumber={cell}></Cell>
          );
        });
      })}
    </BoardWrapper>
  );
}

export default Board;
