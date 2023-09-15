export interface Action<T = any> {
  type: string;
  bale?: T;
}
