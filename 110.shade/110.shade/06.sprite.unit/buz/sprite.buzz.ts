import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActFce from "../../02.surface.unit/surface.action";
import * as ActCan from "../../03.container.unit/container.action";
import * as ActGph from "../../04.graphic.unit/graphic.action";
import * as ActTxt from "../../05.text.unit/text.action";
import * as ActSpr from "../../06.sprite.unit/sprite.action";
import * as ActVsg from "../../01.visage.unit/visage.action";

var bit, val, idx, dex, lst, dat;

export const initSprite = (cpy: SpriteModel, bal: SpriteBit, ste: State) => {
  
  return cpy;
};

export const updateSprite = async (cpy: SpriteModel, bal: SpriteBit, ste: State) => {

  bit = await ste.hunt(ActSpr.READ_SPRITE, { idx: bal.idx })
  dat = bit.sprBit.dat;

  var sprite: PIXI.Sprite = dat.bit;
  sprite.x = dat.x
  sprite.y = dat.y

  if (bal.slv != null) return bal.slv({ sprBit: { idx: "update-sprite", dat: dat } });

  return cpy;
};

export const readSprite = async (cpy: SpriteModel, bal: SpriteBit, ste: State) => {
  var slv = bal.slv;
  if (bal.idx == null) bal.idx = "spr00";
  bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActSpr.CREATE_SPRITE });
  if (slv != null) slv({ sprBit: { idx: "read-sprite", dat: bit.clcBit.dat } });
  return cpy;
};

export const writeSprite = async (cpy: SpriteModel, bal: SpriteBit, ste: State) => {
  bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src:bal.src, dat: bal.dat, bit: ActSpr.CREATE_SPRITE });
  ste.hunt(ActSpr.UPDATE_SPRITE, { idx: bal.idx })
  if (bal.slv != null) bal.slv({ sprBit: { idx: "write-sprite", dat: bit.clcBit.dat } });
  return cpy;
};

export const removeSprite = async (cpy: SpriteModel, bal:SpriteBit, ste: State) => {
 
  bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActSpr.DELETE_SPRITE })
  if (bal.slv != null) bal.slv({ vsgBit: { idx: "remove-text", dat: bit.clcBit } });

  return cpy;
  };

export const createSprite = async (cpy: SpriteModel, bal: SpriteBit, ste: State) => {


  var dat: IconBit = { idx: bal.idx, src: bal.src, typ: SHADE.SPRITE };

  for ( var key in bal.dat){
    dat[key] = bal.dat[key]
  }

  if (dat.x == null) dat.x = 0;
  if (dat.y == null) dat.y = 0;
  if (dat.r == null) dat.r = 0;
  if (dat.s == null) dat.s = 1;
  if (dat.a == null) dat.a = 1;
  if (dat.src == null) dat.src = './img/000.png'

  try {
    dat.bit = PIXI.Sprite.from(dat.src)
  } catch (e) {
    dat.dat = {};
  }

  if (bal.src != null) bit = await ste.hunt(ActVsg.NEST_VISAGE, { src: bal.src, dat })

  if (bal.slv != null) return bal.slv({ sprBit: { idx: "create-sprite", dat } });

  return cpy;
};

export const deleteSprite = async (cpy: SpriteModel, bal:SpriteBit, ste: State) => {
 
  if (typeof window != "object") return bal.slv({ fceBit: { idx: "error-delete-graphic", dat: {} } });

  bit = await ste.hunt(ActSpr.READ_SPRITE, { idx: bal.idx })
  var dat: IconBit = bit.sprBit.dat

  var sprite = dat.bit;
  sprite.destroy()
  dat.bit = null

  if (bal.slv != null) return bal.slv({ vsgBit: { idx: "delete-sprite", dat } });

 return cpy;
 };


import { SurfaceModel } from "../../02.surface.unit/surface.model"
import { SpriteModel } from "../sprite.model";
import SpriteBit from "../fce/sprite.bit";
import State from "../../99.core/state"; 
import IconBit from "../fce/icon.bit";
import * as PIXI from "pixi.js-legacy";
import * as SHADE from "../../val/shade"
