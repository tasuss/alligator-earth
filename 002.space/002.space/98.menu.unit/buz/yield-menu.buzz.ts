import * as ActMnu from "../menu.action";
import * as ActSpc from "../../00.space.unit/space.action";
import * as ActFoc from "../../01.focus.unit/focus.action";
import * as ActMap from "../../03.hexmap.unit/hexmap.action"


import * as ActTrm from "../../act/terminal.action";
import * as ActVsg from "../../act/visage.action";
import * as ActGph from "../../act/graphic.action";
import * as ActHex from "../../act/hexagon.action";

var bit, lst, dex, idx, dat;

export const yieldMenu = async (cpy: MenuModel, bal:MenuBit, ste: State) => {

  bit = await ste.bus(ActTrm.CLEAR_TERMINAL, { src: "-----------" })
 

  var idxMap = 'map00'
  var frm = SHAPE.RECTANGLE
  var w = 10
  var h = 10

  bit = await ste.hunt(ActMap.WRITE_HEXMAP, { idx:idxMap, dat:{frm, w, h} })

  bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------" })
  bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "YIELDING..." ,val:9 })
  bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------" })
  
  bit = await ste.hunt(ActMap.SELECT_HEXMAP, { idx })

  var idxFoc = 'foc00'
  bit = await ste.hunt(ActFoc.WRITE_FOCUS, { idx:idxFoc })

  bit = await ste.hunt(ActFoc.SELECT_FOCUS, { idx:idxFoc })

  bit = await ste.hunt(ActMap.FOCUSING_HEXMAP, { idx:idxMap, src:idxFoc })

  bal.slv({ intBit: { idx: "yield-menu" } });
  return cpy;
  };


var patch = (ste, type, bale) => ste.dispatch({ type, bale });

import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state";
import { HexmapModel } from "002.space/03.hexmap.unit/hexmap.model";

import * as SHAPE from '../../val/shape'