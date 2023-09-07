import { Action } from "../99.core/interface/action.interface";
import TerminalBit from "./fce/terminal.bit";

// Terminal actions
export const INIT_TERMINAL = "[Terminal action] Init Terminal";
export class InitTerminal implements Action {
  readonly type = INIT_TERMINAL;
  constructor(public bale: TerminalBit) {}
}

export const OPEN_TERMINAL = "[Terminal action] Open Terminal";
export class OpenTerminal implements Action {
  readonly type = OPEN_TERMINAL;
  constructor(public bale: TerminalBit) {}
}

export const FOCUS_TERMINAL = "[Terminal action] Focus Terminal";
export class FocusTerminal implements Action {
  readonly type = FOCUS_TERMINAL;
  constructor(public bale: TerminalBit) {}
}

export const WRITE_TERMINAL = "[Terminal action] Write Terminal";
export class WriteTerminal implements Action {
  readonly type = WRITE_TERMINAL;
  constructor(public bale: TerminalBit) {}
}

export const UPDATE_TERMINAL = "[Terminal action] Update Terminal";
export class UpdateTerminal implements Action {
  readonly type = UPDATE_TERMINAL;
  constructor(public bale: TerminalBit) {}
}

export const CLEAR_TERMINAL = "[Terminal action] Clear Terminal";
export class ClearTerminal implements Action {
  readonly type = CLEAR_TERMINAL;
  constructor(public bale: TerminalBit) {}
}

export const INPUT_TERMINAL = "[Terminal action] Input Terminal";
export class InputTerminal implements Action {
  readonly type = INPUT_TERMINAL;
  constructor(public bale: TerminalBit) {}
}

export const TABLE_TERMINAL = "[Terminal action] Table Terminal";
export class TableTerminal implements Action {
  readonly type = TABLE_TERMINAL;
  constructor(public bale: TerminalBit) {}
}

export const CLOSE_TERMINAL = "[Terminal action] Close Terminal";
export class CloseTerminal implements Action {
  readonly type = CLOSE_TERMINAL;
  constructor(public bale: TerminalBit) {}
}

export const ROOT_TERMINAL = "[Terminal action] Root Terminal";
export class RootTerminal implements Action {
  readonly type = ROOT_TERMINAL;
  constructor(public bale: TerminalBit) {}
}

export const CONTENT_TERMINAL = "[Terminal action] Content Terminal";
export class ContentTerminal implements Action {
  readonly type = CONTENT_TERMINAL;
  constructor(public bale: TerminalBit) {}
}

export const ADD_PORT = "[Terminal action] Add Port";
export class AddPort implements Action {
  readonly type = ADD_PORT;
  constructor(public bale: TerminalBit) {}
}

export type Actions =
  | FocusTerminal
  | InitTerminal
  | UpdateTerminal
  | WriteTerminal
  | ClearTerminal
  | OpenTerminal
  | InputTerminal
  | TableTerminal
  | CloseTerminal
  | RootTerminal
  | ContentTerminal
  | AddPort;
