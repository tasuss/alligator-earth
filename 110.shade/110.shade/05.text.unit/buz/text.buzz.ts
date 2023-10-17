import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActFce from "../../02.surface.unit/surface.action";
import * as ActCan from "../../03.container.unit/container.action";
import * as ActGph from "../../04.graphic.unit/graphic.action";
import * as ActTxt from "../../05.text.unit/text.action";
import * as ActVsg from "../../01.visage.unit/visage.action";


var bit, val, idx, dex, lst, dat;

export const initText = (cpy: TextModel, bal: TextBit, ste: State) => {

  return cpy;
};

export const updateText = async (cpy: TextModel, bal: TextBit, ste: State) => {

  bit = await ste.hunt(ActTxt.READ_TEXT, { idx: bal.idx })
  dat = bit.txtBit.dat
  var text: PIXI.Text = dat.bit;
  text.text = dat.txt;

  text.x = dat.x;
  text.y = dat.y;

  if (bal.slv != null) return bal.slv({ txtBit: { idx: "update-text", dat: dat } });

  return cpy;
};

export const readText = async (cpy: TextModel, bal: TextBit, ste: State) => {

  var slv = bal.slv;
  if (bal.idx == null) bal.idx = 'txt00';
  bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActTxt.CREATE_TEXT })
  if (slv != null) slv({ txtBit: { idx: "read-text", dat: bit.clcBit.dat } });

  return cpy;
};

export const writeText = async (cpy: TextModel, bal: TextBit, ste: State) => {

  if (bal.idx == null) bal.idx = "txt00";

  bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src:bal.src, dat: bal.dat, bit: ActTxt.CREATE_TEXT })
  ste.hunt(ActTxt.UPDATE_TEXT, { idx: bal.idx })

  if (bal.slv != null) bal.slv({ txtBit: { idx: "write-text", dat: bit.clcBit.dat } });
  return cpy;
};

export const removeText = async (cpy: TextModel, bal:TextBit, ste: State) => {
  
  bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActTxt.DELETE_TEXT })
  if (bal.slv != null) bal.slv({ vsgBit: { idx: "remove-text", dat: bit.clcBit } });

  return cpy;
  };

export const createText = async (cpy: TextModel, bal: TextBit, ste: State) => {

  var dat: LineBit = { idx: bal.idx, src:bal.src, typ: SHADE.TEXT };

  for ( var key in bal.dat ){
    dat[key] = bal.dat[key]
  }

  if (dat.txt == null) dat.txt = 'create text';
  if (dat.x == null) dat.x = 0;
  if (dat.y == null) dat.y = 0;
  if (dat.fnt == null) dat.fnt = "Arial";
  if (dat.wrp == null) dat.wrp = 300;
  if (dat.a == null) dat.a = 1;
  if (dat.clr == null) dat.clr = 0x000000;

  try {
    dat.bit = new PIXI.Text(dat.txt);
    dat.bit.style = new PIXI.TextStyle({
      fontFamily: dat.fnt,
      fontSize: dat.sze,
      wordWrap: true,
      wordWrapWidth: dat.wrp,
      fill: dat.clr,
      align: "right",
    });
  } catch (e) {
    dat.dat = {};
  }


  if (bal.src != null) bit = await ste.hunt(ActVsg.NEST_VISAGE, { src: bal.src, dat })

  if (bal.slv != null) return bal.slv({ txtBit: { idx: "create-text", dat } });
  return cpy;
};

export const deleteText = async (cpy: TextModel, bal:TextBit, ste: State) => {
 
  if (typeof window != "object") return bal.slv({ fceBit: { idx: "error-delete-text", dat: {} } });

  bit = await ste.hunt(ActTxt.READ_TEXT, { idx: bal.idx })
  var dat: LineBit = bit.txtBit.dat

  var text = dat.bit;
  text.destroy()
  dat.bit = null

  if (bal.slv != null) return bal.slv({ vsgBit: { idx: "delete-text", dat } });

 return cpy;
 };

 
import { SurfaceModel } from "../../02.surface.unit/surface.model";
import { TextModel } from "../text.model";
import TextBit from "../fce/text.bit";
import State from "../../99.core/state";
import * as PIXI from "pixi.js-legacy";
import LineBit from "../fce/line.bit";

import * as SHADE from "../../val/shade"

