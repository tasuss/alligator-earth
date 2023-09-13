import { GridFill } from "998.terminal/val/grid";

export default interface FrameBit {
    idx: string;
    src?: string;
    typ?: string;
    clr?: string;
    width?: number;
    height?: number;
    dex?: number;
    parent?: any;
    fill?:string;
    canLst?: string[];
    gphLst?: string[];
    txtLst?: string[];
    sprLst?: string[];
}
