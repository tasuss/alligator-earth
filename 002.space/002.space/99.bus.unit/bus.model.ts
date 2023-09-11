import Bus from "./fce/bus.interface";
import BusBit from "./fce/bus.interface";

export class BusModel implements Bus {
 MQTT:any;
 //idx:string;
 //busBitList: BusBit[] = [];
 //busBits: any = {};
 actList:any;
 client:any;
 host:string = "mqtt://localhost:1883";
 bus:Function;
 responseSuffix:string = '-response'
 promises:any = {}

}
