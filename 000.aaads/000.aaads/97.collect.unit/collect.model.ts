import CaboodleBit from "./fce/caboodle.bit";
import Collect from "./fce/collect.interface";
import CollectBit from "./fce/collect.interface";

export class CollectModel implements Collect {
 idx:string;
 caboodleBitList: CaboodleBit[] = [];
 caboodleBits: any = {};
}
