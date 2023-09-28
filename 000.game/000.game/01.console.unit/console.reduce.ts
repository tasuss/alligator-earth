import * as clone from "clone-deep";
import * as Act from "./console.action";
import { ConsoleModel } from "./console.model";
import * as Buzz from "./console.buzzer";
import State from "../99.core/state";

export function reducer(model: ConsoleModel = new ConsoleModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_CONSOLE:
 return Buzz.updateConsole(clone(model), act.bale, state);

 case Act.INIT_CONSOLE:
 return Buzz.initConsole(clone(model), act.bale, state);

case Act.OPEN_CONSOLE:
 return Buzz.openConsole(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
