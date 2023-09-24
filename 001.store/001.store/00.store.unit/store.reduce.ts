import * as clone from "clone-deep";
import * as Act from "./store.action";
import { StoreModel } from "./store.model";
import * as Buzz from "./store.buzzer";
import State from "../99.core/state";

export function reducer(model: StoreModel = new StoreModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_STORE:
 return Buzz.updateStore(clone(model), act.bale, state);

 case Act.INIT_STORE:
 return Buzz.initStore(clone(model), act.bale, state);

case Act.OPEN_STORE:
 return Buzz.openStore(clone(model), act.bale, state);
 
case Act.RUN_STORE:
 return Buzz.runStore(clone(model), act.bale, state);
 
case Act.EDIT_STORE:
 return Buzz.editStore(clone(model), act.bale, state);
 
case Act.PATCH_STORE:
 return Buzz.patchStore(clone(model), act.bale, state);
 
 default:
 return model;
 }
}



