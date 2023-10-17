import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActBus from "../../99.bus.unit/bus.action";
import * as ActShd from "../../00.shade.unit/shade.action";
import * as ActVsg from "../../01.visage.unit/visage.action";
import * as ActSrf from "../../02.surface.unit/surface.action";
import * as ActCan from "../../03.container.unit/container.action";
import * as ActGph from "../../04.graphic.unit/graphic.action";
import * as ActTxt from "../../05.text.unit/text.action";
import * as ActSpr from "../../06.sprite.unit/sprite.action";
import * as ActHex from "../../07.hexagon.unit/hexagon.action";
import * as ActFcg from "../../08.focigon.unit/focigon.action";

import * as ActVid from "../../11.video.unit/video.action";
import * as ActTun from "../../10.toon.unit/toon.action";
import * as ActSpc from "../../act/space.action"

import * as ActVrt from "../../act/vurt.action";
import * as ActDsk from "../../act/disk.action";

var SHADE = global.SHADE
var SPACE = global.SPACE

var bit, val, idx, dex, lst, dat;

export const initShade = async (cpy: ShadeModel, bal: ShadeBit, ste: State) => {

    if (bal.dat != null) bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActShd, ActVsg, ActSrf, ActCan, ActGph, ActTxt, ActSpr, ActHex, ActVid, ActTun], dat: bal.dat, src: bal.src })

    if (bal.val == 1) patch(ste, ActMnu.INIT_MENU, bal);

    ste.bus(ActSpc.READY_SPACE, {})

    if (bal.slv != null) bal.slv({ intBit: { idx: "init-shade" } });

    return cpy;
};

export const openShade = async (cpy: ShadeModel, bal: ShadeBit, ste: State) => {

    //we need to move a whole directory over

    bit = await ste.bus(ActDsk.COPY_DISK, { src: './vue', idx: '../gillisse/src' })

    bit = await ste.hunt(ActShd.RUN_SHADE, {})

    const open = require('open')

    var loc = './vrt.opn.bat'
    bit = await open(loc)

    setTimeout(() => {
        if (bal.slv != null) bal.slv({ shdBit: { idx: "open-shade" } });
    }, 33)


    return cpy;
};

export const runShade = async (cpy: ShadeModel, bal: ShadeBit, ste: State) => {

    const open = require('open')

    var loc = './vrt.gil.bat'
    bit = await open(loc)

    setTimeout(() => {
        if (bal.slv != null) bal.slv({ shdBit: { idx: "run-shade" } });
    })

    return cpy;
};


export const browserShade = async (cpy: ShadeModel, bal: ShadeBit, ste: State) => {

    const open = require('open')

    var loc = 'http://localhost:3333/'
    bit = await open(loc)

    setTimeout(() => {
        if (bal.slv != null) bal.slv({ shdBit: { idx: "browser-shade" } });
    }, 33)

    return cpy;
};

export const updateShade = async (cpy: ShadeModel, bal: ShadeBit, ste: State) => {

    const { exec } = require('child_process');

    exec('tsc -b 110.shade', async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
        }

        process.chdir("../999.vurt");
        bit = await ste.bus(ActVrt.BUNDLE_VURT, { src: "110.shade" });
        process.chdir("../110.shade");

        bit = await ste.bus(ActDsk.READ_DISK, { src: './work/110.shade.js' })
        var shade = bit.dskBit.dat;

        bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../gillisse/public/jsx/110.shade.js', dat: shade })

        bit = await ste.bus(ActDsk.READ_DISK, { src: './index.html' })
        var html = bit.dskBit.dat;

        bit = await ste.bus(ActDsk.READ_DISK, { src: './index.js' })
        var index = bit.dskBit.dat;

        bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../gillisse/public/jsx/index.js', dat: index })
        bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../gillisse/index.html', dat: html })

        bit = await ste.bus(ActDsk.COPY_DISK, { src: './vue', idx: '../gillisse/src' })


        setTimeout(() => {
            if (bal.slv != null) bal.slv({ shdBit: { idx: "update-shade" } });
        }, 3);

    });

    return cpy;
};

