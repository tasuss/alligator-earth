import * as ActCvs from "../../act/canvas.action";
import * as ActChc from "../../act/choice.action";

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
   
    
    
     

    bit = await ste.bus(ActCvs.WRITE_CANVAS, { idx: 'cvs0', dat: { fill: Grid.TOP_FULL_IDX, clr: Color.CYAN }, })
    bit = await ste.bus(ActCvs.WRITE_CANVAS, { idx: 'cvs1', dat: { fill: Grid.MID_FULL_IDX, clr: Color.CYAN }, })
    bit = await ste.bus(ActCvs.WRITE_CANVAS, { idx: 'cvs2', dat: { fill: Grid.BOT_FULL_IDX, clr: Color.YELLOW }, })

    //var grid = {x:0, y:0, xSpan:3, ySpan:12}


    //bit = await ste.bus(ActTxt.WRITE_TEXT, { idx: 'txt0', src: 'cvs0', dat: { txt: "let us go", clr: Color.BLACK, x: 10 }, })
    //bit = await ste.bus(ActTxt.WRITE_TEXT, { idx: 'txt1', src: 'cvs2', dat: { txt: "horld", clr: Color.BLACK, x: 10 }, })

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