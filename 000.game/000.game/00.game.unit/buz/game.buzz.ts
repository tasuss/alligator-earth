import * as ActCon from "../../01.console.unit/console.action";

import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActGam from "../game.action";

var bit, val, idx, dex, lst, dat;

export const initGame = async (cpy: GameModel, bal: GameBit, ste: State) => {

    console.log("live alligators 00013")

    if (bal.dat != null) bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActGam], dat: bal.dat, src: bal.src })


    //if (bal.val == 1) patch(ste, ActMnu.INIT_MENU, bal);


    openGame(cpy, bal, ste)

    if (bal.slv != null) bal.slv({ intBit: { idx: "init-Game" } });

    return cpy;
};


export const openGame = async (cpy: GameModel, bal: GameBit, ste: State) => {

    //open saved games

    bit = await ste.hunt(ActCon.OPEN_CONSOLE, {});
    debugger


    //const db = new sqlite3.Database(':memory:');

    //db.serialize(() => {
    //    db.run("CREATE TABLE lorem (info TEXT)");
    //    debugger

    //    const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    //    for (let i = 0; i < 10; i++) {
    //        stmt.run("Ipsum " + i);
    //    }
    //    stmt.finalize();

    //    db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
    //        console.log(row.id + ": " + row.info);
    //    });
    //});

    //db.close();
    //if ( key == null) localStorage.setItem('myFirstKey', 'myFirstValue');


    //bit = await ste.hunt(ActScn.TITLE_SCENE, {});

    if (bal.slv != null) bal.slv({ aaaBit: { idx: "open-Game" } });

    return cpy;
};

export const closeGame = async (cpy: GameModel, bal: GameBit, ste: State) => {


    console.log("closing Game")

    //bit = await ste.hunt( ActScn.TITLE_SCENE, {} );

    if (bal.slv != null) bal.slv({ aaaBit: { idx: "close-Game" } });

    return cpy;
};


export const updateGame = (cpy: GameModel, bal: GameBit, ste: State) => {


    if (bal.slv != null) bal.slv({ aaaBit: { idx: "update-Game" } });


    return cpy;
};


export const runGame = async (cpy: GameModel, bal: GameBit, ste: State) => {

    if (bal.slv != null) bal.slv({ aaaBit: { idx: "run-Game" } });

    return cpy;
};
export const editGame = (cpy: GameModel, bal: GameBit, ste: State) => {


    if (bal.slv != null) bal.slv({ aaaBit: { idx: "edit-Game", dat: {} } });

    return cpy;
};

export const patchGame = (cpy: GameModel, bal: GameBit, ste: State) => {
    debugger
    return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });

import { GameModel } from "../game.model";
import GameBit from "../fce/game.bit";
import State from "../../99.core/state";

import { LocalStorage } from "node-localstorage";