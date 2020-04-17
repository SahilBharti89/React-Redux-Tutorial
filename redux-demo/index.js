// import Redux from 'redux';

const redux = require('redux');
const reduxLogger = require('redux-logger');
const createStore = redux.createStore;
const combinedReducer = redux.combineReducers
const applyMiddleWare = redux.applyMiddleware
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: '2nd redux action'
    }
}

const initialCakeState = {
    numOFCakes: 10
}

const initialIceCreamState = {
    numOFIceCreams: 20
}

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOFCakes: state.numOFCakes - 1
            }
        default:
            return state        
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOFIceCreams: state.numOFIceCreams - 1
            }
        default:
            return state        
    }
}

const rootReducer = combinedReducer({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleWare(logger));
console.log('Initial state', store.getState());
const unsubscribe =  store.subscribe(() => { });
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()