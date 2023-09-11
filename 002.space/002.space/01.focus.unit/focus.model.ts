import Focus from "./fce/focus.interface";
import FocusBit from "./fce/focus.bit";
import SpotBit from "./fce/spot.bit";

export class FocusModel implements Focus {
  //idx:string;
  focusBitList: FocusBit[] = [];
  focusBits: any = {};
  
  select: SpotBit
}
