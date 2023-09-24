import AvasBit from "./fce/avas.bit";
import Being from "./fce/Being.interface";
import BeingBit from "./fce/being.interface";


export class BeingModel implements Being {
 idx:string = '002.being';
 avasBitList: AvasBit[] = [];
 avasBits: any = {};
 nowDex:number = 0;

 readAvasBit:AvasBit
 
}
