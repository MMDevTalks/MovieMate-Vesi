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

class Observable<T>{
    public map: (trasformFn:Function) => Observable<T> = mapFn;
    public filterFn: (condition:Function) => Observable<T> = mapFn;
    constructor(public subscribe: ((obsever: Observer<T>) => any)){   }
    static create<T>(subscribe: ((observer: Observer<T>) => any)){
        return new Observable(subscribe);
    }
}
class Observer<T>{
    constructor(
        public next: (value: T) => void,
        public error?: (err:any) => void,
        public complete?: () => void
    ){

    }
}
Observable.create((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
})
    .map(x => x * 2)
    .filterFn(x => x > 5)
    .subscribe(new Observer((data) =>{
        console.log(data);
    }));