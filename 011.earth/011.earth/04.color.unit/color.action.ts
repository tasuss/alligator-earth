import { Action } from "../99.core/interface/action.interface";
import ColorBit from "./fce/color.bit";

// Color actions
export const INIT_COLOR = "[Color action] Init Color";
export class InitColor implements Action {
  readonly type = INIT_COLOR;
  constructor(public bale: ColorBit) {}
}

export const UPDATE_COLOR = "[Color action] Update Color";
export class UpdateColor implements Action {
  readonly type = UPDATE_COLOR;
  constructor(public bale: ColorBit) {}
}

export const FETCH_COLOR = "[Color action] Fetch Color";
export class FetchColor implements Action {
  readonly type = FETCH_COLOR;
  constructor(public bale: ColorBit) {}
}

export const SELECT_COLOR = "[Color action] Select Color";
export class SelectColor implements Action {
  readonly type = SELECT_COLOR;
  constructor(public bale: ColorBit) {}
}

export const MATCH_COLOR = "[Color action] Match Color";
export class MatchColor implements Action {
  readonly type = MATCH_COLOR;
  constructor(public bale: ColorBit) {}
}

export const DEGREE_COLOR = "[Color action] Degree Color";
export class DegreeColor implements Action {
  readonly type = DEGREE_COLOR;
  constructor(public bale: ColorBit) {}
}

export const READ_COLOR = "[Color action] Read Color";
export class ReadColor implements Action {
  readonly type = READ_COLOR;
  constructor(public bale: ColorBit) {}
}

export const LIST_COLOR = "[List action] List Color";
 export class ListColor implements Action {
 readonly type = LIST_COLOR;
 constructor(public bale: ColorBit) {}
 }
 
export type Actions = InitColor | DegreeColor | ReadColor | MatchColor | SelectColor | FetchColor | UpdateColor | ListColor