import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActClk from "../clock.action";

var bit, val, idx, dex, lst, dat;

export const initClock = (cpy: ClockModel, bal: ClockBit, ste: State) => {
  debugger
  return cpy;
};

export const updateClock = async (cpy: ClockModel, bal: ClockBit, ste: State) => {

  bit = await ste.hunt(ActClk.READ_CLOCK, { idx: bal.idx })
  var dat: TicBit = bit.clkBit.dat

  if (dat != null) {

  }


  if (bal.clk != null) {

  var moment = require('moment'); // require

  var now = moment.unix(dat.now + 10000);  
  
    //var date = DateTime.local(dat.yrs, dat.mth, dat.day, dat.hrs, dat.min, dat.sec);
    //var now = date.toUnixInteger()
    
    if ( bal.clk.sec == null ) bal.clk.sec = 0
    if ( bal.clk.min == null ) bal.clk.min = 0
    if ( bal.clk.hrs == null ) bal.clk.hrs = 0
  if ( bal.clk.day == null ) bal.clk.day = 0
    if ( bal.clk.wek == null ) bal.clk.wek = 0
    if ( bal.clk.mth == null ) bal.clk.mth = 0
    if ( bal.clk.yrs == null ) bal.clk.yrs = 0

  //  var now = moment(dat.now); 
    now.add( bal.clk.sec  , 's');
   now.add( 11  , 'm');
    now.add( bal.clk.hrs  , 'h');
    now.add( bal.clk.day  , 'd');
    now.add( bal.clk.wek  , 'w');
    now.add( bal.clk.mth  , 'M');
    now.add( bal.clk.yrs  , 'y');
  
    dat.src = now.format("dddd, MMMM Do YYYY, h:mm:ss a");
  dat.now = now.unix();
     
 
   dat.hrs = now.hour()
    dat.sec = now.second()
    dat.min = now.minute()
    dat.day = now.day()
    dat.wek = now.weeks()
    dat.mth = now.month()
   dat.yrs = now.year()
    
   // dat
    
    
    bit = await ste.hunt(ActClk.WRITE_CLOCK, { idx: bal.idx, dat });
    
  }
  else{



  }


  if (bal.slv != null) bal.slv({ clkBit: { idx: "update-clock", dat } });

  return cpy;
};


export const readClock = async (cpy: ClockModel, bal: ClockBit, ste: State) => {

  var slv = bal.slv;
  if (bal.idx == null) bal.idx = "hex00";
  bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, src: bal.src, bit: ActClk.READ_CLOCK });
  if (slv != null) slv({ clkBit: { idx: "read-clock", dat: bit.clcBit.dat } });

  return cpy;
};

