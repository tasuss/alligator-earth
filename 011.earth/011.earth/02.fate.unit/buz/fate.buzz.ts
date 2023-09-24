import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActBus from "../../99.bus.unit/bus.action";
import * as ActFte from "../../02.fate.unit/fate.action";


export const initFate = async (cpy: FateModel, bal: FateBit, ste: State) => {

    var bit;
    var lst = [];

    bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, src: bal.src, lst: [ActFte], dat: bal.dat })

    if (bal.val == 1) bit = await ste.hunt(ActMnu.INIT_MENU)

    updateFate(cpy, bal, ste)

    if (bal.slv != null) bal.slv({ intBit: { idx: "init-fate" } });


    return cpy;
};

export const updateFate = (cpy: FateModel, bal: FateBit, ste: State) => {

    var Chance = require("chance");
    cpy.fate = new Chance(cpy.seed);
    cpy.seed += 1;

    //if (bal.slv != null) bal.slv({ fteBit: { idx: "update-fate" } });

    return cpy;
};


export const integerFate = (cpy: FateModel, bal: FateBit, ste: State) => {

    updateFate(cpy, bal, ste)

    var val = cpy.fate.integer({ min: bal.lst[0], max: bal.lst[1] });
    if (bal.slv != null) bal.slv({ fteBit: { idx: "integer-fate", val } });

    return cpy;
};



export const appleFate = (cpy: FateModel, bal: FateBit, ste: State) => {

    updateFate(cpy, bal, ste)

    var val = cpy.fate.apple_token()
    if (bal.slv != null) bal.slv({ fteBit: { idx: "apple-fate", val } });

    return cpy;
};


import { FateModel } from "../fate.model";
import FateBit from "../fce/fate.bit";
import State from "../../99.core/state";