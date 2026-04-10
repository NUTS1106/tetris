import type { Action, GameState } from "../Core/type";
import { handleMove } from "../Logic/move";
import { handleReset } from "../Logic/reset";
import { handleTick } from "../Logic/tick";
import { handleTurn } from "../Logic/turn";


export function reducer(state: GameState, action: Action): GameState {
  switch (action.type) {
    // handler에서는 새로운 state를 만들어서 반환
    case "MOVE":
      return handleMove(state, action);
    case "TURN":
      return handleTurn(state, action);
    case "TICK":
      return handleTick(state, action);
    case "RESET":
      return handleReset(state, action);
    default:
      return state;
  }
}