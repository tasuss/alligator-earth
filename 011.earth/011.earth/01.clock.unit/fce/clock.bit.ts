import TicBit from "./tic.bit";

export default interface ClockBit {
    idx: string;
    src?: string;
    val?: number;
    dat?: any;
    bit?: any;
    slv?: Function;
    clk:TicBit
}
