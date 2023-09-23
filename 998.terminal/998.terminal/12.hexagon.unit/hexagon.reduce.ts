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

case Act.READ_HEXAGON:
 return Buzz.readHexagon(clone(model), act.bale, state);
 
case Act.WRITE_HEXAGON:
 return Buzz.writeHexagon(clone(model), act.bale, state);
 
case Act.REMOVE_HEXAGON:
 return Buzz.removeHexagon(clone(model), act.bale, state);
 
case Act.DELETE_HEXAGON:
 return Buzz.deleteHexagon(clone(model), act.bale, state);
 
case Act.CREATE_HEXAGON:
 return Buzz.createHexagon(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
