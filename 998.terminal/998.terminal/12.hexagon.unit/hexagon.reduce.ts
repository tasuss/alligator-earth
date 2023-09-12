import * as clone from "clone-deep";
import * as Act from "./hexagon.action";
import { HexagonModel } from "./hexagon.model";
import * as Buzz from "./hexagon.buzzer";
import State from "../99.core/state";

export function reducer(model: HexagonModel = new HexagonModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_HEXAGON:
 return Buzz.updateHexagon(clone(model), act.bale, state);

 case Act.INIT_HEXAGON:
 return Buzz.initHexagon(clone(model), act.bale, state);

 default:
 return model;
 }
}
