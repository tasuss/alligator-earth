import * as clone from "clone-deep";
import * as Act from "./game.action";
import { GameModel } from "./game.model";
import * as Buzz from "./game.buzzer";
import State from "../99.core/state";

export function reducer(model: GameModel = new GameModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_GAME:
 return Buzz.updateGame(clone(model), act.bale, state);

 case Act.INIT_GAME:
 return Buzz.initGame(clone(model), act.bale, state);

case Act.OPEN_GAME:
 return Buzz.openGame(clone(model), act.bale, state);
 
case Act.RUN_GAME:
 return Buzz.runGame(clone(model), act.bale, state);
 
case Act.EDIT_GAME:
 return Buzz.editGame(clone(model), act.bale, state);
 
case Act.PATCH_GAME:
 return Buzz.patchGame(clone(model), act.bale, state);
 
 default:
 return model;
 }
}



