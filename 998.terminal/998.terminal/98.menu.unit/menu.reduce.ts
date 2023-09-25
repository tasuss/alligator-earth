import * as clone from "clone-deep";
import * as Act from "./menu.action";
import { MenuModel } from "./menu.model";
import * as Buzz from "./menu.buzzer";
import State from "../99.core/state";

export function reducer(model: MenuModel = new MenuModel(), act: Act.Actions, state?: State) {
  switch (act.type) {
    case Act.UPDATE_MENU:
      return Buzz.updateMenu(clone(model), act.bale, state);

    case Act.INIT_MENU:
      return Buzz.initMenu(clone(model), act.bale, state);

    case Act.TEST_MENU:
      return Buzz.testMenu(clone(model), act.bale, state);

    case Act.CLOSE_MENU:
      return Buzz.closeMenu(clone(model), act.bale, state);

    case Act.CONSOLE_MENU:
      return Buzz.consoleMenu(clone(model), act.bale, state);

    case Act.CANAVS_MENU:
      return Buzz.canvasMenu(clone(model), act.bale, state);

    default:
      return model;
  }
}
