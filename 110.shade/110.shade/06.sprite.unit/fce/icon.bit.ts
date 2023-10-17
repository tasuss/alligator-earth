import * as PIXI from "pixi.js-legacy";

export default interface IconBit {
    idx:string;
    src?:string;
    typ?:string;
    can?:string;
    dat?:any;
    bit?:PIXI.Sprite;
    clr?:number;
    w?:number;
    h?:number;
    x?:number;
    y?:number;
    r?:number;
    s?:number;
    a?:number;
}
