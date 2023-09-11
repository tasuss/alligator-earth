import * as clone from "clone-deep";
import * as Act from "./hexmap.action";
import { HexmapModel } from "./hexmap.model";
import * as Buzz from "./hexmap.buzzer";
import State from "../99.core/state";

export function reducer(model: HexmapModel = new HexmapModel(), act: Act.Actions, state?: State) {
  switch (act.type) {
    case Act.OPEN_HEXMAP:
      return Buzz.openHexmap(clone(model), act.bale, state);

    case Act.UPDATE_HEXMAP:
      return Buzz.updateHexmap(clone(model), act.bale, state);

    case Act.INIT_HEXMAP:
      return Buzz.initHexmap(clone(model), act.bale, state);

    case Act.READ_HEXMAP:
      return Buzz.readHexmap(clone(model), act.bale, state);

    case Act.WRITE_HEXMAP:
      return Buzz.writeHexmap(clone(model), act.bale, state);

    case Act.CREATE_HEXMAP:
      return Buzz.createHexmap(clone(model), act.bale, state);

    case Act.COPY_HEXMAP:
      return Buzz.copyHexmap(clone(model), act.bale, state);

    case Act.ATLAS_HEXMAP:
      return Buzz.atlasHexmap(clone(model), act.bale, state);

    case Act.GEOJSON_HEXMAP:
      return Buzz.geojsonHexmap(clone(model), act.bale, state);

    case Act.TOOL_HEXMAP:
      return Buzz.toolHexmap(clone(model), act.bale, state);

    case Act.SAVE_HEXMAP:
      return Buzz.saveHexmap(clone(model), act.bale, state);

    case Act.STORE_HEXMAP:
      return Buzz.storeHexmap(clone(model), act.bale, state);

    case Act.SHAPE_HEXMAP:
      return Buzz.shapeHexmap(clone(model), act.bale, state);

    case Act.LOAD_HEXMAP:
      return Buzz.loadHexmap(clone(model), act.bale, state);

    case Act.LIST_HEXMAP:
      return Buzz.listHexmap(clone(model), act.bale, state);

    case Act.REPLACE_HEXMAP:
      return Buzz.replaceHexmap(clone(model), act.bale, state);

    case Act.NAME_HEXMAP:
      return Buzz.nameHexmap(clone(model), act.bale, state);

    case Act.SEEK_HEXMAP:
      return Buzz.seekHexmap(clone(model), act.bale, state);

    case Act.FOCUSING_HEXMAP:
      return Buzz.focusingHexmap(clone(model), act.bale, state);

    case Act.DEFOCUS_HEXMAP:
      return Buzz.defocusHexmap(clone(model), act.bale, state);

    case Act.SELECT_HEXMAP:
      return Buzz.selectHexmap(clone(model), act.bale, state);

    case Act.ADD_HEXMAP:
      return Buzz.addHexmap(clone(model), act.bale, state);

    default:
      return model;
  }
}
