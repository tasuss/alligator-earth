import TermBit from "./term.bit";

export default interface ConsoleBit {
    idx:string;
    src?:string;
    lst?: any[];
    val?:number;
    dat?:any;
    slv?:Function;
    net:any;
    trm?:TermBit
}
