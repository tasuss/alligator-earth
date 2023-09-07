import { BehaviorSubject } from "rx-lite";
import { Subject } from "rx-lite";
import { Action } from "./interface/action.interface";

import UnitModel from "../BEE";
import * as Effect from "../BEE";

export default class State extends BehaviorSubject<any> {
  public hunt: any;
  public value: any;
  public pivot:  any;
  public bus: any;

  private dispatcher: Subject = new Subject();

  constructor(init: UnitModel = new UnitModel()) {
    super(init);

    this.dispatcher
      .scan((state, action) => this.reducedApp(state, action), init)
      .subscribe((state) => {
        super.onNext(state);
      });
  }

  reducedApp(nextState: any, key: any) {
    for (var k in Effect.reducer) Effect.reducer[k](nextState[k], key, this);
    return nextState;
  }

  dispatch(value: Action) {
    var result = this.dispatcher.onNext(value);
    return result;
  }
  
  pat(value: Action) {
    this.dispatch(value);
  }

  next(value: any) {
    this.dispatcher.onNext(value);
  }
}
