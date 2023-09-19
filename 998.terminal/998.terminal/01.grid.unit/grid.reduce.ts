import * as clone from "clone-deep";
import * as Act from "./grid.action";
import { GridModel } from "./grid.model";
import * as Buzz from "./grid.buzzer";
import State from "../99.core/state";

export function reducer(model: GridModel = new GridModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_GRID:
 return Buzz.updateGrid(clone(model), act.bale, state);

 case Act.INIT_GRID:
 return Buzz.initGrid(clone(model), act.bale, state);

 default:
 return model;
 }
}
