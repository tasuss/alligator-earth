import ClockBit from "./clock.bit";

export default interface SimBit {
  idx: string;
  src?: string;
  cde?: string;
  now?: number;
  lst?:any[];
  clkBit?:ClockBit
  pow?:any;
  fte?:any;
  lvl?:string;
}
