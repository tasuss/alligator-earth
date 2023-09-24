import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActBus from "../../99.bus.unit/bus.action";
import * as ActBei from "../../03.being.unit/being.action";
import * as ActFte from "../../act/fate.action";
import * as ActClr from "../../act/color.action";
import * as ActClk from "../../act/clock.action";
import * as ActDsk from "../../act/disk.action";
import * as ActRsk from "../../act/risk.action";


var bit, lst;

export const initBeing = async (cpy: BeingModel, bal: BeingBit, ste: State) => {

  //console.log('init-being')
  
  var lst = [];

  bit = await ste.hunt(ActBus.INIT_BUS, { idx:cpy.idx, src:bal.src, lst: [ActBei], dat: bal.dat })

  //bit = await ste.bus(ActClk.OPEN_CLOCK, { idx: 'clk00' })

  if (bal.val == 1) bit = await ste.hunt(ActMnu.INIT_MENU)

  //let us open up a time 


  if (bal.slv != null) bal.slv({ intBit: { idx: "init-being" } });

  return cpy;
};

export const accessBeing = async (cpy: BeingModel, bal: BeingBit, ste: State) => {


  bit = await ste.hunt(ActBei.READ_BEING, { val: cpy.nowDex })


  

  if (bal.slv != null) bal.slv({ beiBit: { idx: "access-being", dat: bit.beiBit.dat } });

  return cpy;
};

export const updateBeing = (cpy: BeingModel, bal: BeingBit, ste: State) => {
  return cpy;
};



export const createBeing = async (cpy: BeingModel, bal: BeingBit, ste: State) => {

  if (bal.idx == null) bal.idx = String(cpy.avasBitList.length).padStart(6, "0")

  var avaBit: AvasBit = { idx: bal.idx }

  var fidelity, recognition, cohesion;
  var direction, purpose, sovereign;
  var cognition, vocabulary, reminiscence;
  var style, humour, vision;
  var bliyte, grusit, flxuow, kldodu;
  var force, charge, scale
  var discernment, impulse, sensation;
  var contribution, gravity, providence;
  var pizazz, oomph, zing;

  bit = await ste.bus(ActClr.FETCH_COLOR, { val: 100, src: 2 })
  lst = bit.clrBit.lst

  fidelity = lst.shift()
  recognition = lst.shift()
  cohesion = lst.shift()

  direction = lst.shift()
  purpose = lst.shift()
  sovereign = lst.shift()

  cognition = lst.shift()
  vocabulary = lst.shift()
  reminiscence = lst.shift()

  style = lst.shift()
  humour = lst.shift()
  vision = lst.shift()

  bliyte = lst.shift()
  grusit = lst.shift()
  flxuow = lst.shift()
  kldodu = lst.shift()

  force = lst.shift()
  charge = lst.shift()
  scale = lst.shift()

  discernment = lst.shift()
  impulse = lst.shift()
  sensation = lst.shift()

  contribution = lst.shift()
  gravity = lst.shift()
  providence = lst.shift()

  pizazz = lst.shift()
  oomph = lst.shift()
  zing = lst.shift()

  var autn: AuthorityBit = { direction, purpose, sovereign };
  var autr: AuthenticityBit = { fidelity, recognition, cohesion }
  var capa: CapacityBit = { cognition, vocabulary, reminiscence }
  var ctiv: CreativityBit = { style, humour, vision };
  var etri: EternityBit = { bliyte, grusit, flxuow, kldodu };
  var ints: IntensityBit = { force, charge, scale };
  var morl: MoralityBit = { discernment, impulse, sensation };
  var pont: PotentialityBit = { contribution, gravity, providence };
  var viti: VitalityBit = { pizazz, oomph, zing };

  avaBit.gft = { autn, autr, capa, ctiv, etri, ints, morl, pont, viti }
  avaBit.now = 'clk00';
  avaBit.src = bal.src

  bit = await ste.hunt(ActBei.AGE_BEING, avaBit)
  avaBit.age = {}
  avaBit.age.now = bit.beiBit.dat.age;
  avaBit.age.dob = bit.beiBit.dat.dob;

  bit = await ste.hunt(ActBei.WRITE_BEING, { dat: avaBit })
  
  cpy.nowDex = bit.beiBit.dat.dex

  if (bal.slv != null) bal.slv({ beiBit: { idx: "create-being", dat:avaBit } });

  return cpy;
};


