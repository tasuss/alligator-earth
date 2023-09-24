import Clock from "./fce/Clock.interface";
import ClockBit from "./fce/clock.interface";

export class ClockModel implements Clock {

    tick:boolean = true;
    slot: Number = 0;
    //idx:string;
    //clockBitList: ClockBit[] = [];
    //clockBits: any = {};
}
