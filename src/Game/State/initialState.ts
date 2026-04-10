import { BOARD_HEIGHT, BOARD_WIDTH } from "../Core/constants";
import type { Block, Cell, GameState } from "../Core/type";

const initialBlock: Block = {
  blockType: "O",
  shape: [
    [1, 1],
    [1, 1],
  ],
};

function createEmptyBoard(): Cell[][] {
  return Array.from({ length: BOARD_HEIGHT }, () =>
    Array.from({ length: BOARD_WIDTH }, () => 0 as Cell),
  );
}

export const initialState: GameState = {
  gameState: "PLAYING",
  board: createEmptyBoard(),
  current: initialBlock,
  next: [initialBlock],
  position: {
    x: Math.floor(BOARD_WIDTH / 2) - 1,
    y: 0,
  },
  score: 0,
  isGameOver: false,
};