export const writeBeing = async (cpy: BeingModel, bal: BeingBit, ste: State) => {

  if (cpy.avasBits[bal.dat.idx] == null) {
    bal.dat.dex = cpy.avasBitList.length;
    cpy.avasBits[bal.dat.idx] = bal.dat.dex;
    cpy.avasBitList.push(bal.dat);

  } else {
    cpy.avasBitList[bal.dat.dex] = bal.dat
  }

  bit = cpy.avasBitList[bal.dat.dex]

  var fileLoc = './data/avas/'+ bit.idx + '.json'
  console.log("writing " + fileLoc)
  
  
  bit = await ste.bus(ActDsk.WRITE_DISK, { val:1, src:fileLoc, dat: bit})
  
  if (bal.slv != null) bal.slv({ beiBit: { idx: "write-being", dat: cpy.avasBitList[bal.dat.dex] } });

  return cpy;
};
export const readBeing = (cpy: BeingModel, bal: BeingBit, ste: State) => {

  if (bal.val != null) {

    cpy.readAvasBit = cpy.avasBitList[bal.val];
    if (bal.slv != null) bal.slv({ beiBit: { idx: "read-being", dat: cpy.readAvasBit } });
    return cpy

  }

  if (bal.idx == null) bal.idx = String(cpy.avasBitList.length).padStart(6, "0");

  cpy.readAvasBit = cpy.avasBitList[cpy.avasBits[bal.idx]];

  if (bal.slv != null) bal.slv({ beiBit: { idx: "read-being", dat: cpy.readAvasBit } });

  return cpy;
};

export const ageBeing = async (cpy: BeingModel, bal: BeingBit, ste: State) => {


  var yrs, mth, wek, day, min, sec

  switch (bal.src) {

    case STAGES.TODDLER:
      wek = await ste.bus(ActFte.INTEGER_FATE, { lst: [99, 210] })
      day = await ste.bus(ActFte.INTEGER_FATE, { lst: [1, 21] })
      min = await ste.bus(ActFte.INTEGER_FATE, { lst: [99, 210] })
      sec = await ste.bus(ActFte.INTEGER_FATE, { lst: [99, 210] })
      break;

    case STAGES.CHILD:
      yrs = await ste.bus(ActFte.INTEGER_FATE, { lst: [4, 9] })
      mth = await ste.bus(ActFte.INTEGER_FATE, { lst: [1, 12] })
      day = await ste.bus(ActFte.INTEGER_FATE, { lst: [1, 21] })
      min = await ste.bus(ActFte.INTEGER_FATE, { lst: [99, 210] })
      sec = await ste.bus(ActFte.INTEGER_FATE, { lst: [99, 210] })
      break;

    case STAGES.TWEEN:
      yrs = await ste.bus(ActFte.INTEGER_FATE, { lst: [9, 12] })
      mth = await ste.bus(ActFte.INTEGER_FATE, { lst: [1, 12] })
      day = await ste.bus(ActFte.INTEGER_FATE, { lst: [1, 21] })
      min = await ste.bus(ActFte.INTEGER_FATE, { lst: [99, 210] })
      sec = await ste.bus(ActFte.INTEGER_FATE, { lst: [99, 210] })
      break;

    case STAGES.TEENAGER:
      yrs = await ste.bus(ActFte.INTEGER_FATE, { lst: [13, 19] })
      mth = await ste.bus(ActFte.INTEGER_FATE, { lst: [1, 12] })
      day = await ste.bus(ActFte.INTEGER_FATE, { lst: [1, 21] })
      min = await ste.bus(ActFte.INTEGER_FATE, { lst: [99, 210] })
      sec = await ste.bus(ActFte.INTEGER_FATE, { lst: [99, 210] })
      break;

    case STAGES.SOLDIER:
      yrs = await ste.bus(ActFte.INTEGER_FATE, { lst: [20, 45] })
      mth = await ste.bus(ActFte.INTEGER_FATE, { lst: [1, 12] })
      day = await ste.bus(ActFte.INTEGER_FATE, { lst: [1, 21] })
      min = await ste.bus(ActFte.INTEGER_FATE, { lst: [99, 210] })
      sec = await ste.bus(ActFte.INTEGER_FATE, { lst: [99, 210] })
      break

    case STAGES.JUDGE:
      yrs = await ste.bus(ActFte.INTEGER_FATE, { lst: [45, 60] })
      mth = await ste.bus(ActFte.INTEGER_FATE, { lst: [1, 12] })
      day = await ste.bus(ActFte.INTEGER_FATE, { lst: [1, 21] })
      min = await ste.bus(ActFte.INTEGER_FATE, { lst: [99, 210] })
      sec = await ste.bus(ActFte.INTEGER_FATE, { lst: [99, 210] })
      break

    case STAGES.MONARCH:
      yrs = await ste.bus(ActFte.INTEGER_FATE, { lst: [60, 80] })
      mth = await ste.bus(ActFte.INTEGER_FATE, { lst: [1, 12] })
      day = await ste.bus(ActFte.INTEGER_FATE, { lst: [1, 21] })
      min = await ste.bus(ActFte.INTEGER_FATE, { lst: [99, 210] })
      sec = await ste.bus(ActFte.INTEGER_FATE, { lst: [99, 210] })
      break

    case STAGES.OLD_AGED:
      yrs = await ste.bus(ActFte.INTEGER_FATE, { lst: [90, 111] })
      mth = await ste.bus(ActFte.INTEGER_FATE, { lst: [1, 12] })
      day = await ste.bus(ActFte.INTEGER_FATE, { lst: [1, 21] })
      min = await ste.bus(ActFte.INTEGER_FATE, { lst: [99, 210] })
      sec = await ste.bus(ActFte.INTEGER_FATE, { lst: [99, 210] })
      break;

    case STAGES.INFANT:
      wek = await ste.hunt(ActFte.INTEGER_FATE, { lst: [3, 99] })
      break;

    //infant
    default:
      debugger
      break;
  }


  if (yrs != null) yrs = yrs.fteBit.val
  if (mth != null) mth = mth.fteBit.val
  if (wek != null) wek = wek.fteBit.val
  if (day != null) day = day.fteBit.val
  if (min != null) min = min.fteBit.val
  if (sec != null) sec = sec.fteBit.val

  bit = await ste.bus(ActClk.REDUCE_CLOCK, { idx: 'clk-' + bal.idx, src: bal['now'], yrs, mth, wek, day, min, sec })
  bit = await ste.bus(ActClk.COMPARE_CLOCK, { idx: 'clk-' + bal.idx, src: bal['now'] })
  var age = bit.clkBit.dat
  age.idx = 'clk-' + bal.idx
  age.src = bal['now']
  bit = await ste.bus(ActClk.READ_CLOCK, { idx: 'clk-' + bal.idx })
  var dob = bit.clkBit.dat;

  if (bal.slv != null) bal.slv({ beiBit: { idx: "age-being", dat: { age, dob } } });


  return cpy;
};
export const advanceBeing = async (cpy: BeingModel, bal: BeingBit, ste: State) => {

  bit = await ste.hunt(ActBei.READ_BEING, { val: cpy.nowDex })
  var ava: AvasBit = bit.beiBit.dat;

  bit = await ste.bus(ActClk.UPDATE_CLOCK, { idx: ava.now, day: 1, min: 3, sec: 4 })
  bit = await ste.bus(ActClk.COMPARE_CLOCK, { idx: 'clk-' + ava.idx, src: ava.now })
  ava.age.now = bit.clkBit.dat

  bit = await ste.bus(ActRsk.ARTICULATE_RISK, {})
  debugger

  bit = await ste.hunt(ActBei.WRITE_BEING, { dat: ava })

  var dat = bit.beiBit.dat
  if (bal.slv != null) bal.slv({ beiBit: { idx: "advance-being", dat } });

  return cpy;
};

