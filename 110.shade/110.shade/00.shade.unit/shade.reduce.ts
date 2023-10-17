import * as clone from "clone-deep";
import * as Act from "./shade.action";
import { ShadeModel } from "./shade.model";
import * as Buzz from "./shade.buzzer";
import State from "../99.core/state";

export function reducer(model: ShadeModel = new ShadeModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_SHADE:
 return Buzz.updateShade(clone(model), act.bale, state);

 case Act.INIT_SHADE:
 return Buzz.initShade(clone(model), act.bale, state);

case Act.OPEN_SHADE:
 return Buzz.openShade(clone(model), act.bale, state);
 
case Act.BODY_SHADE:
 return Buzz.bodyShade(clone(model), act.bale, state);
 
case Act.BROWSER_SHADE:
 return Buzz.browserShade(clone(model), act.bale, state);
 
case Act.RUN_SHADE:
 return Buzz.runShade(clone(model), act.bale, state);
 
case Act.EDIT_SHADE:
 return Buzz.editShade(clone(model), act.bale, state);
 
case Act.PATCH_SHADE:
 return Buzz.patchShade(clone(model), act.bale, state);
 
case Act.TEST_SHADE:
 return Buzz.testShade(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
