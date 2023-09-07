import * as clone from "clone-deep";
import * as Act from "./unit.action";
import { UnitModel } from "./unit.model";
import * as Buzz from "./unit.buzzer";
import State from "../99.core/state";

export function reducer(model: UnitModel = new UnitModel(), act: Act.Actions, state?: State) {
    switch (act.type) {

        case Act.UPDATE_UNIT:
            return Buzz.updateUnit(clone(model), act.bale, state);

        case Act.INIT_UNIT:
            return Buzz.initUnit(clone(model), act.bale, state);

        case Act.CREATE_UNIT:
            return Buzz.createUnit(clone(model), act.bale, state);

        case Act.CODE_UNIT:
            return Buzz.codeUnit(clone(model), act.bale, state);

        case Act.LIST_UNIT:
            return Buzz.listUnit(clone(model), act.bale, state);

case Act.REPLACE_UNIT:
 return Buzz.replaceUnit(clone(model), act.bale, state);
 
        default:
            return model;
    }
}
