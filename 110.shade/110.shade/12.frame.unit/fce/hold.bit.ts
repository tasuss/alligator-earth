import * as PIXI from "pixi.js-legacy";

export default interface HoldBit {
    idx: string;
    src?: string;
    typ?: string;
    frm?: string;
    can?: string;
    dat?: any;
    bit?: PIXI.Graphics;
    clr?: number;
    crv?: number;
    w?: number;
    h?: number;
    x?: number;
    y?: number;
    a?: number;
}
