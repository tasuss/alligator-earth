import * as PIXI from "pixi.js-legacy";

export default interface StageBit {
 idx:string;
 src?:string;
 clr?:string;
 width?:number;
 height?:number;
 dex?:number;
 bit?:PIXI.Application;
}
