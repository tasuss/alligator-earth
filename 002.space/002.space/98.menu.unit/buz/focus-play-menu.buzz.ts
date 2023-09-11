import * as ActMnu from "../menu.action";
import * as ActSpc from "../../00.space.unit/space.action";
import * as ActFoc from "../../01.focus.unit/focus.action";
import * as ActMap from "../../03.hexmap.unit/hexmap.action";

import * as ActTrm from "../../act/terminal.action";

var bit, lst, dex, idx, dat, src;

export const focusPlayMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  var focMod: FocusModel = ste.value.focus;

  bit = await ste.bus(ActTrm.CLEAR_TERMINAL, { src: "-----------" })

  bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------" })
  bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "Focus Play Menu V0" })
  bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------" })


  bit = await ste.hunt(ActMnu.FOCUS_MENU, {})

  //updateMenu(cpy, bal, ste);

  return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });


import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state"; 
import { FocusModel } from "002.space/01.focus.unit/focus.model";
import SpotBit from "002.space/01.focus.unit/fce/spot.bit";

