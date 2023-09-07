import * as clone from "clone-deep";
import * as Act from "./terminal.action";
import { TerminalModel } from "./terminal.model";
import * as Buzz from "./terminal.buzzer";
import State from "../99.core/state";

export function reducer(model: TerminalModel = new TerminalModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_TERMINAL:
 return Buzz.updateTerminal(clone(model), act.bale, state);

 case Act.INIT_TERMINAL:
 return Buzz.initTerminal(clone(model), act.bale, state);
 
case Act.RUN_TERMINAL:
 return Buzz.runTerminal(clone(model), act.bale, state);
 
case Act.EDIT_TERMINAL:
 return Buzz.editTerminal(clone(model), act.bale, state);
 
case Act.PRINT_TERMINAL:
 return Buzz.printTerminal(clone(model), act.bale, state);
 
case Act.CLOSE_TERMINAL:
 return Buzz.closeTerminal(clone(model), act.bale, state);
 
case Act.OPTION_TERMINAL:
 return Buzz.optionTerminal(clone(model), act.bale, state);
 
case Act.INPUT_TERMINAL:
 return Buzz.inputTerminal(clone(model), act.bale, state);
 
 default:
 return model;
 }
}



