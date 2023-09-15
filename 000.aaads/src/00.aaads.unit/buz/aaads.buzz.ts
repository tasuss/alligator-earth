import * as ActScn from "../../01.scene.unit/scene.action";

import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActAaa from "../aaads.action";

var bit, val, idx, dex, lst, dat;

export const initAaads = async (cpy: AaadsModel, bal: AaadsBit, ste: State) => {

    if (bal.dat != null) bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActAaa], dat: bal.dat, src: bal.src })

    //if (bal.val == 1) patch(ste, ActMnu.INIT_MENU, bal);

    patch(ste, ActAaa.OPEN_AAADS, bal);

    if (bal.slv != null) bal.slv({ intBit: { idx: "init-aaads" } });

    return cpy;
};


export const openAaads = async (cpy: AaadsModel, bal: AaadsBit, ste: State) => {


    bit = await ste.hunt( ActScn.HUNT_SCENE, {} );

    if (bal.slv != null) bal.slv({ aaaBit: { idx: "open-aaads" } });

    return cpy;
};


export const updateAaads = (cpy: AaadsModel, bal: AaadsBit, ste: State) => {


    if (bal.slv != null) bal.slv({ aaaBit: { idx: "update-aaads" } });


    return cpy;
};


export const runAaads = async (cpy: AaadsModel, bal: AaadsBit, ste: State) => {

    if (bal.slv != null) bal.slv({ aaaBit: { idx: "run-aaads" } });

    return cpy;
};
export const editAaads = (cpy: AaadsModel, bal: AaadsBit, ste: State) => {


    if (bal.slv != null) bal.slv({ aaaBit: { idx: "edit-aaads", dat: {} } });

    return cpy;
};

export const patchAaads = (cpy: AaadsModel, bal: AaadsBit, ste: State) => {
    debugger
    return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });

import { AaadsModel } from "../aaads.model";
import AaadsBit from "../fce/aaads.bit";
import State from "../../99.core/state";

