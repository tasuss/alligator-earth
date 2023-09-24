import * as clone from "clone-deep";
import * as Act from "./risk.action";
import { RiskModel } from "./risk.model";
import * as Buzz from "./risk.buzzer";
import State from "../99.core/state";

export function reducer(model: RiskModel = new RiskModel(), act: Act.Actions, state?: State) {
    switch (act.type) {

        case Act.UPDATE_RISK:
            return Buzz.updateRisk(clone(model), act.bale, state);

        case Act.FASHION_RISK:
            return Buzz.fashionRisk(clone(model), act.bale, state);

        case Act.INIT_RISK:
            return Buzz.initRisk(clone(model), act.bale, state);

        case Act.ARTICULATE_RISK:
            return Buzz.articulateRisk(clone(model), act.bale, state);

case Act.VERIFY_RISK:
 return Buzz.verifyRisk(clone(model), act.bale, state);
 
case Act.OPEN_RISK:
 return Buzz.openRisk(clone(model), act.bale, state);
 
case Act.LIST_RISK:
 return Buzz.listRisk(clone(model), act.bale, state);
 
case Act.LOAD_RISK:
 return Buzz.loadRisk(clone(model), act.bale, state);
 
case Act.CREATE_RISK:
 return Buzz.createRisk(clone(model), act.bale, state);
 
case Act.WRITE_RISK:
 return Buzz.writeRisk(clone(model), act.bale, state);
 
case Act.READ_RISK:
 return Buzz.readRisk(clone(model), act.bale, state);
 
        default:
            return model;
    }
}
