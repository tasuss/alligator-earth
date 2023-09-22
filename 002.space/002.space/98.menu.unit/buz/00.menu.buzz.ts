import * as ActMnu from "../menu.action";
import * as ActSpc from "../../00.space.unit/space.action";
import * as ActFoc from "../../01.focus.unit/focus.action";
import * as ActPvt from "../../96.pivot.unit/pivot.action";

import * as ActTrm from "../../act/terminal.action";
import * as ActChc from "../../act/choice.action";

var bit, lst, dex, idx, dat;

export const initMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  if (bal == null) bal = { idx: null }

  bit = await ste.bus(ActTrm.INIT_TERMINAL, {})
  updateMenu(cpy, bal, ste);

  return cpy;
};

export const updateMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {
  var bit;

  bit = await ste.bus(ActTrm.CLEAR_TERMINAL, { src: "-----------" })

  bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------" })
  bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "Space PIVOT V0" })
  bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------" })

  var lst = [ ActPvt.CLOUD_PIVOT, ActPvt.UPDATE_PIVOT, ActPvt.OPEN_PIVOT, ActPvt.EDIT_PIVOT, ActSpc.MERGE_SPACE, ActMnu.FOCUS_MENU, ActMnu.HEXMAP_MENU, ActMnu.YIELD_MENU, ActMnu.RENDER_MENU]
  lst.push(ActFoc.MODEL_FOCUS)

  bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })

  bit = bit.trmBit;
  var idx = lst[bit.val];

  switch (idx) {

    case ActPvt.CLOUD_PIVOT:
      bit = await ste.hunt( ActPvt.CLOUD_PIVOT, {})
      break;

    case ActMnu.YIELD_MENU:
      bit = await ste.hunt(ActMnu.YIELD_MENU, {})
      break;

    case ActFoc.MODEL_FOCUS:

      bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "MODEL FOCUS...", bit: 'local' })
      bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: "local" })

      bit = await ste.hunt(ActFoc.MODEL_FOCUS, {})
      break;

    case ActMnu.FOCUS_MENU:
      bit = await ste.hunt(ActMnu.FOCUS_MENU, {})
      break;

    case ActMnu.HEXMAP_MENU:
      bit = await ste.hunt(ActMnu.HEXMAP_MENU, {})
      break;

    case ActPvt.EDIT_PIVOT:

      bit = await ste.hunt(ActPvt.EDIT_PIVOT, {})
      bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "PATCHING...", bit: 'local' })
      bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: "local" })
      lst = [ActSpc.PATCH_SPACE]
      bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })
      bit = await ste.hunt(ActPvt.PATCH_PIVOT, {})
      break;


    case ActMnu.RENDER_MENU:
      bit = await ste.hunt(ActSpc.READY_SPACE, { src: ActMnu.RENDER_MENU })
      const open = require('open')
      var loc = './vrt.vew.bat'
      bit = await open(loc)
      break;

    case ActPvt.UPDATE_PIVOT:
      bit = await ste.hunt( ActPvt.UPDATE_PIVOT, {})
      break;

    case ActSpc.MERGE_SPACE:
      bit = await ste.hunt(ActSpc.MERGE_SPACE, {})
      lst = bit.spcBit.lst

      bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "---merging...", val: 2, bit: "local" })

      lst.forEach(async (a) => {
        bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "---" + a, val: 2, bit: "local" })
      })


      break;

    case ActPvt.OPEN_PIVOT:
      bit = await ste.hunt( ActPvt.OPEN_PIVOT, {})
      break;

    default:
      bit = await ste.bus(ActTrm.CLOSE_TERMINAL, {})
      break;
  }

  updateMenu(cpy, bal, ste);

  return cpy;
};

export const testMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {
  return cpy;
};

export const closeMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  await ste.bus(ActTrm.CLOSE_TERMINAL, {})

  return cpy;
};

export const createMenu = (cpy: MenuModel, bal: MenuBit, ste: State) => {
  debugger
  return cpy;
};

var patch = (ste, type, bale) => ste.dispatch({ type, bale });

import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state";
import { HexmapModel } from "../../03.hexmap.unit/hexmap.model";

