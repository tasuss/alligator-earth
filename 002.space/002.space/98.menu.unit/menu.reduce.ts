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

    case Act.FOCUS_MENU:
      return Buzz.focusMenu(clone(model), act.bale, state);

    case Act.CREATE_MENU:
      return Buzz.createMenu(clone(model), act.bale, state);

    case Act.HEXMAP_MENU:
      return Buzz.hexmapMenu(clone(model), act.bale, state);

    case Act.CREATE_HEXMAP_MENU:
      return Buzz.createHexmapMenu(clone(model), act.bale, state);

    case Act.RENDER_MENU:
      return Buzz.renderMenu(clone(model), act.bale, state);

    case Act.YIELD_MENU:
      return Buzz.yieldMenu(clone(model), act.bale, state);

    case Act.FOCUS_PLAY_MENU:
      return Buzz.focusPlayMenu(clone(model), act.bale, state);

    default:
      return model;
  }
}
