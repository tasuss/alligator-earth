import * as clone from "clone-deep";
import * as Act from "./container.action";
import { ContainerModel } from "./container.model";
import * as Buzz from "./container.buzzer";
import State from "../99.core/state";

export function reducer(model: ContainerModel = new ContainerModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_CONTAINER:
 return Buzz.updateContainer(clone(model), act.bale, state);

 case Act.INIT_CONTAINER:
 return Buzz.initContainer(clone(model), act.bale, state);

 default:
 return model;
 }
}
