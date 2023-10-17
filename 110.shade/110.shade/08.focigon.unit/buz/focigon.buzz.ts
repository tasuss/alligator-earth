import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActFce from "../../02.surface.unit/surface.action";
import * as ActCan from "../../03.container.unit/container.action";
import * as ActGph from "../../04.graphic.unit/graphic.action";
import * as ActTxt from "../../05.text.unit/text.action";
import * as ActSpr from "../../06.sprite.unit/sprite.action";
import * as ActHex from "../../07.hexagon.unit/hexagon.action";
import * as ActVsg from "../../01.visage.unit/visage.action";
import * as ActFcg from "../../08.focigon.unit/focigon.action";

var bit, val, idx, dex, lst, dat;

export const initFocigon = (cpy: FocigonModel, bal: FocigonBit, ste: State) => {
  debugger
  return cpy;
};

export const updateFocigon = async (cpy: FocigonModel, bal: FocigonBit, ste: State) => {

  bit = await ste.hunt(ActFcg.READ_FOCIGON, { idx: bal.idx })
  var dat: FocBit = bit.fcgBit.dat


  
  bit = await ste.hunt(ActGph.READ_GRAPHIC, { idx: dat.gph })
 
  var graphic = bit.gphBit.dat.bit

  if (graphic == null) return console.log("no graphic to draw map upon");

  if (dat.wpe == true) graphic.clear();

  graphic.lineStyle(dat.lne, dat.clr, 1);
  graphic.beginFill(dat.clr);

  var scl = 3;
  var pct =.33;

  const [firstCorner, ...otherCorners] = dat.crns;
  graphic.moveTo(firstCorner.x * scl, firstCorner.y * scl * pct);
  otherCorners.forEach(({ x, y }) => graphic.lineTo(x * scl, y  * scl * pct));
  graphic.lineTo(firstCorner.x * scl, firstCorner.y * scl * pct);

  graphic.alpha = dat.a;
  graphic.endFill();

  if (dat.fce != null) {
    var corners = dat.crns;

    switch ( dat.fce) {
      case DIRECTION.NORTH_EAST:
        dat.crn0 = corners[5];
        dat.crn1 = corners[0];
        break;

      case DIRECTION.NORTH_WEST:
        dat.crn0 = corners[4];
        dat.crn1 = corners[5];
        break;

      case DIRECTION.EAST:
        dat.crn0 = corners[0];
        dat.crn1 = corners[1];
        break;

      case DIRECTION.SOUTH_EAST:
        dat.crn0 = corners[1];
        dat.crn1 = corners[2];
        break;

      case DIRECTION.SOUTH_WEST:
        dat.crn0 = corners[2];
        dat.crn1 = corners[3];
        break;

      case DIRECTION.WEST:
        dat.crn0 = corners[3];
        dat.crn1 = corners[4];
        break;

      case DIRECTION.SOUTH_EAST:
        dat.crn0 = corners[4];
        dat.crn1 = corners[5];
        break;
    }

    var faceClr = 0x00ff00;

    //if (bal.bonds[bal.face] == null) faceClr = 0xff0000;

    graphic.lineStyle(5, faceClr, 1);

    graphic.moveTo(dat.crn0.x * scl, dat.crn0.y *  scl * pct);
    graphic.lineTo(dat.crn1.x * scl, dat.crn1.y * scl * pct);
  }

  //cpy.hexBale = bal;
  if (bal.slv != null) bal.slv({ fcgBit: { idx: "update-focigon", dat: focus } });


  return cpy;
};


export const readFocigon = async (cpy: FocigonModel, bal: FocigonBit, ste: State) => {

  var slv = bal.slv;
  if (bal.idx == null) bal.idx = "hex00";
  bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, src: bal.src, bit: ActFcg.CREATE_FOCIGON });
  if (slv != null) slv({ fcgBit: { idx: "read-focigon", dat: bit.clcBit.dat } });

  return cpy;
};
export const writeFocigon = async (cpy: FocigonModel, bal: FocigonBit, ste: State) => {

  
  bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActFcg.CREATE_FOCIGON });
  ste.hunt(ActFcg.UPDATE_FOCIGON, { idx: bal.idx, dat: bal.dat.dat });
  if (bal.slv != null) bal.slv({ fcgBit: { idx: "write-focigon", dat: bit.clcBit.dat } });

  return cpy;
};
export const removeFocigon = async (cpy: FocigonModel, bal: FocigonBit, ste: State) => {


  bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActFcg.DELETE_FOCIGON })
  if (bal.slv != null) bal.slv({ fcgBit: { idx: "remove-focigon", dat: bit.clcBit } });

  return cpy;
};
export const createFocigon = async (cpy: FocigonModel, bal: FocigonBit, ste: State) => {

  var dat: FocBit = { idx: bal.idx, src: bal.src };

  for (var key in bal.dat) {
    if (key == 'dat') continue
    dat[key] = bal.dat[key]
  }

  var focus = bal.dat.dat;
  dat.fce = focus.face;
  dat.frm = focus.typ;
  dat.gph = focus.gph;
  dat.crns = focus.corners;
  //there is the issue no corners
  

  if (dat.clr == null) dat.clr = 0x0000000;
  if (dat.lne == null) dat.lne = 2;
  if (dat.wpe == null) dat.wpe = true;
  if (dat.a == null) dat.a = 1;
  if (dat.pct == null) dat.pct = 1;

  if (dat.frm == null) dat.frm = 'f';
  if (dat.fce == null) dat.fce = 'E';

  if (bal.src != null) bit = await ste.hunt(ActVsg.NEST_VISAGE, { src: bal.src, dat })

  bal.slv({ fcgBit: { idx: "create-focigon", dat: dat } });
  return cpy;


  
};
export const deleteFocigon = (cpy: FocigonModel, bal: FocigonBit, ste: State) => {
  debugger
  return cpy;
};

import { FocigonModel } from "../focigon.model";
import FocigonBit from "../fce/focigon.bit";
import State from "../../99.core/state";
import FocBit from "../fce/foc.bit";

import * as HEXAGON from "../../val/hexagon"
import * as DIRECTION from "../../val/direction"