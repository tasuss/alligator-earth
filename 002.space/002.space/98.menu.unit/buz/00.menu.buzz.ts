import * as ActMnu from "../menu.action";
import * as ActSpc from "../../00.space.unit/space.action";
import * as ActFoc from "../../01.focus.unit/focus.action";
import * as ActPvt from "../../96.pivot.unit/pivot.action";

import * as ActTrm from "../../act/terminal.action";
import * as ActChc from "../../act/choice.action";

import * as ActGrd from "../../act/grid.action";
import * as ActCvs from "../../act/canvas.action";
import * as ActCns from "../../act/console.action";

var bit, lst, dex, idx, dat, src;

export const initMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  if (bal == null) bal = { idx: null }

  bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 2, y: 0, xSpan: 6, ySpan: 12 })
  bit = await ste.bus(ActCvs.WRITE_CANVAS, { idx: 'cvs1', dat: { clr: Color.CYAN, net: bit.grdBit.dat }, })

  bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 8, y: 0, xSpan: 2, ySpan: 12 })
  bit = await ste.bus(ActCns.WRITE_CONSOLE, { idx: 'cns00', src: "", dat: { net: bit.grdBit.dat, src: "alligaor0" } })

  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" })
  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "Space PIVOT V0" })
  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" })


  //bit = await ste.bus(ActCns.WRITE_CONSOLE, { idx:'cns00', src:"alligator1"})
  //bit = await ste.bus(ActCns.WRITE_CONSOLE, { idx:'cns00', src:"alligator2"})
  //bit = await ste.bus(ActCns.WRITE_CONSOLE, { idx:'cns00', src:"alligator3"})

  updateMenu(cpy, bal, ste);

  return cpy;
};

export const updateMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  lst = [ActPvt.CLOUD_PIVOT, ActPvt.UPDATE_PIVOT, ActPvt.OPEN_PIVOT, ActPvt.EDIT_PIVOT, ActSpc.MERGE_SPACE, ActMnu.FOCUS_MENU, ActMnu.HEXMAP_MENU, ActMnu.YIELD_MENU, ActMnu.RENDER_MENU]

  bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 2, ySpan: 12 })
  bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })

  src = bit.chcBit.src;

  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src })

  updateMenu(cpy, bal, ste);





  //var lst = [ ActPvt.CLOUD_PIVOT, ActPvt.UPDATE_PIVOT, ActPvt.OPEN_PIVOT, ActPvt.EDIT_PIVOT, ActSpc.MERGE_SPACE, ActMnu.FOCUS_MENU, ActMnu.HEXMAP_MENU, ActMnu.YIELD_MENU, ActMnu.RENDER_MENU]
  //lst.push(ActFoc.MODEL_FOCUS)

  //bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })

  // bit = bit.trmBit;
  // var idx = lst[bit.val];

  // switch (idx) {

  //    case ActPvt.CLOUD_PIVOT:
  //      bit = await ste.hunt( ActPvt.CLOUD_PIVOT, {})
  //      break;

  //    case ActMnu.YIELD_MENU:
  //      bit = await ste.hunt(ActMnu.YIELD_MENU, {})
  //      break;

  //    case ActFoc.MODEL_FOCUS:

  //      bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "MODEL FOCUS...", bit: 'local' })
  //      bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: "local" })

  //      bit = await ste.hunt(ActFoc.MODEL_FOCUS, {})
  //      break;

  //    case ActMnu.FOCUS_MENU:
  //      bit = await ste.hunt(ActMnu.FOCUS_MENU, {})
  //      break;

  //    case ActMnu.HEXMAP_MENU:
  //      bit = await ste.hunt(ActMnu.HEXMAP_MENU, {})
  //      break;

  //    case ActPvt.EDIT_PIVOT:

  //      bit = await ste.hunt(ActPvt.EDIT_PIVOT, {})
  //      bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "PATCHING...", bit: 'local' })
  //      bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: "local" })
  //      lst = [ActSpc.PATCH_SPACE]
  //      bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })
  //      bit = await ste.hunt(ActPvt.PATCH_PIVOT, {})
  //      break;


  //    case ActMnu.RENDER_MENU:
  //      bit = await ste.hunt(ActSpc.READY_SPACE, { src: ActMnu.RENDER_MENU })
  //      const open = require('open')
  //      var loc = './vrt.vew.bat'
  //      bit = await open(loc)
  //      break;

  //    case ActPvt.UPDATE_PIVOT:
  //      bit = await ste.hunt( ActPvt.UPDATE_PIVOT, {})
  //      break;

  //   case ActSpc.MERGE_SPACE:
  //     bit = await ste.hunt(ActSpc.MERGE_SPACE, {})
  //   lst = bit.spcBit.lst

  //   bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "---merging...", val: 2, bit: "local" })

  //   lst.forEach(async (a) => {
  //     bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "---" + a, val: 2, bit: "local" })
  //   })


  //   break;

  //  case ActPvt.OPEN_PIVOT:
  //    bit = await ste.hunt( ActPvt.OPEN_PIVOT, {})
  //    break;

  //   default:
  //     bit = await ste.bus(ActTrm.CLOSE_TERMINAL, {})
  //     break;
  // }

  //updateMenu(cpy, bal, ste);

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


import * as Grid from '../../val/grid';
import * as Align from '../../val/align'
import * as Color from '../../val/console-color';