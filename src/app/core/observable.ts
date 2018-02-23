
function mapFn<T>(this: Observable<T>, trasformFn: Function): Observable<T>{
    const inputObservable = this;
    const outputObservable = Observable.create((observer) => {
        return inputObservable.subscribe(new Observer((data => {
            observer.next(trasformFn(data));
        })))
    })
    return outputObservable;
}

function filterFn<T>(this: Observable<T>, condition: Function): Observable<T>{
    const inputObservable = this;
    const outputObservable = Observable.create((observer) => {
        return inputObservable.subscribe(new Observer((data => {
            if(condition(data) ){
                observer.next(data);
            }
        })))
    })
    return outputObservable;
}

function delayFn<T>(this: Observable<T>, duration: number): Observable<T>{
    const inputObservable = this;
    const outputObservable = Observable.create((observer) => {
        return inputObservable.subscribe(new Observer((data => {
            setTimeout(() => {
                observer.next(data);
            }, duration );      
        })))
    })
    return outputObservable;
}

class Observable<T>{
    public map: (trasformFn: Function) => Observable<T> = mapFn;
    public filter: (condition: Function) => Observable<T> = filterFn;
    public delay: (duration: number) => Observable<T> = delayFn;
    constructor(public subscribe: ((obsever: Observer<T>) => any)){   }
    static create<T>(subscribe: ((observer: Observer<T>) => any)){
        return new Observable(subscribe);
    }
}
class Observer<T>{
    constructor(
        public next: (value: T) => void,
        public error?: (err: any) => void,
        public complete?: () => void
    ){

    }
}