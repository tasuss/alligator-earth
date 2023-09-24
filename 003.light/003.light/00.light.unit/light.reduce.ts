import * as clone from "clone-deep";
import * as Act from "./light.action";
import { LightModel } from "./light.model";
import * as Buzz from "./light.buzzer";
import State from "../99.core/state";

export function reducer(model: LightModel = new LightModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_LIGHT:
 return Buzz.updateLight(clone(model), act.bale, state);

 case Act.INIT_LIGHT:
 return Buzz.initLight(clone(model), act.bale, state);

case Act.OPEN_LIGHT:
 return Buzz.openLight(clone(model), act.bale, state);
 
case Act.RUN_LIGHT:
 return Buzz.runLight(clone(model), act.bale, state);
 
case Act.EDIT_LIGHT:
 return Buzz.editLight(clone(model), act.bale, state);
 
case Act.PATCH_LIGHT:
 return Buzz.patchLight(clone(model), act.bale, state);
 
case Act.TEST_LIGHT:
 return Buzz.testLight(clone(model), act.bale, state);
 
case Act.CLOUD_LIGHT:
 return Buzz.cloudLight(clone(model), act.bale, state);
 
 default:
 return model;
 }
}



