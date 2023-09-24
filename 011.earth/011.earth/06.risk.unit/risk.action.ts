import { Action } from "../99.core/interface/action.interface";
import  RiskBit  from "./fce/risk.bit";

// Risk actions

export const INIT_RISK = "[Risk action] Init Risk";
export class InitRisk implements Action {
 readonly type = INIT_RISK;
 constructor(public bale: RiskBit) {}
}



export const ARTICULATE_RISK = "[Risk action] Articulate Risk";
export class ArticulateRisk implements Action {
 readonly type = ARTICULATE_RISK;
 constructor(public bale: RiskBit) {}
}


export const FASHION_RISK = "[Risk action] Fashion Risk";
export class FashionRisk implements Action {
 readonly type = FASHION_RISK;
 constructor(public bale: RiskBit) {}
}



export const UPDATE_RISK = "[Risk action] Update Risk";
export class UpdateRisk implements Action {
 readonly type = UPDATE_RISK;
 constructor(public bale: RiskBit) {}
}

export const VERIFY_RISK = "[Verify action] Verify Risk";
 export class VerifyRisk implements Action {
 readonly type = VERIFY_RISK;
 constructor(public bale: RiskBit) {}
 }
 
export const OPEN_RISK = "[Open action] Open Risk";
 export class OpenRisk implements Action {
 readonly type = OPEN_RISK;
 constructor(public bale: RiskBit) {}
 }
 
export const LIST_RISK = "[List action] List Risk";
 export class ListRisk implements Action {
 readonly type = LIST_RISK;
 constructor(public bale: RiskBit) {}
 }
 
export const LOAD_RISK = "[Load action] Load Risk";
 export class LoadRisk implements Action {
 readonly type = LOAD_RISK;
 constructor(public bale: RiskBit) {}
 }
 
export const CREATE_RISK = "[Create action] Create Risk";
 export class CreateRisk implements Action {
 readonly type = CREATE_RISK;
 constructor(public bale: RiskBit) {}
 }
 
export const WRITE_RISK = "[Write action] Write Risk";
 export class WriteRisk implements Action {
 readonly type = WRITE_RISK;
 constructor(public bale: RiskBit) {}
 }
 
export const READ_RISK = "[Read action] Read Risk";
 export class ReadRisk implements Action {
 readonly type = READ_RISK;
 constructor(public bale: RiskBit) {}
 }
 
export type Actions = | InitRisk | UpdateRisk | FashionRisk | ArticulateRisk 
| VerifyRisk
| OpenRisk
| ListRisk
| LoadRisk
| CreateRisk
| WriteRisk
| ReadRisk