import * as clone from "clone-deep";
import * as Act from "./space.action";
import { SpaceModel } from "./space.model";
import * as Buzz from "./space.buzzer";
import State from "../99.core/state";

export function reducer(model: SpaceModel = new SpaceModel(), act: Act.Actions, state?: State) {
    switch (act.type) {

        case Act.UPDATE_SPACE:
            return Buzz.updateSpace(clone(model), act.bale, state);

        case Act.INIT_SPACE:
            return Buzz.initSpace(clone(model), act.bale, state);

        case Act.READY_SPACE:
            return Buzz.readySpace(clone(model), act.bale, state);

        case Act.EDIT_SPACE:
            return Buzz.editSpace(clone(model), act.bale, state);

        case Act.OPEN_SPACE:
            return Buzz.openSpace(clone(model), act.bale, state);

        case Act.RUN_SPACE:
            return Buzz.runSpace(clone(model), act.bale, state);

        case Act.PATCH_SPACE:
            return Buzz.patchSpace(clone(model), act.bale, state);

        case Act.MERGE_SPACE:
            return Buzz.mergeSpace(clone(model), act.bale, state);

        case Act.TEST_SPACE:
            return Buzz.testSpace(clone(model), act.bale, state);

        case Act.CLOUD_SPACE:
            return Buzz.cloudSpace(clone(model), act.bale, state);

        case Act.BATCH_SPACE:
            return Buzz.batchSpace(clone(model), act.bale, state);

        default:
            return model;
    }
}
