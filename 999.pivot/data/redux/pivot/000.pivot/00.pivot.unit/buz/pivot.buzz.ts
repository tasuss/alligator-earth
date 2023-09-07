import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as Act{{=it.nomTitle}} from "../{{=it.name}}.action";

import * as ActVrt from "../../act/vurt.action";
import * as ActDsk from "../../act/disk.action";

var bit, val, idx, dex, lst, dat;

export const init{{=it.nameTitle}} = async (cpy: {{=it.nameTitle}}Model, bal: {{=it.nameTitle}}Bit, ste: State) => {

    if (bal.dat != null) bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [Act{{=it.nomTitle}}], dat: bal.dat, src: bal.src })

    if (bal.val == 1) patch(ste, ActMnu.INIT_MENU, bal);


    if (bal.slv != null) bal.slv({ intBit: { idx: "init-{{=it.name}}" } });

    return cpy;
};

export const update{{=it.nameTitle}} = (cpy: {{=it.nameTitle}}Model, bal: {{=it.nameTitle}}Bit, ste: State) => {

    const { exec } = require('child_process');

    exec('tsc -b {{=it.pivot}}', async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
        }

        process.chdir("../999.vurt");
        bit = await ste.bus(ActVrt.BUNDLE_VURT, { src: "{{=it.pivot}}" });
        process.chdir("../{{=it.pivot}}");

        bit = await ste.bus(ActDsk.READ_DISK, { src: './work/{{=it.pivot}}.js' })
        var {{=it.name}} = bit.dskBit.dat;

        bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../gillisse/public/jsx/{{=it.pivot}}.js', dat: {{=it.name}} })

        bit = await ste.bus(ActDsk.READ_DISK, { src: './index.html' })
        var html = bit.dskBit.dat;

        bit = await ste.bus(ActDsk.READ_DISK, { src: './index.js' })
        var index = bit.dskBit.dat;

        bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../gillisse/public/jsx/index.js', dat: index })
        bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../gillisse/index.html', dat: html })

        setTimeout(() => {
            if (bal.slv != null) bal.slv({ {{=it.nom}}Bit: { idx: "update-{{=it.name}}" } });
        }, 3);

    });

    return cpy;
};


export const open{{=it.nameTitle}} = async (cpy: {{=it.nameTitle}}Model, bal: {{=it.nameTitle}}Bit, ste: State) => {

    bit = await ste.bus(ActDsk.COPY_DISK, { src: './vue', idx: '../gillisse/src' })

    bit = await ste.hunt(Act{{=it.nomTitle}}.RUN_{{=it.nameCaps}}, {})

    const open = require('open')

    var loc = './vrt.opn.bat'
    bit = await open(loc)

    setTimeout(() => {
        if (bal.slv != null) bal.slv({ {{=it.nom}}Bit: { idx: "open-{{=it.name}}" } });
    }, 33)


    return cpy;
};
export const run{{=it.nameTitle}} = async (cpy: {{=it.nameTitle}}Model, bal: {{=it.nameTitle}}Bit, ste: State) => {

    const open = require('open')

    var loc = './vrt.gil.bat'
    bit = await open(loc)

    setTimeout(() => {
        if (bal.slv != null) bal.slv({ {{=it.nom}}Bit: { idx: "run-{{=it.name}}" } });
    })

    return cpy;
};
export const edit{{=it.nameTitle}} = (cpy: {{=it.nameTitle}}Model, bal: {{=it.nameTitle}}Bit, ste: State) => {

    const { exec } = require('child_process');

    process.chdir("../../studio/");

    exec('start Code.exe ../packages/gillisse', async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
        }

        process.chdir("../packages/{{=it.pivot}}");

        if (bal.slv != null) bal.slv({ {{=it.nom}}Bit: { idx: "edit-{{=it.name}}", dat: {} } });
    });

    return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });

export const patch{{=it.nameTitle}} = (cpy: {{=it.nameTitle}}Model, bal:{{=it.nameTitle}}Bit, ste: State) => {
 debugger
 return cpy;
 };

import { {{=it.nameTitle}}Model } from "../{{=it.name}}.model";
import {{=it.nameTitle}}Bit from "../fce/{{=it.name}}.bit";
import State from "../../99.core/state";

