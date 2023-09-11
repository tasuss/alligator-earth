import { Action } from "../99.core/interface/action.interface";
import FocusBit from "./fce/focus.bit";

// Focus actions
export const INIT_FOCUS = "[Focus action] Init Focus";
export class InitFocus implements Action {
  readonly type = INIT_FOCUS;
  constructor(public bale: FocusBit) {}
}

export const AWAKE_FOCUS = "[Focus action] Awake Focus";
export class AwakeFocus implements Action {
  readonly type = AWAKE_FOCUS;
  constructor(public bale: FocusBit) {}
}

export const UPDATE_FOCUS = "[Focus action] Update Focus";
export class UpdateFocus implements Action {
  readonly type = UPDATE_FOCUS;
  constructor(public bale: FocusBit) {}
}

export const OPEN_FOCUS = "[Focus action] Open Focus";
export class OpenFocus implements Action {
  readonly type = OPEN_FOCUS;
  constructor(public bale: FocusBit) {}
}

export const CREATE_FOCUS = "[Focus action] Create Focus";
export class CreateFocus implements Action {
  readonly type = CREATE_FOCUS;
  constructor(public bale: FocusBit) {}
}

export const READ_FOCUS = "[Read action] Read Focus";
 export class ReadFocus implements Action {
 readonly type = READ_FOCUS;
 constructor(public bale: FocusBit) {}
 }
 
export const WRITE_FOCUS = "[Write action] Write Focus";
 export class WriteFocus implements Action {
 readonly type = WRITE_FOCUS;
 constructor(public bale: FocusBit) {}
 }
 
export const REMOVE_FOCUS = "[Remove action] Remove Focus";
 export class RemoveFocus implements Action {
 readonly type = REMOVE_FOCUS;
 constructor(public bale: FocusBit) {}
 }
 
export const DELETE_FOCUS = "[Delete action] Delete Focus";
 export class DeleteFocus implements Action {
 readonly type = DELETE_FOCUS;
 constructor(public bale: FocusBit) {}
 }
 
export const CORNER_FOCUS = "[Corner action] Corner Focus";
 export class CornerFocus implements Action {
 readonly type = CORNER_FOCUS;
 constructor(public bale: FocusBit) {}
 }
 
export const LIST_FOCUS = "[List action] List Focus";
 export class ListFocus implements Action {
 readonly type = LIST_FOCUS;
 constructor(public bale: FocusBit) {}
 }

 export const SPIN_RIGHT_FOCUS = "[List action] Spin Left Focus";
 export class SpinRightFocus implements Action {
 readonly type = SPIN_RIGHT_FOCUS;
 constructor(public bale: FocusBit) {}
 }

 export const SPIN_LEFT_FOCUS = "[List action] Spin Right Focus";
 export class SpinLeftFocus implements Action {
 readonly type = SPIN_LEFT_FOCUS;
 constructor(public bale: FocusBit) {}
 }

 export const FORWARD_FOCUS = "[List action] Forward Focus";
 export class ForwardFocus implements Action {
 readonly type = FORWARD_FOCUS;
 constructor(public bale: FocusBit) {}
 }

 export const BACKWARD_FOCUS = "[List action] Backward Focus";
 export class BackwardFocus implements Action {
 readonly type = BACKWARD_FOCUS;
 constructor(public bale: FocusBit) {}
 }

 export const CENTER_FOCUS = "[List action] Center Focus";
 export class CenterFocus implements Action {
 readonly type = CENTER_FOCUS;
 constructor(public bale: FocusBit) {}
 }
 
export const BOND_FOCUS = "[Bond action] Bond Focus";
 export class BondFocus implements Action {
 readonly type = BOND_FOCUS;
 constructor(public bale: FocusBit) {}
 }
 
export const LOCATE_FOCUS = "[Locate action] Locate Focus";
 export class LocateFocus implements Action {
 readonly type = LOCATE_FOCUS;
 constructor(public bale: FocusBit) {}
 }
 
export const VISION_FOCUS = "[Vision action] Vision Focus";
 export class VisionFocus implements Action {
 readonly type = VISION_FOCUS;
 constructor(public bale: FocusBit) {}
 }
 
export const SELECT_FOCUS = "[Select action] Select Focus";
 export class SelectFocus implements Action {
 readonly type = SELECT_FOCUS;
 constructor(public bale: FocusBit) {}
 }

 export const MODEL_FOCUS = "[Select action] Model Focus";
 export class ModelFocus implements Action {
 readonly type = MODEL_FOCUS;
 constructor(public bale: FocusBit) {}
 }
 
export type Actions = OpenFocus | InitFocus | UpdateFocus |CreateFocus
| ReadFocus
| WriteFocus
| RemoveFocus
| DeleteFocus
| CornerFocus
| ListFocus
| SpinLeftFocus
| SpinRightFocus
| BackwardFocus
| ForwardFocus
| CenterFocus
| BondFocus
| LocateFocus
| VisionFocus
| SelectFocus
| AwakeFocus
| ModelFocus