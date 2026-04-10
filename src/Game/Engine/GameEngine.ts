import type { GameState, Listener } from "../Core/type";
import { reducer } from "../State/reducer";

class GameEngine{
  private gameState:GameState
  private listeners: Listener[] = [];

  constructor(initialState: GameState) {
    this.gameState = initialState;
  }

  get getGameState(){
    return this.gameState
  }
  
  public dispatch(action){
    this.gameState=reducer(this.gameState, action)
    this.notify()
  }

  public subscribe(newListener:Listener){
    this.listeners.find((listener)=>{
      if(listener==newListener)
        return;
    })
    this.listeners.push(newListener)

    return ()=>{
      this.listeners = this.listeners.filter(l => l !== newListener);
    }
  }

  private notify(){
    this.listeners.forEach(listener => listener(this.gameState));
  }
}

export default GameEngine;