export const bodyShade = (cpy: ShadeModel, bal: ShadeBit, ste: State) => {

    var gel = bal.dat;
    var out = [];

    bal.src.split("\n").forEach((a, b) => {
        if (a.includes('//') == true) return
        var doTCompiled = doT.template(a);
        var outLine = doTCompiled(gel);
        out.push(outLine);
    });


    if (bal.slv != null) bal.slv({ shdBit: { idx: "update-shade", src: bal.src, dat: out.join('\n') } });

    return cpy;
};


export const editShade = async (cpy: ShadeModel, bal: ShadeBit, ste: State) => {

    const { exec } = require('child_process');

    process.chdir("../../studio/");

    exec('start Code.exe ../packages/gillisse', async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
        }

        process.chdir("../packages/110.shade");

        if (bal.slv != null) bal.slv({ symBit: { idx: "edit-symbol", dat: {} } });
    });

    return cpy;
};

export const patchShade = async (cpy: ShadeModel, bal: ShadeBit, ste: State) => {

    bit = await ste.bus(ActDsk.COPY_DISK, { src: '../gillisse/src', idx: './source' })
    if (bal.slv != null) bal.slv({ symBit: { idx: "edit-symbol", dat: {} } });

    return cpy;
};


export const testShade = async (cpy: ShadeModel, bal:ShadeBit, ste: State) => {


  //bit = await ste.hunt( ActCan.ADD_CONTAINER, { idx: 'fce-can-00', dat: bit.fmeBit.dat });
  bit = await ste.hunt( ActGph.WRITE_GRAPHIC, { idx: 'gph00', src: 'vsg00' });  
  bit = await ste.hunt( ActCan.ADD_CONTAINER, { idx: 'fce-can-00', dat: bit.gphBit.dat });
  bit = await ste.hunt( ActGph.WRITE_GRAPHIC, { idx: 'gph01', src: 'vsg00' });
  bit = await ste.hunt( ActCan.ADD_CONTAINER, { idx: 'fce-can-00', dat: bit.gphBit.dat });

  const response = await fetch("./dat/hexmap/000.json");
  const jsonData = await response.json();
  
  bit = await ste.hunt( ActHex.WRITE_HEXAGON, { idx: 'hex00', src: 'vsg00', dat: {map: jsonData }   });

  debugger

  //bit = await SHADE.hunt(SHADE.ActTxt.WRITE_TEXT, { idx: 'txt00', src: 'vsg00', dat: { txt: "feel the love", y: 100 } });
  //bit = await SHADE.hunt(SHADE.ActCan.ADD_CONTAINER, { idx: 'fce-can-00', dat: bit.txtBit.dat });

  //bit = await SHADE.hunt(SHADE.ActTxt.WRITE_TEXT, { idx: 'txt01', src: 'vsg00', dat: { txt: "thank you", y: 110 } });
  //bit = await SHADE.hunt(SHADE.ActCan.ADD_CONTAINER, { idx: 'fce-can-00', dat: bit.txtBit.dat });

  //bit = await SHADE.hunt(SHADE.ActTxt.WRITE_TEXT, { idx: 'txt02', src: 'vsg00', dat: { txt: "looks really nice", y: 120 } });
  //bit = await SHADE.hunt(SHADE.ActCan.ADD_CONTAINER, { idx: 'fce-can-00', dat: bit.txtBit.dat });

  //bit = await SHADE.hunt(SHADE.ActSpr.WRITE_SPRITE, { idx: 'spr00', src: 'vsg00', dat: { src: "./img/000.png", y: 130 } });
  //bit = await SHADE.hunt(SHADE.ActCan.ADD_CONTAINER, { idx: 'fce-can-00', dat: bit.sprBit.dat });

  //bit = await SPACE.hunt(SPACE.ActMap.WRITE_HEXMAP, { idx: 'map00', dat: { gph: 'gph00' } });
  //var hexmap = bit.mapBit.dat;
  
  
  //bit = await SPACE.hunt(SPACE.ActFoc.WRITE_FOCUS, { idx: 'foc00', dat: { gph: 'gph01' } });
  //bit = await ste.hunt( ActFcg.WRITE_FOCIGON, { idx: 'fcg01', src: 'vsg00', dat: {dat:bit.focBit.dat}   });
  
  if (bal.slv != null) bal.slv({ symBit: { idx: "test-shade", dat: {} } });

 return cpy;
 };

 
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
 
import { ShadeModel } from "../shade.model";
import ShadeBit from "../fce/shade.bit";
import State from "../../99.core/state";
import * as doT from "dot";