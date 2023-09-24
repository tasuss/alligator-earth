import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActBus from "../../99.bus.unit/bus.action";
import * as ActErt from "../../00.earth.unit/earth.action";
import * as ActPvt from "../../96.pivot.unit/pivot.action";

import * as ActVrt from "../../act/vurt.action";
import * as ActDsk from "../../act/disk.action";

var bit, val, idx, dex, lst, dat;

export const initPivot = async (cpy: PivotModel, bal: PivotBit, ste: State) => {

    if (bal.dat != null) bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActErt], dat: bal.dat, src: bal.src })
    if (bal.val == 1) patch(ste, ActMnu.INIT_MENU, bal);
    if (bal.slv != null) bal.slv({ intBit: { idx: "init-pivot" } });

    return cpy;
};

export const updatePivot = (cpy: PivotModel, bal: PivotBit, ste: State) => {


    const { exec } = require('child_process');

    exec('tsc -b 000.play', async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
        }

        process.chdir("../999.vurt");
        bit = await ste.bus(ActVrt.BUNDLE_VURT, { src: "011.earth" });
        process.chdir("../011.earth");

        bit = await ste.bus(ActDsk.READ_DISK, { src: './work/011.earth.js' })
        var play = bit.dskBit.dat;

        bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../../gillisse/public/jsx/011.earth.js', dat: play })

        bit = await ste.bus(ActDsk.READ_DISK, { src: './index.html' })
        var html = bit.dskBit.dat;

        bit = await ste.bus(ActDsk.READ_DISK, { src: './index.js' })
        var index = bit.dskBit.dat;

        bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../../gillisse/public/jsx/index.js', dat: index })
        bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../../gillisse/index.html', dat: html })

        //bit = await ste.bus(ActDsk.COPY_DISK, { src: './vue', idx: '../../gillisse/src' })

        setTimeout(() => {
            if (bal.slv != null) bal.slv({ pvtBit: { idx: "update-pivot" } });
        }, 3);

    });

    return cpy;
};


export const openPivot = async (cpy: PivotModel, bal: PivotBit, ste: State) => {

    bit = await ste.bus(ActDsk.COPY_DISK, { src: './vue', idx: '../../gillisse/src' })

    bit = await ste.hunt(ActPvt.RUN_PIVOT, {})

    const open = require('open')
    var loc = './vrt.opn.bat'
    bit = await open(loc)

    const { exec } = require('child_process');

    //process.chdir("../../deploy/fictiq.com");

    //exec('vrt.dev.bat', async (err, stdout, stderr) => {
    //   if (err) {
    //       console.error(`exec error: ${err}`);
    //   }

    //   process.chdir("../../packages/000.play");

    if (bal.slv != null) bal.slv({ pvtBit: { idx: "open-pivot" } });
    //});


    return cpy;
};
export const runPivot = async (cpy: PivotModel, bal: PivotBit, ste: State) => {

    const open = require('open')

    var loc = './vrt.gil.bat'
    bit = await open(loc)

    setTimeout(() => {
        if (bal.slv != null) bal.slv({ pvtBit: { idx: "run-pivot" } });
    })

    return cpy;
};
export const editPivot = (cpy: PivotModel, bal: PivotBit, ste: State) => {

    const { exec } = require('child_process');

    process.chdir("../../studio/");

    exec('start Code.exe ../gillisse', async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
        }

        process.chdir("../packages/011.earth");

        if (bal.slv != null) bal.slv({ pvtBit: { idx: "edit-pivot", dat: {} } });
    });

    return cpy;
};

export const patchPivot = (cpy: PivotModel, bal: PivotBit, ste: State) => {
    debugger
    return cpy;
};


export const cloudPivot = async (cpy: PivotModel, bal: PivotBit, ste: State) => {

    bit = await ste.bus(ActDsk.COPY_DISK, { src: './cloud', idx: '../../deploy/fictiq.com' })

    if (bal.slv != null) bal.slv({ pvtBit: { idx: "cloud-pivot", dat: {} } });

    return cpy;
};



var patch = (ste, type, bale) => ste.dispatch({ type, bale });



import { PivotModel } from "../pivot.model";
import PivotBit from "../fce/pivot.bit";
import State from "../../99.core/state";