import BondBit from "./bond.bit.interface";

export default interface SpotBit {
  idx: string;
  src?: string;
  typ?: string;
  frm?: string;
  map?: string;
  gph?:string; //this is so the display has an id on which to paint upon
  slv?: Function;
  sze?: number;
  ort?: string;
  x?: number;
  y?: number;
  w?: number;
  h?: number;

  awake?:boolean;

  loc?: any;

  face?: string;
  past?: any[];
  creation?: number;
  bit?: any;
  grid?: any;
  update?: number;
  clock?: number;
  updateSpeed?: number;
  turnSpeed?: number;
  camX?: number;
  camY?: number;
  spin?: boolean
  move?:string;
  corners?:any;
  area?: any;
  vision?: any;

  viewList?: BondBit[];

  bonds?: any;
  bondList?: BondBit[];
  pastList?: string[];
}
