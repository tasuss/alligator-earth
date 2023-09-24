import AvasBit from "./avas.bit";

export default interface AvioBit extends AvasBit {
  idx: string;
  val?: number;
  slv: Function;
}
