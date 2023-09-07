import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActTtl from "../title.action";

//import * as ActVrt from "../../act/vurt.action";
//import * as ActDsk from "../../act/disk.action";

var bit, val, idx, dex, lst, dat;

export const initTitle = async (cpy: TitleModel, bal: TitleBit, ste: State) => {

 if (bal.dat != null) bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActTtl], dat: bal.dat, src: bal.src })

 if (bal.val == 1) patch(ste, ActMnu.INIT_MENU, bal);


 if (bal.slv != null) bal.slv({ intBit: { idx: "init-title" } });

 return cpy;
};

export const updateTitle = (cpy: TitleModel, bal: TitleBit, ste: State) => {

 const { exec } = require('child_process');

 exec('tsc -b 000.title', async (err, stdout, stderr) => {
 if (err) {
 console.error(`exec error: ${err}`);
 }

 process.chdir("../999.vurt");
 //bit = await ste.bus(ActVrt.BUNDLE_VURT, { src: "000.title" });
 //process.chdir("../000.title");

 //bit = await ste.bus(ActDsk.READ_DISK, { src: './work/000.title.js' })
 //var title = bit.dskBit.dat;

 //bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../gillisse/public/jsx/000.title.js', dat: title })

 //bit = await ste.bus(ActDsk.READ_DISK, { src: './index.html' })
 //var html = bit.dskBit.dat;

 //bit = await ste.bus(ActDsk.READ_DISK, { src: './index.js' })
 //var index = bit.dskBit.dat;

 //bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../gillisse/public/jsx/index.js', dat: index })
 //bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../gillisse/index.html', dat: html })

 setTimeout(() => {
 if (bal.slv != null) bal.slv({ ttlBit: { idx: "update-title" } });
 }, 3);

 });

 return cpy;
};


export const openTitle = async (cpy: TitleModel, bal: TitleBit, ste: State) => {

 //bit = await ste.bus(ActDsk.COPY_DISK, { src: './vue', idx: '../gillisse/src' })

 bit = await ste.hunt(ActTtl.RUN_TITLE, {})

 const open = require('open')

 var loc = './vrt.opn.bat'
 bit = await open(loc)

 setTimeout(() => {
 if (bal.slv != null) bal.slv({ ttlBit: { idx: "open-title" } });
 }, 33)


 return cpy;
};
export const runTitle = async (cpy: TitleModel, bal: TitleBit, ste: State) => {

 const open = require('open')

 var loc = './vrt.gil.bat'
 bit = await open(loc)

 setTimeout(() => {
 if (bal.slv != null) bal.slv({ ttlBit: { idx: "run-title" } });
 })

 return cpy;
};
export const editTitle = (cpy: TitleModel, bal: TitleBit, ste: State) => {

 const { exec } = require('child_process');

 process.chdir("../../studio/");

 exec('start Code.exe ../packages/gillisse', async (err, stdout, stderr) => {
 if (err) {
 console.error(`exec error: ${err}`);
 }

 process.chdir("../packages/000.title");

 if (bal.slv != null) bal.slv({ ttlBit: { idx: "edit-title", dat: {} } });
 });

 return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });

export const patchTitle = (cpy: TitleModel, bal:TitleBit, ste: State) => {
 debugger
 return cpy;
 };

import { TitleModel } from "../title.model";
import TitleBit from "../fce/title.bit";
import State from "../../99.core/state";

