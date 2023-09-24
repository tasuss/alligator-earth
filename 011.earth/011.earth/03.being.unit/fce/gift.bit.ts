import AuthenticityBit from "./gift.autn.bit";
import AuthorityBit from "./gift.autr.bit";
import CapacityBit from "./gift.capa.bit";
import CreativityBit from "./gift.ctiv.bit";
import EternityBit from "./gift.etri.bit";
import IntensityBit from "./gift.ints.bit";
import MoralityBit from "./gift.morl.bit";
import PotentialityBit from "./gift.pont.bit";
import VitalityBit from "./gift.viti.bit";

export default interface GiftBit {
  idx?: string;
  autn:AuthorityBit;
  autr:AuthenticityBit;
  capa:CapacityBit;
  ctiv:CreativityBit;
  etri:EternityBit;
  ints: IntensityBit;
  morl: MoralityBit;
  pont: PotentialityBit;
  viti: VitalityBit;

}
