import * as clone from "clone-deep";
import * as Act from "./surface.action";
import { SurfaceModel } from "./surface.model";
import * as Buzz from "./surface.buzzer";
import State from "../99.core/state";

export function reducer(model: SurfaceModel = new SurfaceModel(), act: Act.Actions, state?: State) {
    switch (act.type) {

        case Act.UPDATE_SURFACE:
            return Buzz.updateSurface(clone(model), act.bale, state);

        case Act.INIT_SURFACE:
            return Buzz.initSurface(clone(model), act.bale, state);

        case Act.READ_SURFACE:
            return Buzz.readSurface(clone(model), act.bale, state);

        case Act.WRITE_SURFACE:
            return Buzz.writeSurface(clone(model), act.bale, state);

        case Act.CREATE_SURFACE:
            return Buzz.createSurface(clone(model), act.bale, state);

        case Act.DIMENSION_SURFACE:
            return Buzz.dimensionSurface(clone(model), act.bale, state);

        case Act.DELETE_SURFACE:
            return Buzz.deleteSurface(clone(model), act.bale, state);

        case Act.REMOVE_SURFACE:
            return Buzz.removeSurface(clone(model), act.bale, state);

        default:
            return model;
    }
}
