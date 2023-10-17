import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActFce from "../../02.surface.unit/surface.action";
import * as ActCan from "../../03.container.unit/container.action";
import * as ActGph from "../../04.graphic.unit/graphic.action";
import * as ActVsg from "../../01.visage.unit/visage.action";

var bit, val, idx, dex, lst, dat;

export const initGraphic = (cpy: GraphicModel, bal: GraphicBit, ste: State) => {

  return cpy;
};

export const updateGraphic = async (cpy: GraphicModel, bal: GraphicBit, ste: State) => {

  bit = await ste.hunt(ActGph.READ_GRAPHIC, { idx: bal.idx })
  dat = bit.gphBit.dat
  
  var graphic: PIXI.Graphics = dat.bit;
  graphic.clear();

  switch (dat.frm) {
    case GRAPHIC.CIRCLE:
      graphic.beginFill(dat.clr); // Red
      graphic.drawCircle(dat.x, dat.y, dat.w); //
      break;

    case GRAPHIC.RECTANGLE:
      graphic.beginFill(dat.clr);
      graphic.lineStyle(3, dat.clr);
      graphic.drawRect(dat.x, dat.y, dat.w, dat.h);
      break;

    case GRAPHIC.ROUNDED_RECTANGLE:
      graphic.beginFill(dat.clr);
      graphic.lineStyle(3, dat.clr);
      graphic.drawRoundedRect(dat.x, dat.y, dat.w, dat.h, dat.crv);
      break;
  }

  

  
  if (bal.slv != null) return bal.slv({ gphBit: { idx: "update-graphic", dat: dat } });

  return cpy;
};

export const readGraphic = async (cpy: GraphicModel, bal: GraphicBit, ste: State) => {
  var slv = bal.slv;
  if (bal.idx == null) bal.idx = "gph00";
  bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActGph.CREATE_GRAPHIC });
  if (slv != null) slv({ gphBit: { idx: "read-graphic", dat: bit.clcBit.dat } });
  return cpy;
};
export const writeGraphic = async (cpy: GraphicModel, bal: GraphicBit, ste: State) => {

  if (bal.idx == null) bal.idx = "gph00";
  
  bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActGph.CREATE_GRAPHIC });
  ste.hunt(ActGph.UPDATE_GRAPHIC, { idx: bal.idx })

  if (bal.slv != null) bal.slv({ gphBit: { idx: "write-graphic", dat: bit.clcBit.dat } });
  return cpy;
};

export const removeGraphic = async (cpy: GraphicModel, bal:GraphicBit, ste: State) => {
  
  bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActGph.DELETE_GRAPHIC })
  if (bal.slv != null) bal.slv({ vsgBit: { idx: "remove-graphic", dat: bit.clcBit } });

  return cpy;
  };

export const createGraphic = async (cpy: GraphicModel, bal: GraphicBit, ste: State) => {

  var dat: DaubBit  = { idx: bal.idx, src:bal.src, typ: SHADE.GRAPHIC };

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

  if (bal.slv != null) return bal.slv({ gphBit: { idx: "create-graphic", dat: dat } });
  return cpy;
};

export const deleteGraphic = async (cpy: GraphicModel, bal:GraphicBit, ste: State) => {
 
  if (typeof window != "object") return bal.slv({ fceBit: { idx: "error-delete-graphic", dat: {} } });

  bit = await ste.hunt(ActGph.READ_GRAPHIC, { idx: bal.idx })
  var dat: DaubBit = bit.gphBit.dat

  var graphic = dat.bit;
  graphic.destroy()
  dat.bit = null

  if (bal.slv != null) return bal.slv({ vsgBit: { idx: "delete-graphic", dat } });

 return cpy;
 };


import { SurfaceModel } from "../../02.surface.unit/surface.model"
import { GraphicModel } from "../graphic.model";
import GraphicBit from "../fce/graphic.bit";
import State from "../../99.core/state";
import DaubBit from "../fce/daub.bit";
import * as PIXI from "pixi.js-legacy";
import * as GRAPHIC from "../../val/graphic"
import * as SHADE from '../../val/shade'