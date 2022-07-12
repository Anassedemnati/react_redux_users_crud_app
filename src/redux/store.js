import {createStore,applyMiddleware} from "redux"
import logger from "redux-logger"
import thunk from 'redux-thunk'
import rootReucer from "./root-reducer"
import {composeWithDevTools} from 'redux-devtools-extension'

const middelewares  = [thunk];

if (process.env.NODE_ENV ==="development") {
    middelewares.push(logger)    
}

const store =  createStore(rootReucer,composeWithDevTools(applyMiddleware(...middelewares)));
export default store;