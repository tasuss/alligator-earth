import * as PIXI from "pixi.js-legacy";

export default interface LineBit {
    idx:string;
    src?:string;
    typ?:string;
    can?:string;
    dat?:any;
    bit?:PIXI.Text;
    txt?:string;
    clr?:number;
    fnt?:string;
    wrp?:number;
    sze?:number;
    
    w?:number;
    h?:number;
    x?:number;
    y?:number;
    a?:number;
}
