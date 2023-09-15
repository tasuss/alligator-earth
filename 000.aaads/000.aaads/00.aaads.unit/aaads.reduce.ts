import * as clone from "clone-deep";
import * as Act from "./aaads.action";
import { AaadsModel } from "./aaads.model";
import * as Buzz from "./aaads.buzzer";
import State from "../99.core/state";

export function reducer(model: AaadsModel = new AaadsModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_AAADS:
 return Buzz.updateAaads(clone(model), act.bale, state);

 case Act.INIT_AAADS:
 return Buzz.initAaads(clone(model), act.bale, state);

case Act.OPEN_AAADS:
 return Buzz.openAaads(clone(model), act.bale, state);
 
case Act.RUN_AAADS:
 return Buzz.runAaads(clone(model), act.bale, state);
 
case Act.EDIT_AAADS:
 return Buzz.editAaads(clone(model), act.bale, state);
 
case Act.PATCH_AAADS:
 return Buzz.patchAaads(clone(model), act.bale, state);
 
 default:
 return model;
 }
}



