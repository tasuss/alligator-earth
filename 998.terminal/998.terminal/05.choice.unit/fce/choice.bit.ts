import NetBit from "998.terminal/01.grid.unit/fce/net.bit";

export default interface ChoiceBit {
    idx:string;
    src?:string;
    clr?:string;
    lst?: any[];
    val?:number;
    dat?:any;
    slv?:Function;
    net?:NetBit
}
