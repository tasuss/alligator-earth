import * as clone from "clone-deep";
import * as Act from "./disk.action";
import { DiskModel } from "./disk.model";
import * as Buzz from "./disk.buzzer";
import State from "../99.core/state";

export function reducer(model: DiskModel = new DiskModel(), act: Act.Actions, state?: State) {
  switch (act.type) {
    case Act.UPDATE_DISK:
      return Buzz.updateDisk(clone(model), act.bale, state);

    case Act.INIT_DISK:
      return Buzz.initDisk(clone(model), act.bale, state);

    case Act.WRITE_DISK:
      return Buzz.writeDisk(clone(model), act.bale, state);

    case Act.READ_DISK:
      return Buzz.readDisk(clone(model), act.bale, state);

    case Act.INDEX_DISK:
      return Buzz.indexDisk(clone(model), act.bale, state);

    case Act.LOAD_LIST_DISK:
      return Buzz.load_listDisk(clone(model), act.bale, state);

    case Act.COPY_DISK:
      return Buzz.copyDisk(clone(model), act.bale, state);

    case Act.FRAME_DISK:
      return Buzz.frameDisk(clone(model), act.bale, state);

    case Act.BATCH_DISK:
      return Buzz.batchDisk(clone(model), act.bale, state);

    case Act.TRASH_DISK:
      return Buzz.trashDisk(clone(model), act.bale, state);

    case Act.ENSURE_DISK:
      return Buzz.ensureDisk(clone(model), act.bale, state);

    case Act.DELETE_DISK:
      return Buzz.deleteDisk(clone(model), act.bale, state);

    default:
      return model;
  }
}
