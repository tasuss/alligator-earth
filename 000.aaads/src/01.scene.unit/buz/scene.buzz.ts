import * as ActCvs from "../../act/canvas.action";
import * as ActChc from "../../act/choice.action";
import * as ActGrd from "../../act/grid.action";

import * as ActTxt from "../../act/text.action";
import * as ActPut from "../../act/input.action";

var bit, val, idx, dex, lst, dat;

export const initScene = (cpy: SceneModel, bal: SceneBit, ste: State) => {
    debugger
    return cpy;
};

export const updateScene = (cpy: SceneModel, bal: SceneBit, ste: State) => {
    return cpy;
};



export const titleScene = async (cpy: SceneModel, bal: SceneBit, ste: State) => {
    
    //bit = await ste.bus( ActChc.OPEN_CHOICE, { })


    bit = await ste.bus(ActGrd.UPDATE_GRID, { x:0, y:0, xSpan:12, ySpan:4  })
    bit = await ste.bus(ActCvs.WRITE_CANVAS, { idx: 'cvs0', dat: { clr: Color.CYAN, net: bit.grdBit.dat }, })
    
    bit = await ste.bus(ActGrd.UPDATE_GRID, {x:0, y:4, xSpan:12, ySpan:5})
    bit = await ste.bus(ActCvs.WRITE_CANVAS, { idx: 'cvs1', dat: { clr: Color.CYAN, net:bit.grdBit.dat }, })
    
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x:0, y:8, xSpan:12, ySpan:4  })
    bit = await ste.bus(ActCvs.WRITE_CANVAS, { idx: 'cvs2', dat: { clr: Color.YELLOW, net:bit.grdBit.dat }, })

    if (bal.slv != null) bal.slv({ scnBit: { idx: "title-scene" } });

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
import * as Color from '../../val/console-color';