import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActFce from "../../02.surface.unit/surface.action";
import * as ActCan from "../../03.container.unit/container.action";
import * as ActGph from "../../04.graphic.unit/graphic.action";
import * as ActTxt from "../../05.text.unit/text.action";
import * as ActSpr from "../../06.sprite.unit/sprite.action";
import * as ActHex from "../../07.hexagon.unit/hexagon.action";
import * as ActVsg from "../../01.visage.unit/visage.action";

var bit, val, idx, dex, lst, dat;

export const initHexagon = (cpy: HexagonModel, bal: HexagonBit, ste: State) => {

  return cpy;
};

export const updateHexagon = async (cpy: HexagonModel, bal: HexagonBit, ste: State) => {

  bit = await ste.hunt(ActHex.READ_HEXAGON, { idx: bal.idx })
  var dat: HexBit = bit.hexBit.dat
  var map = dat.map

  if ( map != null )

  switch (dat.frm) {

    case HEXAGON.FOCUS:
      ste.hunt(ActHex.FOCUS_HEXAGON, { dat, bit: bal.dat })
      break

    case HEXAGON.HEXMAP:
      ste.hunt(ActHex.HEXMAP_HEXAGON, { dat, bit: bal.dat })
      break
  }

  bal.slv({ hexBit: { idx: "update-hexagon", dat: dat } });
  return cpy;
};

export const focusHexagon = async (cpy: HexagonModel, bal: HexagonBit, ste: State) => {


  return cpy;
};


export const hexmapHexagon = async (cpy: HexagonModel, bal: HexagonBit, ste: State) => {

  bit = await ste.hunt(ActGph.READ_GRAPHIC, { src: bal.src })
  var graphic: PIXI.Graphics = bit.gphBit.dat.bit

  var hexmap = bal.bit

  graphic.clear()

  const Hex: Honeycomb.HexFactory = Honeycomb.extendHex({
    size: Number(33), // default: 1
    orientation: 'pointy', // default: 'pointy'
  });


  const Grid: Honeycomb.GridFactory<any> = Honeycomb.defineGrid(Hex);
  const grid: Honeycomb.Grid = Grid(hexmap.dat);

  var pct = .333;
  var scl = 3;

  graphic.lineStyle(3, 0x0000000, 1);

  grid.forEach((hex) => {
    const point = hex.toPoint();
    const corners = hex.corners().map((corner) => corner.add(point));
    const [firstCorner, ...otherCorners] = corners;
    graphic.moveTo(firstCorner.x * scl, firstCorner.y * scl * pct);
    otherCorners.forEach(({ x, y }) => graphic.lineTo(x * scl, y * scl * pct));
    graphic.lineTo(firstCorner.x * scl, firstCorner.y * scl * pct);
  });

  if (bal.slv != null) bal.slv({ hexBit: { idx: "hexmap-hexagon", dat: hexmap } });

  return cpy;
};


export const readHexagon = async (cpy: HexagonModel, bal: HexagonBit, ste: State) => {

  var slv = bal.slv;
  if (bal.idx == null) bal.idx = "hex00";
  bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, src: bal.src, bit: ActHex.CREATE_HEXAGON });
  if (slv != null) slv({ hexBit: { idx: "read-hexagon", dat: bit.clcBit.dat } });

  return cpy;
};

export const writeHexagon = async (cpy: HexagonModel, bal: HexagonBit, ste: State) => {

  bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActHex.CREATE_HEXAGON });

  ste.hunt(ActHex.UPDATE_HEXAGON, { idx: bal.idx, dat: bal.dat.dat });

  if (bal.slv != null) bal.slv({ hexBit: { idx: "write-hexagon", dat: bit.clcBit.dat } });

  return cpy;
};

export const removeHexagon = async (cpy: HexagonModel, bal: HexagonBit, ste: State) => {

  bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActHex.DELETE_HEXAGON })
  if (bal.slv != null) bal.slv({ hexBit: { idx: "replace-hexagon", dat: bit.clcBit } });

  return cpy;
};

export const createHexagon = async (cpy: HexagonModel, bal: HexagonBit, ste: State) => {

  debugger

  var dat: HexBit = { idx: bal.idx, src: bal.src };

  for (var key in bal.dat) {
    if (key == 'dat') continue
    dat[key] = bal.dat[key]
  }

  var hexagon = bal.dat.dat;
  if (hexagon != null) {
    dat.frm = hexagon.typ;
    dat.gph = hexagon.gph;
  }

  if (dat.clr == null) dat.clr = 0x0000000;
  if (dat.lne == null) dat.lne = 2;
  if (dat.wpe == null) dat.wpe = true;
  if (dat.a == null) dat.a = 1;
  if (dat.pct == null) dat.pct = 1;

  if (dat.frm == null) dat.frm = HEXAGON.HEXMAP;

  if (bal.src != null) bit = await ste.hunt(ActVsg.NEST_VISAGE, { src: bal.src, dat })

  bal.slv({ usrBit: { idx: "create-hexagon", dat: dat } });
  return cpy;

};


export const deleteHexagon = (cpy: HexagonModel, bal: HexagonBit, ste: State) => {
  debugger
  return cpy;
};


import { HexagonModel } from "../hexagon.model";
import HexagonBit from "../fce/hexagon.bit";
import HexBit from "../fce/hex.bit";
import State from "../../99.core/state";
import * as Honeycomb from "honeycomb-grid";
import * as PIXI from "pixi.js-legacy";

import * as HEXAGON from "../../val/hexagon"
import * as DIRECTION from "../../val/direction"