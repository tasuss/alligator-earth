import AmountBit from "./amount.bit";

export default interface BlockfrostBit {
 address?:string;
 amount?: AmountBit[];
 script?: boolean;
 stake_address?:string;
 type?:string;
}
