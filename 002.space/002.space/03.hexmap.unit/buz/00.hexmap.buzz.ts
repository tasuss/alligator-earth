import * as ActMap from "../hexmap.action";

import * as ActFoc from "../../01.focus.unit/focus.action";

import * as ActSpc from "../../00.space.unit/space.action";
import * as ActCol from "../../97.collect.unit/collect.action";

import * as ActDsk from "../../act/disk.action";
import * as ActVrt from "../../act/vurt.action";

var bit, idx, lst, dat, val, src;

export const initHexmap = (cpy: HexmapModel, bal: HexmapBit, ste: State) => {
  var lst = [ActMap.OPEN_HEXMAP];
  bal.slv({ intBit: { idx: "init-focus", lst } });

  return cpy;
};

export const updateHexmap = (cpy: HexmapModel, bal: HexmapBit, ste: State) => {
  return cpy;
};


export const focusingHexmap = async (cpy: HexmapModel, bal: HexmapBit, ste: State) => {

  bit = await ste.hunt(ActMap.READ_HEXMAP, { idx: bal.idx })
  var hexmap: MapBit = bit.mapBit.dat;

  bit = await ste.hunt(ActFoc.READ_FOCUS, { idx: bal.src })
  var focus: SpotBit = bit.focBit.dat;

  bit = await ste.hunt(ActFoc.WRITE_FOCUS, { idx: focus.idx, dat: { map: hexmap.idx } })
  var focus: SpotBit = bit.focBit.dat;

  if (bal.slv != null) bal.slv({ mapBit: { idx: "focusing-hexmap", dat: { idx: hexmap.idx, src: focus.idx, dat: focus } } });

  return cpy;
};


export const defocusHexmap = (cpy: HexmapModel, bal: HexmapBit, ste: State) => {
  debugger
  return cpy;
};



export const openHexmap = async (cpy: HexmapModel, bal: HexmapBit, ste: State) => {

  if ( bal.idx.includes('.') == false ) bal.idx = bal.src;

  var url = 'https://www.fictiq.com/dat/hexmap/' + bal.idx + '.json';
  bit = await fetch(url, { method: 'GET', headers: { 'head': 'none' } })
  dat = await bit.json()

  bit = await ste.hunt(ActMap.ADD_HEXMAP, { idx:bal.idx, dat: { dat, gph: 'gph00' } })
      
  if (bal.slv != null) bal.slv({ mapBit: { idx: "open-hexmap", dat } });

  return cpy;
};

export const addHexmap = async (cpy: HexmapModel, bal: HexmapBit, ste: State) => {

  if (bal.idx == null) bal.idx = 'hex000'

  dat = { frm: 'geojson', bit: bal.dat.dat, gph: bal.dat.gph }


  bit = await ste.hunt(ActMap.WRITE_HEXMAP, { idx: bal.idx, dat })

  if (bal.slv != null) bal.slv({ mapBit: { idx: "add-hexmap", dat: bit.mapBit.dat } });
  return cpy;
};


export const writeHexmap = async (cpy: HexmapModel, bal: HexmapBit, ste: State) => {



  bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, dat: bal.dat, bit: ActMap.CREATE_HEXMAP })
  if (bal.slv != null) bal.slv({ mapBit: { idx: "write-hexmap", dat: bit.clcBit.dat } });

  return cpy;
};


export const readHexmap = async (cpy: HexmapModel, bal: HexmapBit, ste: State) => {




  var slv = bal.slv;
  if (bal.idx == null) bal.idx = 'map00';
  bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActMap.CREATE_HEXMAP })
  if (slv != null) slv({ mapBit: { idx: "read-hexmap", dat: bit.clcBit.dat } });

  return cpy;
};


export const copyHexmap = async (cpy: HexmapModel, bal: HexmapBit, ste: State) => {
  return cpy;
};


var geojson = false;

export const geojsonHexmap = async (cpy: HexmapModel, bal: HexmapBit, ste: State) => {



  debugger


  if (bal.slv != null) bal.slv({ mapBit: { idx: "geojson-hexmap", dat: cpy.geoJsonNow } });
  return cpy;
};



