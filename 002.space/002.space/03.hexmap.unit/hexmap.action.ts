import { Action } from "../99.core/interface/action.interface";
import HexmapBit from "./fce/hexmap.bit";

// Hexmap actions

export const INIT_HEXMAP = "[Hexmap action] Init Hexmap";
export class InitHexmap implements Action {
  readonly type = INIT_HEXMAP;
  constructor(public bale: HexmapBit) { }
}

export const UPDATE_HEXMAP = "[Hexmap action] Update Hexmap";
export class UpdateHexmap implements Action {
  readonly type = UPDATE_HEXMAP;
  constructor(public bale: HexmapBit) { }
}

export const OPEN_HEXMAP = "[Hexmap action] Open Hexmap";
export class OpenHexmap implements Action {
  readonly type = OPEN_HEXMAP;
  constructor(public bale: HexmapBit) { }
}

export const READ_HEXMAP = "[Read action] Read Hexmap";
export class ReadHexmap implements Action {
  readonly type = READ_HEXMAP;
  constructor(public bale: HexmapBit) { }
}

export const WRITE_HEXMAP = "[Write action] Write Hexmap";
export class WriteHexmap implements Action {
  readonly type = WRITE_HEXMAP;
  constructor(public bale: HexmapBit) { }
}

export const CREATE_HEXMAP = "[Create action] Create Hexmap";
export class CreateHexmap implements Action {
  readonly type = CREATE_HEXMAP;
  constructor(public bale: HexmapBit) { }
}

export const COPY_HEXMAP = "[Copy action] Copy Hexmap";
export class CopyHexmap implements Action {
  readonly type = COPY_HEXMAP;
  constructor(public bale: HexmapBit) { }
}

export const ATLAS_HEXMAP = "[Atlas action] Atlas Hexmap";
export class AtlasHexmap implements Action {
  readonly type = ATLAS_HEXMAP;
  constructor(public bale: HexmapBit) { }
}

export const GEOJSON_HEXMAP = "[Geojson action] Geojson Hexmap";
export class GeojsonHexmap implements Action {
  readonly type = GEOJSON_HEXMAP;
  constructor(public bale: HexmapBit) { }
}

export const TOOL_HEXMAP = "[Tool action] Tool Hexmap";
export class ToolHexmap implements Action {
  readonly type = TOOL_HEXMAP;
  constructor(public bale: HexmapBit) { }
}

export const SAVE_HEXMAP = "[Save action] Save Hexmap";
export class SaveHexmap implements Action {
  readonly type = SAVE_HEXMAP;
  constructor(public bale: HexmapBit) { }
}

export const STORE_HEXMAP = "[Store action] Store Hexmap";
export class StoreHexmap implements Action {
  readonly type = STORE_HEXMAP;
  constructor(public bale: HexmapBit) { }
}

export const SHAPE_HEXMAP = "[Shape action] Shape Hexmap";
export class ShapeHexmap implements Action {
  readonly type = SHAPE_HEXMAP;
  constructor(public bale: HexmapBit) { }
}

export const LOAD_HEXMAP = "[Load action] Load Hexmap";
export class LoadHexmap implements Action {
  readonly type = LOAD_HEXMAP;
  constructor(public bale: HexmapBit) { }
}

export const LIST_HEXMAP = "[List action] List Hexmap";
export class ListHexmap implements Action {
  readonly type = LIST_HEXMAP;
  constructor(public bale: HexmapBit) { }
}

export const REPLACE_HEXMAP = "[Replace action] Replace Hexmap";
export class ReplaceHexmap implements Action {
  readonly type = REPLACE_HEXMAP;
  constructor(public bale: HexmapBit) { }
}

export const NAME_HEXMAP = "[Name action] Name Hexmap";
export class NameHexmap implements Action {
  readonly type = NAME_HEXMAP;
  constructor(public bale: HexmapBit) { }
}

export const SEEK_HEXMAP = "[Seek action] Seek Hexmap";
export class SeekHexmap implements Action {
  readonly type = SEEK_HEXMAP;
  constructor(public bale: HexmapBit) { }
}

export const FOCUSING_HEXMAP = "[Focusing action] Focusing Hexmap";
export class FocusingHexmap implements Action {
  readonly type = FOCUSING_HEXMAP;
  constructor(public bale: HexmapBit) { }
}

export const DEFOCUS_HEXMAP = "[Defocus action] Defocus Hexmap";
export class DefocusHexmap implements Action {
  readonly type = DEFOCUS_HEXMAP;
  constructor(public bale: HexmapBit) { }
}

export const SELECT_HEXMAP = "[Select action] Select Hexmap";
export class SelectHexmap implements Action {
  readonly type = SELECT_HEXMAP;
  constructor(public bale: HexmapBit) { }
}

export const ADD_HEXMAP = "[Select action] Add Hexmap";
export class AddHexmap implements Action {
  readonly type = ADD_HEXMAP;
  constructor(public bale: HexmapBit) { }
}

export type Actions = OpenHexmap | InitHexmap | UpdateHexmap
  | ReadHexmap
  | WriteHexmap
  | CreateHexmap
  | CopyHexmap
  | AtlasHexmap
  | GeojsonHexmap
  | ToolHexmap
  | SaveHexmap
  |StoreHexmap
  | ShapeHexmap
  | ShapeHexmap
  | LoadHexmap
  | ListHexmap
  | ReplaceHexmap
  | NameHexmap
  | SeekHexmap
  | FocusingHexmap
  | DefocusHexmap
  | SelectHexmap
  | AddHexmap