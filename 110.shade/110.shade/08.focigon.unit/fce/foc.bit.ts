import * as PIXI from "pixi.js-legacy";

export default interface FocBit {
    idx:string;
    src?:string;
    typ?:string;
    frm?:string;
    fce?:string;
    gph?:string;
    ico?:string;
    can?:string;
    dat?:any;
    bit?:PIXI.Sprite;
    clr?:number;
    wpe?:boolean; //whether or not to clear the canvas during an update
    pct?:number; // the vertical dimension modifier
    w?:number;
    h?:number;
    x?:number;
    y?:number;
    r?:number;
    s?:number;
    a?:number;
    lne?:number; // the size of the stroke
    crns?:any;
    crn0?:any;
    crn1?:any;
}
