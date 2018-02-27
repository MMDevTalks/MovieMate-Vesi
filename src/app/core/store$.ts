import { InjectionToken } from '@angular/core';
import { Store, Action } from "./redux";
import { Observer, Observable } from "./rx";
export const StoreToken = new InjectionToken<Store$>('Store$');

export class Store$ {
    public state$: Observable<any>;
    constructor(private store: Store) {
        this.state$ = Observable.create((obs: Observer<any>) => {
            this.store.subscribe (_=> {
                obs.next(this.store.getState())
            })
        })
    }
    dispatch(action: Action) {
        this.store.dispatch(action);
    }
}