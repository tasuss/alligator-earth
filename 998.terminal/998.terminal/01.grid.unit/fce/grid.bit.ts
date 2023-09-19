import NetBit from "./net.bit";

export default interface GridBit {
    idx:string;
    src?:string;
    lst?: any[];
    val?:number;
    dat?:any;
    slv?:Function;

    x?: number;
    y?: number;
    xSpan?: number;
    ySpan?: number;
}
