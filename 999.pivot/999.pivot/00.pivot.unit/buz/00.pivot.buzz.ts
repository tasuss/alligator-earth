import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActPvt from "../pivot.action";

import * as ActVrt from "../../act/vurt.action";
import * as ActDsk from "../../act/disk.action";

var bit, val, idx, dex, lst, dat;

export const initPivot = async (cpy: PivotModel, bal: PivotBit, ste: State) => {

    if (bal.dat != null) bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActPvt, ActDsk], dat: bal.dat, src: bal.src })

    if (bal.val == 1) patch(ste, ActMnu.INIT_MENU, bal)


    if (bal.slv != null) bal.slv({ intBit: { idx: "init-pivot" } });

    return cpy;
};

export const updatePivot = (cpy: PivotModel, bal: PivotBit, ste: State) => {

    const { exec } = require('child_process');

    exec('tsc -b 999.pivot', async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
        }

        process.chdir("../999.vurt");
        bit = await ste.bus(ActVrt.BUNDLE_VURT, { src: "999.pivot" });
        process.chdir("../999.pivot");

        bit = await ste.bus(ActDsk.READ_DISK, { src: './work/999.pivot.js' })
        var pivot = bit.dskBit.dat;

        bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../gillisse/public/jsx/999.pivot.js', dat: pivot })

        bit = await ste.bus(ActDsk.READ_DISK, { src: './index.html' })
        var html = bit.dskBit.dat;

        bit = await ste.bus(ActDsk.READ_DISK, { src: './index.js' })
        var index = bit.dskBit.dat;

        bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../gillisse/public/jsx/index.js', dat: index })
        bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../gillisse/index.html', dat: html })

        setTimeout(() => {
            if (bal.slv != null) bal.slv({ pvtBit: { idx: "update-pivot" } });
        }, 3);

    });

    return cpy;
};


export const openPivot = async (cpy: PivotModel, bal: PivotBit, ste: State) => {

    bit = await ste.bus(ActDsk.COPY_DISK, { src: './vue', idx: '../gillisse/src' })

    bit = await ste.hunt(ActPvt.RUN_PIVOT, {})

    const open = require('open')

    var loc = './vrt.opn.bat'
    bit = await open(loc)

    setTimeout(() => {
        if (bal.slv != null) bal.slv({ pvtBit: { idx: "open-pivot" } });
    }, 33)


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

    exec('start Code.exe ../packages/gillisse', async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
        }

        process.chdir("../packages/999.pivot");

        if (bal.slv != null) bal.slv({ pvtBit: { idx: "edit-pivot", dat: {} } });
    });

    return cpy;
};

export const listPivot = async (cpy: PivotModel, bal: PivotBit, ste: State) => {


    var root = "../";

    var listDir = await FS.readdir(root);
    var pivotList = [];

    listDir.forEach((a) => {
        var pth = root + a;
        if (FS.lstatSync(pth).isDirectory() == false) return;
        if (a.includes(".") == false) return;
        var sub = a.split(".")[0];
        if (sub.length != 3) return;
        if (S(sub).isNumeric().s == false) return;
        pivotList.push(a);
    });

    if (bal.src != null) {

        var out = []

        pivotList.forEach((a) => {

            var loc = '../' + a + '/' + bal.src
            var flag = FS.existsSync(loc)
            if (flag == false) return
            out.push(a)
        })

        pivotList = out
    }


    bal.slv({ pvtBit: { idx: "list-pivot", lst: pivotList } });

    return cpy;
};

export const containsPivot = (cpy: PivotModel, bal: PivotBit, ste: State) => {

    var out = [];
    var check = bal.src;

    debugger

    bal.lst.forEach((a) => {
        var dir = '../' + a + '/' + a
        var lst = FS.readdirSync(dir)

        debugger

        lst.forEach((b) => {
            if (b.includes(check)) out.push([a, b])
        })
    })

    if (bal.slv != null) bal.slv({ pvtBit: { idx: "contains-pivot", lst: out } });

    return cpy;
};



export const bundlePivot = async (cpy: PivotModel, bal: PivotBit, ste: State) => {

    if (bal.src == null) bal.src = '999.pivot'

    var root = '999.pivot';

    var template = 'node ./data/hand/000.eveiefy -t ' + bal.src

    bit = await FS.ensureDirSync( '../' + bal.src + '/work/')

    console.log("bundling " + bal.src)

    //bit = await ste.hunt(ActDsk.WRITE_DISK, { src: './002.bundle-pivot.bat', dat: template })

    //bit = await ste.hunt(ActDsk.BATCH_DISK, { src: '002.bundle-pivot.bat' })
    
    const { execSync } = require('child_process')
    execSync(template)
    debugger

    


    if (bal.val == null) bal.val = 3;

    //bit = await ste.bus(ActVrt.LIST_PIVOT_VURT, {})
    //lst = bit.vrtBit.lst

    //var output = []

    //lst.forEach((a) => {

    //  var idx = '../' + a + '/work/' + bal.src + '.js'
    //  var flag = FS.existsSync(idx);
    //  if (flag == false) return
    //  output.push(idx)
    //})

    //if ( output.length == 0 ) {
    //  bal.slv({ vrtBit: { idx: "bundle-vurt", src:bal.src } })
    //  return
    // }

    //var source =  root + '/bundle/' + bal.src + '.js'

    //debugger

    //output.forEach(async (a, b) => {

    //  bit = await FS.copy(source, a)
    //  console.log("copying to " + a)
    //  debugger
    //  if (b < output.length - 1) return



    setTimeout(() => bal.slv({ vrtBit: { idx: "bundle-vurt" } }), bal.val);

    //})

    return cpy;
};


export const patchPivot = (cpy: PivotModel, bal: PivotBit, ste: State) => {
    debugger
    return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });

import { PivotModel } from "../pivot.model";
import PivotBit from "../fce/pivot.bit";
import State from "../../99.core/state";
import * as FS from 'fs-extra'
import * as S from 'string'