export const loadBeing = async (cpy: BeingModel, bal:BeingBit, ste: State) => {
  
  bit = await ste.hunt(ActBei.WRITE_BEING, { dat: bal.dat })
  cpy.nowDex = bit.beiBit.dat.dex

  if (bal.slv != null) bal.slv({ beiBit: { idx: "load-being", dat:bit.beiBit.dat } });
  
 return cpy;
 };



export const openBeing = (cpy: BeingModel, bal:BeingBit, ste: State) => {
 
  if (bal.slv != null) bal.slv({ beiBit: { idx: "open-being", lst:[] } });

 return cpy;
 };


import { BeingModel } from "../being.model";
import BeingBit from "../fce/being-pivot.bit";
import State from "../../99.core/state"; import AvasBit from "../fce/avas.bit";
import GiftBit from "../fce/gift.bit";
import AuthorityBit from "../fce/gift.autr.bit";
import AuthenticityBit from "../fce/gift.autn.bit";
import CapacityBit from "../fce/gift.capa.bit";
import CreativityBit from "../fce/gift.ctiv.bit";
import EternityBit from "../fce/gift.etri.bit";
import IntensityBit from "../fce/gift.ints.bit";
import MoralityBit from "../fce/gift.morl.bit";
import PotentialityBit from "../fce/gift.pont.bit";
import VitalityBit from "../fce/gift.viti.bit";
import * as STAGES from "../../val/stages"

