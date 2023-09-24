import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActLgt from "../light.action";

import * as ActVrt from "../../act/vurt.action";
import * as ActDsk from "../../act/disk.action";

var bit, val, idx, dex, lst, dat;

export const initLight = async (cpy: LightModel, bal: LightBit, ste: State) => {

    if (bal.dat != null) bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActLgt], dat: bal.dat, src: bal.src })

    if (bal.val == 1) patch(ste, ActMnu.INIT_MENU, bal);


    if (bal.slv != null) bal.slv({ intBit: { idx: "init-light" } });

    return cpy;
};

export const updateLight = (cpy: LightModel, bal: LightBit, ste: State) => {

    const { exec } = require('child_process');

    exec('tsc -b 003.light', async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
        }

        process.chdir("../999.vurt");
        bit = await ste.bus(ActVrt.BUNDLE_VURT, { src: "003.light" });
        process.chdir("../003.light");

        bit = await ste.bus(ActDsk.READ_DISK, { src: './work/003.light.js' })
        var light = bit.dskBit.dat;

        bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../gillisse/public/jsx/003.light.js', dat: light })

        bit = await ste.bus(ActDsk.READ_DISK, { src: './index.html' })
        var html = bit.dskBit.dat;

        bit = await ste.bus(ActDsk.READ_DISK, { src: './index.js' })
        var index = bit.dskBit.dat;

        bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../gillisse/public/jsx/index.js', dat: index })
        bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../gillisse/index.html', dat: html })

        setTimeout(() => {
            if (bal.slv != null) bal.slv({ lgtBit: { idx: "update-light" } });
        }, 3);

    });

    return cpy;
};


export const openLight = async (cpy: LightModel, bal: LightBit, ste: State) => {

    bit = await ste.bus(ActDsk.COPY_DISK, { src: './vue', idx: '../gillisse/src' })

    bit = await ste.hunt(ActLgt.RUN_LIGHT, {})

    const open = require('open')

    var loc = './vrt.opn.bat'
    bit = await open(loc)

    setTimeout(() => {
        if (bal.slv != null) bal.slv({ lgtBit: { idx: "open-light" } });
    }, 33)


    return cpy;
};
export const runLight = async (cpy: LightModel, bal: LightBit, ste: State) => {

    const open = require('open')

    var loc = './vrt.gil.bat'
    bit = await open(loc)

    setTimeout(() => {
        if (bal.slv != null) bal.slv({ lgtBit: { idx: "run-light" } });
    })

    return cpy;
};
export const editLight = (cpy: LightModel, bal: LightBit, ste: State) => {

    const { exec } = require('child_process');

    process.chdir("../../studio/");

    exec('start Code.exe ../packages/gillisse', async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
        }

        process.chdir("../packages/003.light");

        if (bal.slv != null) bal.slv({ lgtBit: { idx: "edit-light", dat: {} } });
    });

    return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });

export const patchLight = (cpy: LightModel, bal: LightBit, ste: State) => {
    debugger
    return cpy;
};

export const testLight = async (cpy: LightModel, bal: LightBit, ste: State) => {

    if (bal.slv != null) bal.slv({ spcBit: { idx: "test-light" } });

    return cpy;
};
export const cloudLight = async (cpy: LightModel, bal: LightBit, ste: State) => {

    bit = await ste.bus(ActDsk.READ_DISK, { src: './work/003.light.js' })
    var time = bit.dskBit.dat;

    bit = await ste.bus(ActDsk.WRITE_DISK, { src: './cloud/003.light.js', dat: time })

    bit = await ste.bus(ActDsk.COPY_DISK, { src: './cloud/', idx: '../../agent/003.light/' })

    const { exec } = require('child_process');

    process.chdir("../../agent/003.light");

    exec('vrt.pub.bat', async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
        }

        //then open an address
        var open = require('open')
        open('https://003-light.beeing.workers.dev/testLight')

        process.chdir("../../packages/003.light");

        if (bal.slv != null) bal.slv({ spcBit: { idx: "cloud-light" } });
    });

    return cpy;
};



import { LightModel } from "../light.model";
import LightBit from "../fce/light.bit";
import State from "../../99.core/state";

