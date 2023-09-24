import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActBus from "../../99.bus.unit/bus.action";
import * as ActClr from "../../04.color.unit/color.action";
import * as ActErt from "../../00.earth.unit/earth.action";
import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActPlt from "../../08.plot.unit/plot.action";
import * as ActBei from "../../03.being.unit/being.action";
import * as ActFte from "../../02.fate.unit/fate.action";
import * as ActClk from "../../01.clock.unit/clock.action";

import * as ActDsk from "../../act/disk.action";

var bit, val, idx, dex, lst, dat;

export const initEarth = async (cpy: EarthModel, bal: EarthBit, ste: State) => {

    bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActErt], dat: bal.dat, src: bal.src })

    bit = await ste.hunt(ActClr.INIT_COLOR, { lst: bal.lst, bit: bal.bit, dat: bal.dat })
    if (bal.val == 1) patch(ste, ActMnu.INIT_MENU, bal);
    if (bal.slv != null) bal.slv({ intBit: { idx: "init-symbol" } });

    return cpy;
};

export const updateEarth = async (cpy: EarthModel, bal: EarthBit, ste: State) => {

    //bit = await ste.bus(ActTme.UPDATE_TIME, { idx: 'ert00', sec: 7 })
    //console.log(JSON.stringify(bit))

    if (bal.slv != null) bal.slv({ ertBit: { idx: "update-earth" } });

    return cpy;
};

export const openEarth = async (cpy: EarthModel, bal: EarthBit, ste: State) => {


    //need some time code when to begin 
    bit = await ste.hunt(ActErt.WRITE_EARTH, { idx: bal.idx})


    //bit = await ste.bus(ActTme.WRITE_TIME, { idx: 'ert00', yrs: 2000, mth: 1, day: 1, hrs: 7, min: 7, sec: 7 })
    if (bal.slv != null) bal.slv({ ertBit: { idx: "open-earth", dat: bit.ertBit.dat } });

    return cpy;
};


export const readEarth = async (cpy: EarthModel, bal: EarthBit, ste: State) => {

    var slv = bal.slv;
    if (bal.idx == null) bal.idx = 'ert00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActErt.CREATE_EARTH })     
    if (slv != null) slv({ ertBit: { idx: "read-earth", dat: bit.clcBit.dat } });
    return cpy;
};
export const writeEarth = async (cpy: EarthModel, bal: EarthBit, ste: State) => {

    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, dat: bal.dat, bit: ActErt.CREATE_EARTH })
    
    var clkBit = bit.clcBit.dat.clkBit
    
    if (bal.slv != null) bal.slv({ ertBit: { idx: "read-earth", dat: bit.clcBit.dat } });


    return cpy;
};

export const pushEarth = async (cpy: EarthModel, bal: EarthBit, ste: State) => {

    bit = await ste.hunt(ActErt.READ_EARTH, {idx: bal.idx})
    bit = bit.ertBit.dat
    var sim = bit as SimBit;

    //bit = await ste.bus(ActTme.PUSH_TIME, { idx: bal.idx, dat: { sec: 60 } })
    //var clkBit = sim.clkBit = bit.tmeBit.dat;
    
    bit = await ste.hunt( ActClk.WRITE_CLOCK, { idx: idx, clk: {  min: 5, sec: 6  } })
    sim.now = bit.clkBit.dat.src
    

    
    bit = await ste.hunt(ActPlt.PUSH_PLOT, { lst: sim.lst })
    sim.lst = bit.pltBit.lst;

    bit = await ste.hunt(ActClr.FETCH_COLOR, { idx: sim.lvl })
    sim.fte = bit.clrBit.dat

    bit = await ste.hunt(ActErt.WRITE_EARTH, { idx: sim.idx, dat: sim })
    var simBit = bit.ertBit.dat;
    

    if (bal.slv != null) bal.slv({ ertBit: { idx: "push-earth", dat: simBit } });
    return cpy;
};

export const createEarth = async (cpy: EarthModel, bal: EarthBit, ste: State) => {

    if (bal.idx == null) bal.idx = 'tme00';
    //if (bal.src == null) bal.src = TIME.CLOCK;

    bit = await ste.hunt(ActFte.APPLE_FATE, {})
    idx = bit.fteBit.val

    bit = await ste.hunt( ActClk.WRITE_CLOCK, { idx: idx, dat: { yrs: 1944, mth: 6, hrs: 15, min: 5, sec: 6, day: 21 } })
    var clkBit = bit.clkBit.dat;
    


    bit = await ste.hunt(ActPlt.OPEN_PLOT, {})
    // we use the plot bit to create the being bit
    bit = await ste.hunt(ActBei.OPEN_BEING, {})


    var sim: SimBit = bal.dat
    if (sim == null) sim = { idx }
    if (sim.idx == null) sim.idx = bal.idx;
    if (sim.src == null) sim.src = "sim-bit";
    if (sim.lst == null) sim.lst = [];
    if (sim.now == null) sim.now = 0;
    if (sim.cde == null) sim.cde = 'time-code';
    
    //timecode should go here

    //sim.clkBit = clkBit;

    sim.lvl = COSMOS.BLESSED.idx;

    bit = await ste.hunt(ActClr.FETCH_COLOR, { idx: sim.lvl })
    sim.pow = bit.clrBit.dat

    bit = await ste.hunt(ActClr.FETCH_COLOR, { idx: sim.lvl })
    sim.fte = bit.clrBit.dat

    if (bal.slv != null) bal.slv({ ertBit: { idx: "create-earth", dat: sim } });

    return cpy;
};



export const autoEarth = async (cpy: EarthModel, bal: EarthBit, ste: State) => {


    if (bal.val == null) bal.val = 1;

    bit = await ste.hunt(ActErt.READ_EARTH, { idx: bal.idx })
    bit = bit.ertBit.dat
    var sim = bit as SimBit;

    const next = async (val) => {
        if ( val == 0 ) {
            
            if (bal.slv != null) bal.slv({ ertBit: { idx: "auto-earth", dat: sim } });
            return 
        }
        val -= 1;
        
        bit = await ste.hunt(ActErt.PUSH_EARTH, {idx:sim.idx})
        var simBit = bit.ertBit.dat;
        var clkBit = simBit.clkBit;        
        
        next( val )
    }

    next(bal.val)
    return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });


import { EarthModel } from "../earth.model";
import EarthBit from "../fce/earth.bit";
import State from "../../99.core/state";
import SimBit from "../fce/sim.bit";

import * as AMBIT from "../../val/ambit"
import * as COSMOS from "../../val/cosmos"
import ClockBit from "../fce/clock.bit";

