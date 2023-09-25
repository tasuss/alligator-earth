import NetBit from "998.terminal/01.grid.unit/fce/net.bit";

export default interface DotBit {
    idx: string;
    src?: string;
    typ?: string;
    clr?: string;
    width?: number
    bit:any;
    net: NetBit
}
