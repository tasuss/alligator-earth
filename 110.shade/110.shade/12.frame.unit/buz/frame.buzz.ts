import * as ActCol from "../../97.collect.unit/collect.action";

import * as ActGph from "../../04.graphic.unit/graphic.action";
import * as ActVsg from "../../01.visage.unit/visage.action";


import * as ActFme from "../frame.action";

import * as ActVrt from "../../act/vurt.action";
import * as ActDsk from "../../act/disk.action";

var bit, val, idx, dex, lst, dat;

export const initFrame = (cpy: FrameModel, bal: FrameBit, ste: State) => {
  debugger
  return cpy;
};

export const updateFrame = async (cpy: FrameModel, bal: FrameBit, ste: State) => {

  bit = await ste.hunt(ActGph.READ_GRAPHIC, { idx: bal.idx })
  dat = bit.gphBit.dat

  var graphic: PIXI.Graphics = dat.bit;
  if ( graphic == null ) return console.log("you have no graphic")
  if ( graphic.clear == null ) return console.log("you have no graphic clear")
  

  graphic.clear();

  graphic.beginFill(0xFF00FF);
  graphic.lineStyle(13, 0xFF0000);
  graphic.drawRoundedRect(0, 0, 33, 100, 5);

  if (bal.slv != null) return bal.slv({ gphBit: { idx: "update-graphic", dat: dat } });

  return cpy;
};

export const readFrame = async (cpy: FrameModel, bal: FrameBit, ste: State) => {

  var slv = bal.slv;
  if (bal.idx == null) bal.idx = "frm00";
  bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActFme.CREATE_FRAME });
  if (slv != null) slv({ fmeBit: { idx: "read-frame", dat: bit.clcBit.dat } });
  return cpy;
};

export const writeFrame = async (cpy: FrameModel, bal: FrameBit, ste: State) => {

  if (bal.idx == null) bal.idx = "frm00";

  

  bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActFme.CREATE_FRAME });
  ste.hunt(ActFme.UPDATE_FRAME, { idx: bal.idx })

  if (bal.slv != null) bal.slv({ fmeBit: { idx: "write-frame", dat: bit.clcBit.dat } });

  return cpy;
};
export const removeFrame = async (cpy: FrameModel, bal: FrameBit, ste: State) => {

  bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActFme.DELETE_FRAME })
  if (bal.slv != null) bal.slv({ fmeBit: { idx: "remove-frame", dat: bit.clcBit } });

  return cpy;

};

//here is where things take meaning 
export const createFrame = async (cpy: FrameModel, bal: FrameBit, ste: State) => {
  
  var dat: HoldBit  = { idx: bal.idx, src:bal.src, typ: 'frame' };

  for (var key in bal.dat) {
    dat[key] = bal.dat[key]
  }

  try {
    dat.bit = new PIXI.Graphics();;
  } catch (e) {
    dat.dat = {};
  }

  if (dat.frm == null) dat.frm = GRAPHIC.ROUNDED_RECTANGLE;

  if (dat.w == null) dat.w = 333;
  if (dat.h == null) dat.h = 333;
  if (dat.x == null) dat.x = 0;
  if (dat.y == null) dat.y = 0;
  if (dat.a == null) dat.a = 1;

  if (dat.clr == null) dat.clr = 0x00FF00;
  if (dat.crv == null) dat.crv = 13;


  if (bal.src != null) bit = await ste.hunt(ActVsg.NEST_VISAGE, { src: bal.src, dat })


  if (bal.slv != null) return bal.slv({ fmeBit: { idx: "create-frame", dat: dat } });
  return cpy;

};

export const deleteFrame = async (cpy: FrameModel, bal: FrameBit, ste: State) => {

  
  if (typeof window != "object") return bal.slv({ fceBit: { idx: "error-delete-frame", dat: {} } });

  bit = await ste.hunt(ActFme.READ_FRAME, { idx: bal.idx })
  var dat: HoldBit = bit.fmeBit.dat

  var graphic = dat.bit;
  graphic.destroy()
  dat.bit = null

  if (bal.slv != null) return bal.slv({ fmeBit: { idx: "delete-frame", dat } });

  
  return cpy;
};

import * as PIXI from "pixi.js-legacy";
import * as GRAPHIC from "../../val/graphic"
import * as SHADE from '../../val/shade'

import { FrameModel } from "../frame.model";
import FrameBit from "../fce/frame.bit";
import State from "../../99.core/state";
import HoldBit from "../fce/hold.bit";
