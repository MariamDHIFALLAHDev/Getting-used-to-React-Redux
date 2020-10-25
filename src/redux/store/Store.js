import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/RootReducer';


const logger = store => next => action => {
    console.log('dispatching',action)
    let result = next(action)
    console.log('next state',store.getState())
    return result ;
}

const store = createStore(rootReducer,applyMiddleware(logger));

export default store;