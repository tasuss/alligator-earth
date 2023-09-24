import * as clone from "clone-deep";
import * as Act from "./screen.action";
import { ScreenModel } from "./screen.model";
import * as Buzz from "./screen.buzzer";
import State from "../99.core/state";

export function reducer(model: ScreenModel = new ScreenModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_SCREEN:
 return Buzz.updateScreen(clone(model), act.bale, state);

 case Act.INIT_SCREEN:
 return Buzz.initScreen(clone(model), act.bale, state);

 default:
 return model;
 }
}
