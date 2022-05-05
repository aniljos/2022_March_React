import { logMiddleware } from './logMiddleware';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { authReducer } from './authReducer';
import {gadgetsReducer} from './gadgetsReducer';


// export const store = createStore(combineReducers({auth: authReducer, gadgets: gadgetsReducer}), 
//     (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

// export const store = createStore(combineReducers({auth: authReducer, gadgets: gadgetsReducer}), 
//                                                                     applyMiddleware(logMiddleware));



const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
        combineReducers({auth: authReducer, gadgets: gadgetsReducer}), 
        composeEnhancers( applyMiddleware(logMiddleware)));


export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 