export const toolHexmap = async (cpy: HexmapModel, bal: HexmapBit, ste: State) => {

  if (geojson == true) {
    if (bal.slv != null) bal.slv({ mapBit: { idx: "tool-hexmap" } });
    return
  }

  geojson = true;

  var link = ["https://geoman.io/geojson-editor", "https://www.keene.edu/campus/maps/tool/"];

  var Chance = require("chance");
  var fate = new Chance();
  var now = fate.pickone(link);

  const open = require('open')
  var loc = './vew.shd.bat'
  bit = await open(now)

  if (bal.slv != null) bal.slv({ mapBit: { idx: "tool-hexmap", src: now } });
  return cpy;
};


export const saveHexmap = async (cpy: HexmapModel, bal: HexmapBit, ste: State) => {

  bal.src = S(bal.src).slugify().s

  if (bal.val == null) bal.val = 10

  val = String(bal.val).padStart(5, '0');

  bit = await ste.bus(ActDsk.ENSURE_DISK, { src: cpy.hexmapLoc })

  src = cpy.hexmapLoc + bal.src + '.' + val + '.json';

  bit = await ste.bus(ActDsk.WRITE_DISK, { idx: null, src, dat: cpy.atlasNow, val: 1 })
  if (bal.slv != null) bal.slv({ mapBit: { idx: "save-hexmap", src } });

  return cpy;
};

export const storeHexmap = async (cpy: HexmapModel, bal: HexmapBit, ste: State) => {

  bit = await ste.hunt(ActMap.ADD_HEXMAP, { idx: bal.idx, dat: { gph: bal.src, dat: bal.dat } });
  if (bal.slv != null) bal.slv({ mapBit: { idx: "store-hexmap", dat: bal.dat } });

  return cpy;
};


export const listHexmap = async (cpy: HexmapModel, bal: HexmapBit, ste: State) => {

  dat = null

  bit = await ste.hunt(ActCol.FETCH_COLLECT, { val: 0, bit: ActMap.CREATE_HEXMAP })

  if (bit.clcBit.dat == null) lst = []
  else dat = bit.clcBit.dat;

  if (dat != null) {
    dat.bitList.forEach((a) => {
      lst = []
      lst.push((a.idx))
    })
  }


  //process.chdir("../002.space")

  //src = cpy.hexmapLoc
  //bit = await ste.bus(ActDsk.LIST_DISK, { idx: null, src })

  //lst = bit.dskBit.lst

  //if (bal.idx != null) process.chdir(bal.idx)

  if (bal.slv != null) bal.slv({ mapBit: { idx: "list-hexmap", lst } });

  return cpy;
};



export const loadHexmap = async (cpy: HexmapModel, bal: HexmapBit, ste: State) => {

  if (bal.idx != null) process.chdir("../002.space")

  if (bal.val != null) val = String(bal.val).padStart(5, '0');
  if (bal.val != null) bal.src = S(bal.src).slugify().s

  bit = await ste.bus(ActDsk.ENSURE_DISK, { src: cpy.hexmapLoc })

  if (val != null) src = cpy.hexmapLoc + bal.src + '.' + val + '.json';
  else src = cpy.hexmapLoc + bal.src;

  bit = await ste.bus(ActDsk.READ_DISK, { idx: null, src, val: 1 })
  dat = bit.dskBit.dat

  if (bal.idx != null) process.chdir(bal.idx)

  if (bal.slv != null) bal.slv({ mapBit: { idx: "load-hexmap", dat } });

  return cpy;
};



export const nameHexmap = (cpy: HexmapModel, bal: HexmapBit, ste: State) => {

  cpy.mapNomNow = bal.idx;
  if (bal.slv != null) bal.slv({ mapBit: { idx: "name-hexmap", dat: cpy.atlasNow } });

  return cpy;
};


export const replaceHexmap = (cpy: HexmapModel, bal: HexmapBit, ste: State) => {

  cpy.atlasNow = bal.dat;
  cpy.sizeNow = cpy.atlasNow.length;

  if (bal.slv != null) bal.slv({ mapBit: { idx: "replace-hexmap", dat: cpy.atlasNow } });

  return cpy;
};


export const seekHexmap = (cpy: HexmapModel, bal: HexmapBit, ste: State) => {
  debugger
  return cpy;
};


export const selectHexmap = async (cpy: HexmapModel, bal: HexmapBit, ste: State) => {

  bit = await ste.hunt(ActMap.READ_HEXMAP, { idx: bal.idx })
  var hexmap: MapBit = bit.mapBit.dat;

  cpy.select = hexmap;

  if (bal.slv != null) bal.slv({ mapBit: { idx: "select-hexmap", dat: cpy.select } });

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
