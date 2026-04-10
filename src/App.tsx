import { useEffect, useRef, useState } from "react";
import GameEngine from "./Game/Engine/GameEngine";
import { initialState } from "./Game/State/initialState";
import Board from "./Components/Board";

function App() {
  const gameEngine = useRef<GameEngine>(new GameEngine(initialState));
  const [gameState, setGameState] = useState(gameEngine.current.getGameState);

  useEffect(() => {
    const unsubscribe = gameEngine.current.subscribe(() => {
      setGameState;
    });
    return unsubscribe;
  }, []);

  return <Board curBoard={gameState.board}></Board>;
}

export default App;
