import * as clone from "clone-deep";
import * as Act from "./pivot.action";
import { PivotModel } from "./pivot.model";
import * as Buzz from "./pivot.buzzer";
import State from "../99.core/state";

export function reducer(model: PivotModel = new PivotModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_PIVOT:
 return Buzz.updatePivot(clone(model), act.bale, state);

 case Act.INIT_PIVOT:
 return Buzz.initPivot(clone(model), act.bale, state);

case Act.OPEN_PIVOT:
 return Buzz.openPivot(clone(model), act.bale, state);
 
case Act.RUN_PIVOT:
 return Buzz.runPivot(clone(model), act.bale, state);
 
case Act.EDIT_PIVOT:
 return Buzz.editPivot(clone(model), act.bale, state);
 
case Act.PATCH_PIVOT:
 return Buzz.patchPivot(clone(model), act.bale, state);

 case Act.COUNT_PIVOT:
 return Buzz.countPivot(clone(model), act.bale, state);

 case Act.LIST_PIVOT:
 return Buzz.listPivot(clone(model), act.bale, state);

 case Act.CREATE_PIVOT:
 return Buzz.createPivot(clone(model), act.bale, state);

 case Act.CONTAINS_PIVOT:
 return Buzz.containsPivot(clone(model), act.bale, state);
 
 default:
 return model;
 }
}



