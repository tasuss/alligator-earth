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

case Act.READ_CONTAINER:
 return Buzz.readContainer(clone(model), act.bale, state);
 
case Act.WRITE_CONTAINER:
 return Buzz.writeContainer(clone(model), act.bale, state);
 
case Act.CREATE_CONTAINER:
 return Buzz.createContainer(clone(model), act.bale, state);
 
case Act.SURFACE_CONTAINER:
 return Buzz.surfaceContainer(clone(model), act.bale, state);
 
case Act.ADD_CONTAINER:
 return Buzz.addContainer(clone(model), act.bale, state);
 
case Act.REMOVE_CONTAINER:
 return Buzz.removeContainer(clone(model), act.bale, state);
 
case Act.DELETE_CONTAINER:
 return Buzz.deleteContainer(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
