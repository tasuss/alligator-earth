import * as clone from "clone-deep";
import * as Act from "./title.action";
import { TitleModel } from "./title.model";
import * as Buzz from "./title.buzzer";
import State from "../99.core/state";

export function reducer(model: TitleModel = new TitleModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_TITLE:
 return Buzz.updateTitle(clone(model), act.bale, state);

 case Act.INIT_TITLE:
 return Buzz.initTitle(clone(model), act.bale, state);

case Act.OPEN_TITLE:
 return Buzz.openTitle(clone(model), act.bale, state);
 
case Act.RUN_TITLE:
 return Buzz.runTitle(clone(model), act.bale, state);
 
case Act.EDIT_TITLE:
 return Buzz.editTitle(clone(model), act.bale, state);
 
case Act.PATCH_TITLE:
 return Buzz.patchTitle(clone(model), act.bale, state);
 
 default:
 return model;
 }
}



