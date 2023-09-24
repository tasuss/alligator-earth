import * as clone from "clone-deep";
import * as Act from "./spectrum.action";
import { SpectrumModel } from "./spectrum.model";
import * as Buzz from "./spectrum.buzzer";
import State from "../99.core/state";

export function reducer(model: SpectrumModel = new SpectrumModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_SPECTRUM:
 return Buzz.updateSpectrum(clone(model), act.bale, state);

 case Act.INIT_SPECTRUM:
 return Buzz.initSpectrum(clone(model), act.bale, state);

case Act.MIN_SPECTRUM:
 return Buzz.minSpectrum(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
