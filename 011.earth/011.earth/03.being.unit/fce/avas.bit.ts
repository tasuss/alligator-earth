import GiftBit from "./gift.bit";

export default interface AvasBit {
  idx: string;
  src?:string;
  dex?:number
  now?:string;
  age?:Age;
  gft?: GiftBit;
  
}

interface Age {
  dob?: any;
  now?: any;
}