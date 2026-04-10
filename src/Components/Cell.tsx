import styled from "styled-components";
import type { Cell as CellType } from "../Game/Core/type";

type CellProps = {
  cellNumber: CellType;
};

const CellBlock = styled.div<{ $cellNumber: CellType }>`
  width: 24px;
  height: 24px;
  border: 1px solid #374151;
  background: ${({ $cellNumber }) =>
    $cellNumber === 0 ? "#e5e7eb" : "#60a5fa"};
  box-sizing: border-box;
`;

function Cell({ cellNumber }: CellProps) {
  return <CellBlock $cellNumber={cellNumber}></CellBlock>;
}

export default Cell;
