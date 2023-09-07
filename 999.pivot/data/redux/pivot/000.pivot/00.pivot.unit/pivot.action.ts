import { Action } from "../99.core/interface/action.interface";
import  {{=it.nameTitle}}Bit  from "./fce/{{=it.name}}.bit";

// {{=it.title}} actions

export const INIT_{{=it.nameCaps}} = "[{{=it.nameTitle}} action] Init {{=it.nameTitle}}";
export class Init{{=it.nameTitle}} implements Action {
 readonly type = INIT_{{=it.nameCaps}};
 constructor(public bale: {{=it.nameTitle}}Bit) {}
}

export const UPDATE_{{=it.nameCaps}} = "[{{=it.nameTitle}} action] Update {{=it.nameTitle}}";
export class Update{{=it.nameTitle}} implements Action {
 readonly type = UPDATE_{{=it.nameCaps}};
 constructor(public bale: {{=it.nameTitle}}Bit) {}
}

export const OPEN_{{=it.nameCaps}} = "[Open action] Open {{=it.nameTitle}}";
 export class Open{{=it.nameTitle}} implements Action {
 readonly type = OPEN_{{=it.nameCaps}};
 constructor(public bale: {{=it.nameTitle}}Bit) {}
 }
 
export const RUN_{{=it.nameCaps}} = "[Run action] Run {{=it.nameTitle}}";
 export class Run{{=it.nameTitle}} implements Action {
 readonly type = RUN_{{=it.nameCaps}};
 constructor(public bale: {{=it.nameTitle}}Bit) {}
 }
 
export const EDIT_{{=it.nameCaps}} = "[Edit action] Edit {{=it.nameTitle}}";
 export class Edit{{=it.nameTitle}} implements Action {
 readonly type = EDIT_{{=it.nameCaps}};
 constructor(public bale: {{=it.nameTitle}}Bit) {}
 }
 
export const PATCH_{{=it.nameCaps}} = "[Patch action] Patch {{=it.nameTitle}}";
 export class Patch{{=it.nameTitle}} implements Action {
 readonly type = PATCH_{{=it.nameCaps}};
 constructor(public bale: {{=it.nameTitle}}Bit) {}
 }
 
export type Actions = | Init{{=it.nameTitle}} | Update{{=it.nameTitle}} 
| Open{{=it.nameTitle}}
| Run{{=it.nameTitle}}
| Edit{{=it.nameTitle}}
| Patch{{=it.nameTitle}}