export const writeClock = async (cpy: ClockModel, bal: ClockBit, ste: State) => {

  if (bal.dat == null) bal.dat = {}
  if (bal.dat.dat == null) bal.dat.dat = {}

  bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActClk.CREATE_CLOCK });
  
  ste.hunt(ActClk.UPDATE_CLOCK, { idx: bal.idx, dat: bal.dat.dat, clk: bal.clk });
  if (bal.slv != null) bal.slv({ clkBit: { idx: "write-clock", dat: bit.clcBit.dat } });


  return cpy;
};
export const removeClock = async (cpy: ClockModel, bal: ClockBit, ste: State) => {

  bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActClk.DELETE_CLOCK })
  if (bal.slv != null) bal.slv({ clkBit: { idx: "remove-clock", dat: bit.clcBit } });

  return cpy;
};
export const createClock = async (cpy: ClockModel, bal: ClockBit, ste: State) => {

  var dat: TicBit = { idx: bal.idx, src: bal.src };

  for (var key in bal.dat) {
    if (key == 'dat') continue
    dat[key] = bal.dat[key]
  }

  if (dat.idx == null) dat.idx = bal.idx;
  if (dat.src == null) dat.src = "clk-bit";
  if (dat.val == null) dat.val = 0;
  if (dat.pst == null) dat.pst = 0;
  if (dat.qtr == null) dat.qtr = 0;
  if (dat.yrs == null) dat.yrs = 3210;
  if (dat.mth == null) dat.mth = 3;
  if (dat.wek == null) dat.wek = 3;
  if (dat.day == null) dat.day = 3;
  if (dat.hrs == null) dat.hrs = 3;
  if (dat.min == null) dat.min = 3;
  if (dat.sec == null) dat.sec = 3;

  var moment = require('moment'); // require
  var now = moment(); 

  now.second( dat.sec)
  now.minute( dat.min)
  now.hour( dat.hrs )
  now.day( dat.day)
  now.month( dat.mth)
  now.year( dat.yrs)
    
  dat.src = now.format("dddd, MMMM Do YYYY, h:mm:ss a");
  dat.now = now.unix();
  

  //var date = DateTime.local(dat.yrs, dat.mth, dat.day, dat.hrs, dat.min, dat.sec);

  //dat.yrs = date.year;
  //dat.mth = date.month;
  //dat.day = date.day;
  //dat.hrs = date.hour;
  //dat.min = date.minute;
  //dat.sec = date.second;
  //dat.cnt = Math.floor(date.diff(DateTime.local(dat.yrs, 1, 1), "days").days);
  //dat.wek = date.weekNumber;
  //dat.qtr = date.quarter;

  //dat.src = date.toFormat("MM-dd-yyyy, hh:mm:ss a");
  //dat.now = date.valueOf();

  bal.slv({ clkBit: { idx: "create-clock", dat: dat } });
  return cpy;
};

export const deleteClock = async (cpy: ClockModel, bal: ClockBit, ste: State) => {
  debugger
  return cpy;
};


//adds a tic bit of material to clock and return new tic bit of result
export const pushClock = async (cpy: ClockModel, bal: ClockBit, ste: State) => {

  bit = await ste.hunt(ActClk.READ_CLOCK, { idx: bal.idx })
  var dat: TicBit = bit.clkBit.dat
  var date = DateTime.local(dat.yrs, dat.mth, dat.day, dat.hrs, dat.min, dat.sec);

  var upd = bal.dat


  return cpy;
};


export const blockClock = async (cpy: ClockModel, bal: ClockBit, ste: State) => {

  var url = 'https://cardano-mainnet.blockfrost.io/api/v0/blocks/latest/';
  //var blockfrost = process.env.BLOCKFROST;
  var blockfrost = 'mainnetiCuBCFNLf9ZP4z8lC4hEtGzMA61AuSc1';

  fetch(url, {
    method: 'GET',
    headers: { 'project_id': blockfrost },
  })
    .then(response => response.json())
    .then(response => {

      const rsp: BlockBit = response;

      if (rsp.epoch_slot == cpy.slot) {
        cpy.tick = false
      }
      else {
        cpy.tick = true
        cpy.slot = rsp.epoch_slot
      }

      val = cpy.tick;
      dex = cpy.slot

      dat = JSON.stringify(rsp)

      return bal.slv({ clkBit: { idx: "block-clock", val, dex, dat } });

    })
    .catch(err => {

      val = cpy.tick
      dex = cpy.slot

      bal.slv({ clkBit: { idx: "block-clock", val, dex } });
      console.error(err);

    })

  return cpy;
};


export const listClock = async (cpy: ClockModel, bal: ClockBit, ste: State) => {

  dat = null

  bit = await ste.hunt(ActCol.FETCH_COLLECT, { val: 0, bit: ActClk.CREATE_CLOCK })

  if (bit.clcBit.dat == null) lst = []
  else dat = bit.clcBit.dat;

  if (dat != null) {
    dat.bitList.forEach((a) => {
      lst = []
      lst.push((a.idx))
    })
  }


  if (bal.slv != null) bal.slv({ clkBit: { idx: 'list-clock', lst } });


  return cpy;
};


import { ClockModel } from "../clock.model";
import ClockBit from "../fce/clock.bit";
import State from "../../99.core/state";
import TicBit from "../fce/tic.bit";
import { DateTime } from "luxon";
import { BlockBit } from "../fce/blockbit";

//pnpm i --save-dev @types/luxon