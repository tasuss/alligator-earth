import AvasBit from "./avas.bit";

export default interface AvidBit extends AvasBit {
  idx: string;
  val?: number;
  slv: Function;
}
