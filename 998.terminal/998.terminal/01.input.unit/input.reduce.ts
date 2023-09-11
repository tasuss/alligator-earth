import * as clone from "clone-deep";
import * as Act from "./input.action";
import { InputModel } from "./input.model";
import * as Buzz from "./input.buzzer";
import State from "../99.core/state";

export function reducer(model: InputModel = new InputModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_INPUT:
 return Buzz.updateInput(clone(model), act.bale, state);

 case Act.INIT_INPUT:
 return Buzz.initInput(clone(model), act.bale, state);

case Act.OPEN_INPUT:
 return Buzz.openInput(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
