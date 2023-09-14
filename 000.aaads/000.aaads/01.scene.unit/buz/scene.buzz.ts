import * as ActCvs from "../../act/canvas.action";
import * as ActTxt from "../../act/text.action";

var bit, val, idx, dex, lst, dat;

export const initScene = (cpy: SceneModel, bal:SceneBit, ste: State) => {
 debugger
 return cpy;
};

export const updateScene = (cpy: SceneModel, bal:SceneBit, ste: State) => {
 return cpy;
};


export const huntScene = async (cpy: SceneModel, bal:SceneBit, ste: State) => {
 
    bit = await ste.bus(ActCvs.WRITE_CANVAS, { idx: 'cvs0', dat: { fill: Grid.TOP_FULL_IDX, clr: Color.CYAN }, })
    bit = await ste.bus(ActCvs.WRITE_CANVAS, { idx: 'cvs1', dat: { fill: Grid.MID_FULL_IDX, clr: Color.CYAN }, })
    bit = await ste.bus(ActCvs.WRITE_CANVAS, { idx: 'cvs2', dat: { fill: Grid.BOT_FULL_IDX, clr: Color.YELLOW }, })
  
    
    bit = await ste.bus(ActTxt.WRITE_TEXT, { idx: 'txt0',  src:'cvs0', dat: { txt:"wello", clr: Color.BLACK, x:10 }, })
    bit = await ste.bus(ActTxt.WRITE_TEXT, { idx: 'txt1',  src:'cvs2', dat: { txt:"horld", clr: Color.BLACK, x:10 }, })
    
    //let xPos = 0
  
    //setInterval( async ()=>{
  
     // xPos += 1
    //  bit = await ste.hunt(ActTxt.WRITE_TEXT, { idx: 'txt1', dat: { x:xPos } })
  
    //}, 1111)

 return cpy;
 };


 
export const titleScene = (cpy: SceneModel, bal:SceneBit, ste: State) => {
 debugger
 return cpy;
 };
export const prologueScene = (cpy: SceneModel, bal:SceneBit, ste: State) => {
 debugger
 return cpy;
 };

import { SceneModel } from "../scene.model";
import SceneBit from "../fce/scene.bit";
import State from "../../99.core/state";

import * as Grid from '../../val/grid';
import * as Color from '../../val/console-color';