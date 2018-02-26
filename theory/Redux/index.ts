
export function creteStore(reducer: Function, initialState?: any) {
    let _curentState = null;
    let _subscribers: Array<Function> = [];
    function dispatch(action: Action){
        _curentState = reducer(_curentState, action);
    }

    function subscribe (subscriber: Function) {
        _subscribers.push(subscriber);
    }

    function getState () {
        return _curentState;
    }

    dispatch({type: '@@Init'})

    return {
        dispatch,
        subscribe,
        getState
    }
}
export interface Store {
    dispatch: (action: Action) => void;
    subscribe: (subscribe: Function) => void;
    getState: () => any;
}

export interface Action {
    type: string;
    payload?: any;
}

const counterReducer = (state=0, action:Action) => {
    switch (action.type){
        case 'INCREMENT':
            return state = state + 1;
        case 'DECREMENT':
            return state = state - 1;
        default:
            return state;
    }
}
const store = creteStore(counterReducer, 0)
store.subscribe(() => {
    console.log (store .getState())
})
store.dispatch({ type: 'INCREMENT', payload: 1 })
