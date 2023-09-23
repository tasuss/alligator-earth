import * as ActCvs from "../../act/canvas.action";
import * as ActChc from "../../act/choice.action";
import * as ActGrd from "../../act/grid.action";

import * as ActTxt from "../../act/text.action";
import * as ActPut from "../../act/input.action";
import * as ActCns from "../../act/console.action";

let bit, val, idx, dex, lst, dat, src;

export const initScene = (cpy: SceneModel, bal: SceneBit, ste: State) => {
    debugger
    return cpy;
};

export const updateScene = (cpy: SceneModel, bal: SceneBit, ste: State) => {
    return cpy;
};



export const titleScene = async (cpy: SceneModel, bal: SceneBit, ste: State) => {

    lst = ['new', 'load', 'settings', 'quit']

    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 2, y: 0, xSpan: 12, ySpan: 12 })
    bit = await ste.bus(ActCvs.WRITE_CANVAS, { idx: 'cvs1', dat: { clr: Color.CYAN, net: bit.grdBit.dat }, })

    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 2, ySpan: 12 })
    bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })

    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 3, y: 11, xSpan: 2, ySpan: 2 })
    bit = await ste.bus(ActChc.KEY_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })


    if (bal.slv != null) bal.slv({ scnBit: { idx: "title-scene" } });

    return cpy;
};

export const spaceScene = async (cpy: SceneModel, bal: SceneBit, ste: State) => {

    lst = ['spin clkwse', 'spin counter', 'backward', 'forwards']


    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 2, y: 0, xSpan: 6, ySpan: 12 })
    bit = await ste.bus(ActCvs.WRITE_CANVAS, { idx: 'cvs1', dat: { clr: Color.CYAN, net: bit.grdBit.dat }, })

    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 8, y: 0, xSpan: 2, ySpan: 12 })
    bit = await ste.bus(ActCns.WRITE_CONSOLE, { idx:'cns00', src:"alligator0", dat: {net: bit.grdBit.dat, src:"alligaor0"}  })
    //bit = await ste.bus(ActCns.WRITE_CONSOLE, { idx:'cns00', src:"alligator1"})
    //bit = await ste.bus(ActCns.WRITE_CONSOLE, { idx:'cns00', src:"alligator2"})
    //bit = await ste.bus(ActCns.WRITE_CONSOLE, { idx:'cns00', src:"alligator3"})


    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 2, ySpan: 12 })
    bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })

    src = bit.chcBit.src;

    bit = await ste.bus(ActCns.WRITE_CONSOLE, { idx:'cns00', src:'alligator1', dat:{src:'alligator1'}  })



    //bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 3, y: 11, xSpan: 2, ySpan: 2 })
    //bit = await ste.bus(ActChc.KEY_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })

    return cpy;
};


export const huntScene = async (cpy: SceneModel, bal: SceneBit, ste: State) => {

    //let xPos = 0

    //setInterval( async ()=>{

    // xPos += 1
    //  bit = await ste.hunt(ActTxt.WRITE_TEXT, { idx: 'txt1', dat: { x:xPos } })

    //}, 1111)

    return cpy;
};




export const prologueScene = (cpy: SceneModel, bal: SceneBit, ste: State) => {
    debugger
    return cpy;
};

import { SceneModel } from "../scene.model";
import SceneBit from "../fce/scene.bit";
import State from "../../99.core/state";

import * as Grid from '../../val/grid';
import * as Align from '../../val/align'
import * as Color from '../../val/console-color';