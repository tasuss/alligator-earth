import * as clone from "clone-deep";
import * as Act from "./bitmap.action";
import { BitmapModel } from "./bitmap.model";
import * as Buzz from "./bitmap.buzzer";
import State from "../99.core/state";

export function reducer(model: BitmapModel = new BitmapModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_BITMAP:
 return Buzz.updateBitmap(clone(model), act.bale, state);

 case Act.INIT_BITMAP:
 return Buzz.initBitmap(clone(model), act.bale, state);

 default:
 return model;
 }
}
