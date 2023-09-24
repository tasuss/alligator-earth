import Risk from "./fce/risk.interface";
import RiskBit from "./fce/risk.bit";
import PoolBit from "./fce/pool.bit";

export class RiskModel implements Risk {
 //idx:string;

 riskBitList: RiskBit[] = [];
 
 poolBitList: PoolBit[] = [];
 poolBits: any = {};

 readPoolBit: PoolBit

 riskDir:string = './data/risk/'
}
