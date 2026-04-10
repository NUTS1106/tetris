export type Position={
  x:number;
  y:number;
}

export type MOVE_DIRECTION="RIGHT"|"DOWN"|"LEFT"
export type TURN_DIRECTION="RIGHT"|"LEFT"
export type GAME_STATE="PLAYING"|"GAME_OVER"|"PAUSE"


export type Action=
//유저 입력
{type:"MOVE", direction:MOVE_DIRECTION}|
{type:"TURN", direction:TURN_DIRECTION}|

//시스템
{type:"TICK"}|

//게임 상태
{type:"RESET"}

export type Listener=(state:GameState)=>void;

export type BlockType="I"|'O'|'T'|'S'|'Z'|'J'|'L'

export type Block={
  blockType:BlockType
  shape:Cell[][]
}

export type Cell=0|1|2|3|4|5|6|7

export type Board=Cell[][];

export type GameState={
  gameState:GAME_STATE
  board:Board
  current:Block
  next:Block[]
  position:Position
  score:Number
  isGameOver:Boolean
}