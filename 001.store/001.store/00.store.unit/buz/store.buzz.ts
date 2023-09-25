import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActStr from "../store.action";

import * as ActVrt from "../../act/vurt.action";
import * as ActDsk from "../../act/disk.action";

var bit, val, idx, dex, lst, dat;

export const initStore = async (cpy: StoreModel, bal: StoreBit, ste: State) => {


 if (bal.dat != null) bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActStr], dat: bal.dat, src: bal.src })

 if (bal.val == 1) patch(ste, ActMnu.INIT_MENU, bal);

 if (bal.slv != null) bal.slv({ intBit: { idx: "init-store" } });

 return cpy;
};

export const updateStore = (cpy: StoreModel, bal: StoreBit, ste: State) => {

 const { exec } = require('child_process');

 exec('tsc -b 001.store', async (err, stdout, stderr) => {
 if (err) {
 console.error(`exec error: ${err}`);
 }

 process.chdir("../999.vurt");
 bit = await ste.bus(ActVrt.BUNDLE_VURT, { src: "001.store" });
 process.chdir("../001.store");

 bit = await ste.bus(ActDsk.READ_DISK, { src: './work/001.store.js' })
 var store = bit.dskBit.dat;

 bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../gillisse/public/jsx/001.store.js', dat: store })

 bit = await ste.bus(ActDsk.READ_DISK, { src: './index.html' })
 var html = bit.dskBit.dat;

 bit = await ste.bus(ActDsk.READ_DISK, { src: './index.js' })
 var index = bit.dskBit.dat;

 bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../gillisse/public/jsx/index.js', dat: index })
 bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../gillisse/index.html', dat: html })

 setTimeout(() => {
 if (bal.slv != null) bal.slv({ strBit: { idx: "update-store" } });
 }, 3);

 });

 return cpy;
};


export const openStore = async (cpy: StoreModel, bal: StoreBit, ste: State) => {

    
    const sqlite3 = require('sqlite3').verbose();

    let db = new sqlite3.Database('./data/sqlite.db', (err) => {
        if (err) {
            console.error(err.message);
            debugger
        }
        console.log('Connected to the my database.');

        let sql = `SELECT 
        name
    FROM 
        sqlite_schema
    WHERE 
        type ='table' AND 
        name NOT LIKE 'sqlite_%';
        `;

        db.all(sql, [], (err, rows) => {
            if (err) {
                throw err;
            }
            rows.forEach((row) => {
                console.log(row.name);
                
            });
        });

        // close the database connection
        db.close();

    });




 return cpy;
};
export const runStore = async (cpy: StoreModel, bal: StoreBit, ste: State) => {

 const open = require('open')

 var loc = './vrt.gil.bat'
 bit = await open(loc)

 setTimeout(() => {
 if (bal.slv != null) bal.slv({ strBit: { idx: "run-store" } });
 })

 return cpy;
};
export const editStore = (cpy: StoreModel, bal: StoreBit, ste: State) => {

 const { exec } = require('child_process');

 process.chdir("../../studio/");

 exec('start Code.exe ../packages/gillisse', async (err, stdout, stderr) => {
 if (err) {
 console.error(`exec error: ${err}`);
 }

 process.chdir("../packages/001.store");

 if (bal.slv != null) bal.slv({ strBit: { idx: "edit-store", dat: {} } });
 });

 return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });

export const patchStore = (cpy: StoreModel, bal:StoreBit, ste: State) => {
 debugger
 return cpy;
 };

import { StoreModel } from "../store.model";
import StoreBit from "../fce/store.bit";
import State from "../../99.core/state";

