import * as ActMap from "../hexmap.action";

import * as ActFoc from "../../../002.space/01.focus.unit/focus.action";

import * as ActSpc from "../../../002.space/00.space.unit/space.action";
import * as ActCol from "../../97.collect.unit/collect.action";

import * as ActDsk from "../../act/disk.action";
import * as ActVrt from "../../act/vurt.action";

var bit, idx, lst, dat, val, src;

export const atlasHexmap = async (cpy: HexmapModel, bal: HexmapBit, ste: State) => {
  //create a hexmap
  //node ./hand/013.vurt-hexmap -t 0.15
  if (bal.idx == null) bal.idx = 'map00'
  if (bal.val == null) bal.val = 10;

  var h3 = require("h3-js");
  var clone = require("clone-deep");

  var h3ToGeo = h3.h3ToGeo;
  var hexRing = h3.hexRing;
  var polyfill = h3.polyfill;

  var name = bal.idx;
  var scale = bal.val;
  var data = bal.dat;

  var hex = [];
  var map = [];

  var cords = data.coordinates;
  if (cords == null) {
    if (data.features != null) {
      cords = data.features[0].geometry.coordinates;
    }
  }


  var trim = (val) => {
    var dat = 0;

    switch (val) {
      case 1:
        dat = 0;
        break;
      case 2:
        dat = 0;
        break;
      case 3:
        dat = 0;
        break;
      case 4:
        dat = 1;
        break;
      case 5:
        dat = 1;
        break;
      case 6:
        dat = 5;
        break;
      case 7:
        dat = 5;
        break;
      case 8:
        dat = 5;
        break;
      case 9:
        dat = 5;
        break;
      case 10:
        dat = 5;
        break;
      case 11:
        dat = 6;
        break;
      case 12:
        dat = 6;
        break;
      case 13:
        dat = 6;
        break;
      case 14:
        dat = 6;
        break;
      default:
        dat = 6;
    }

    return dat;
  };

  hex = polyfill(cords, scale, true);
  

  if (hex.length == 0) {
    console.log("no hexes for " + scale);
    if (bal.slv != null) bal.slv({ mapBit: { idx: "no-atlas-hexmap" } });
    return
  }


  //console.log(JSON.stringify(hex));

  console.log("SCALE : " + scale + " SIZE : " + hex.length);

  var left = null;
  var right = null;
  var top = null;
  var bottom = null;
  var width = 0;
  var height = 0;

  var edge = {};

  //var clr = fate.pickone(matchHue(name)).item;

  hex.forEach((a, b) => {
    var center = h3ToGeo(a);

    var t = trim(scale);

    var xDex = Math.abs(Number(center[1].toFixed(t)));
    var yDex = Math.abs(Number(center[0].toFixed(t)));
    center[1] = xDex = Math.ceil(xDex * Math.pow(10, t));
    center[0] = yDex = Math.ceil(yDex * Math.pow(10, t));

    if (right == null) right = xDex;
    else if (xDex < right) right = xDex;
    if (left == null) left = xDex;
    else if (xDex > left) left = xDex;

    if (top == null) top = yDex;
    else if (yDex > top) top = yDex;
    if (bottom == null) bottom = yDex;
    else if (yDex < bottom) bottom = yDex;

    var saveData = { hex: a, center: center, color: null };

    //console.log("show me center " + clr.hex);

    //if (clr == null) return;
    //if (clr.hex == null) return;

    // saveData.color = makeHue(clr.hex);
    //saveData.color = this.color.leaf(clr.hex);

    //delete saveData.color.rgb;
    //delete saveData.color.distance;

    edge[a] = saveData;

    map.push(saveData);
  });

  map.forEach((a, b) => {
    var center = a.center;
    center[1] = left - center[1];
    center[0] = top - center[0];
    map[b].center = center;
  });

  var grid0 = [];
  map.forEach((a) => {
    var x = a.center[1];
    var y = a.center[0];
    grid0.push({ hex: a.hex, x: x, y: y });
  });

  grid0.sort(function (a, b) {
    return a.y - b.y;
  });

  grid0.forEach((a, b) => {
    grid0[b] = { hex: a.hex, x: a.x, y: b };
  });

  grid0.sort(function (a, b) {
    return a.x - b.x;
  });

  var maxX = 0;
  var maxY = 0;

  grid0.forEach((a, b) => {
    grid0[b] = { hex: a.hex, x: b, y: a.y };
    edge[a.h] = grid0[b];
    if (grid0[b].x > maxX) maxX = grid0[b].x;
    if (grid0[b].y > maxY) maxY = grid0[b].y;
  });

  var connect = {};
  grid0.forEach((a, b) => {
    var hex = a.hex;

    var ring0 = hexRing(hex, 1);
    ring0.forEach((c, d) => {
      ring0[d] = { dex: d, hex: c, x: a.x, y: a.y };
    });

    var ring1 = [];
    ring0.forEach((c) => {
      if (edge[c.hex] == null) return;
      c.x = edge[c.hex].x;
      c.y = edge[c.hex].y;
      ring1.push(c);
    });

    var id = hex;
    connect[id] = ring1;
  });

  console.log("valley of the cube");

  var cubeList = [];
  var cube = {};

  var now = { q: 0, r: 0, s: 0 };

  var cubeCount = hex.length;

  var cubeCheck = (hex, q, r, s) => {
    var lst = connect[hex];
    lst.forEach((a) => {
      var next = { hex: a.hex, q: q, r: r, s: s };
      switch (a.dex) {
        case 0:
          next.q += 1;
          next.r -= 1;
          next.s += 0;
          break;
        case 1:
          next.q += 0;
          next.r -= 1;
          next.s += 1;
          break;
        case 2:
          next.q -= 1;
          next.r += 0;
          next.s += 1;
          break;
        case 3:
          next.q -= 1;
          next.r += 1;
          next.s += 0;
          break;
        case 4:
          next.q += 0;
          next.r += 1;
          next.s -= 1;
          break;
        case 5:
          next.q += 1;
          next.r += 0;
          next.s -= 1;
          break;
      }

      if (cube[a.hex] != null) return;
      cube[a.hex] = next;
      cubeCount -= 1;
      process.nextTick(() => cubeCheck(a.hex, next.q, next.r, next.s));
    });
  };

  var open = grid0[0];
  if (open == null) return;
  var value = { hex: open.hex, q: 0, r: 0, s: 0 };
  cube[open.hex] = value;
  cubeCheck(open.hex, 0, 0, 0);

  var endCheck = async () => {
    //console.log("cube count " + cubeCount);

    if (cubeCount > 1) return process.nextTick(endCheck);

    for (var key in cube) cubeList.push(cube[key]);

    var endMap = {};
    map.forEach((a) => {
      endMap[a.hex] = a;
    });

    var dat = {
      name: data.name,
      nom: data.nom,
      type: data.territory,
      ambit: data.territory,
      lot: "lot",
      slot: "slot",
      space: data.nom,
      flavor: "",
      //  shade: colorKey,
      //  exits: exitLst,
      scale: scale,
      size: hex.length,
      width: maxX,
      height: maxY,
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      //file: file1,
      //  color: coloring,
      map: endMap,
      //grid: connect,
      cube: cubeList,
      grid: null,
    };

    const Hex = Honeycomb.extendHex({
      size: Number(1), // default: 1
      orientation: "pointy",
    });

    const Grid = Honeycomb.defineGrid(Hex);

    var copied = clone(dat);

    copied.cube.forEach((a, b) => {
      const hexPrototype = { size: 1, hex: "value" };
      var Hex = Honeycomb.extendHex(hexPrototype);
      copied.cube[b] = Hex().cubeToCartesian({ q: a.q, r: a.r, s: a.s });
      copied.cube[b].hex = a.hex;
    });

    var lesserX = 0;
    var lesserY = 0;
    var mightyX = 0;
    var mightyY = 0;

    copied.cube.forEach((a) => {
      if (a.x < lesserX) lesserX = a.x;
      if (a.x > mightyX) mightyX = a.x;
      if (a.y < lesserY) lesserY = a.y;
      if (a.y > mightyY) mightyY = a.y;
    });

    dat.left = lesserX;
    dat.right = mightyX;
    dat.top = lesserY;
    dat.bottom = mightyY;

    const grid = Grid(copied.cube);
    var hY = grid.pointHeight();
    var wX = grid.pointWidth();

    dat.width = grid.pointWidth();
    dat.height = grid.pointHeight();
    debugger

    //what the heck juice

    dat.grid = grid;
    
    cpy.atlasNow = dat;
    
    if (bal.slv != null) bal.slv({ mapBit: { idx: "atlas-hexmap", dat } });

  };

  process.nextTick(endCheck);

  return cpy;
};





import { HexmapModel } from "../hexmap.model";
import HexmapBit from "../fce/hexmap.bit";
import State from "../../99.core/state";
import * as SHAPE from "../../val/shape";
import * as Honeycomb from "honeycomb-grid";

import * as HEXMAP from "../../val/hexmap";
import * as S from 'string'
import MapBit from "../fce/map.bit";
import * as SPACE from '../../val/space'
import SpotBit from "002.space/01.focus.unit/fce/spot.bit";
