import * as clone from "clone-deep";
import * as Act from "./loop.action";
import { LoopModel } from "./loop.model";
import * as Buzz from "./loop.buzzer";
import State from "../99.core/state";

export function reducer(model: LoopModel = new LoopModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_LOOP:
 return Buzz.updateLoop(clone(model), act.bale, state);

 case Act.INIT_LOOP:
 return Buzz.initLoop(clone(model), act.bale, state);

case Act.REMOVE_LOOP:
 return Buzz.removeLoop(clone(model), act.bale, state);
 
case Act.DELETE_LOOP:
 return Buzz.deleteLoop(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
