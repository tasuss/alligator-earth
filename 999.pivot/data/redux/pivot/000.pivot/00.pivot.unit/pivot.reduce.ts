import * as clone from "clone-deep";
import * as Act from "./{{=it.name}}.action";
import { {{=it.nameTitle}}Model } from "./{{=it.name}}.model";
import * as Buzz from "./{{=it.name}}.buzzer";
import State from "../99.core/state";

export function reducer(model: {{=it.nameTitle}}Model = new {{=it.nameTitle}}Model(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_{{=it.nameCaps}}:
 return Buzz.update{{=it.nameTitle}}(clone(model), act.bale, state);

 case Act.INIT_{{=it.nameCaps}}:
 return Buzz.init{{=it.nameTitle}}(clone(model), act.bale, state);

case Act.OPEN_{{=it.nameCaps}}:
 return Buzz.open{{=it.nameTitle}}(clone(model), act.bale, state);
 
case Act.RUN_{{=it.nameCaps}}:
 return Buzz.run{{=it.nameTitle}}(clone(model), act.bale, state);
 
case Act.EDIT_{{=it.nameCaps}}:
 return Buzz.edit{{=it.nameTitle}}(clone(model), act.bale, state);
 
case Act.PATCH_{{=it.nameCaps}}:
 return Buzz.patch{{=it.nameTitle}}(clone(model), act.bale, state);
 
 default:
 return model;
 }
}



