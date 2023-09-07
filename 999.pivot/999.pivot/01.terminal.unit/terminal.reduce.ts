import * as clone from "clone-deep";
import * as Act from "./terminal.action";
import { TerminalModel } from "./terminal.model";
import * as Buzz from "./terminal.buzzer";
import State from "../99.core/state";

export function reducer(model: TerminalModel = new TerminalModel(), act: Act.Actions, state?: State) {
  switch (act.type) {
    case Act.UPDATE_TERMINAL:
      return Buzz.updateTerminal(clone(model), act.bale, state);

    case Act.OPEN_TERMINAL:
      return Buzz.openTerminal(clone(model), act.bale, state);

    case Act.CLOSE_TERMINAL:
      return Buzz.closeTerminal(clone(model), act.bale, state);

    case Act.ROOT_TERMINAL:
      return Buzz.rootTerminal(clone(model), act.bale, state);

    case Act.CLEAR_TERMINAL:
      return Buzz.clearTerminal(clone(model), act.bale, state);

    case Act.WRITE_TERMINAL:
      return Buzz.writeTerminal(clone(model), act.bale, state);

    case Act.INIT_TERMINAL:
      return Buzz.initTerminal(clone(model), act.bale, state);

    case Act.INPUT_TERMINAL:
      return Buzz.inputTerminal(clone(model), act.bale, state);

    case Act.TABLE_TERMINAL:
      return Buzz.tableTerminal(clone(model), act.bale, state);

    case Act.FOCUS_TERMINAL:
      return Buzz.focusTerminal(clone(model), act.bale, state);

    case Act.CONTENT_TERMINAL:
      return Buzz.contentTerminal(clone(model), act.bale, state);
      
    case Act.ADD_PORT:
      return Buzz.addPort(clone(model), act.bale, state);

    default:
      return model;
  }
}
