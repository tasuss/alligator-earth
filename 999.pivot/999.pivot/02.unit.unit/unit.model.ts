import Unit from "./fce/unit.interface";
import UnitBit from "./fce/unit.interface";

export class UnitModel implements Unit {
  idx:string = '02.unit';
  //unitBitList: UnitBit[] = [];
  //unitBits: any = {};

  buzzTemplate: string = `export const {{=it.buzNom}} = (cpy: {{=it.cpyNom}}, bal:{{=it.balNom}}, ste: State) => {
    debugger
    return cpy;
   };`

  buzzerTemplate: string = `export { {{=it.actTle}}  } from "./buz/{{=it.root}}.buzz";`

  actTemplate: string = `export const {{=it.actUpr}} = "{{=it.actMsg}}";
 export class {{=it.actTle}} implements Action {
  readonly type = {{=it.actUpr}};
  constructor(public bale: {{=it.bitNom}}) {}
 }`

  actTemplateLower: string = `
 export type Actions = | {{=it.actTle}}
 `

  reduceTemplate: string = `case Act.{{=it.actUpr}}:
 return Buzz.{{=it.actTle}}(clone(model), act.bale, state);
 `

}
