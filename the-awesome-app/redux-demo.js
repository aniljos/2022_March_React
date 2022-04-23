

//import {createStore} from 'redux';
const redux = require('redux');
const createStore = redux.createStore;

//init data
const initData = {
    count: 10,
    message: "Hello Redux"
}

//reducer
const reducer = (state=initData, action) => {
    
    

    //return the updated state
    if(action.type === "INC_CTR"){
        return {
            ...state,
            count: state.count + 1
        }
    }
    if(action.type === "DECR_CTR"){
        return {
            ...state,
            count: state.count - 1
        }
    }
    if(action.type === "UPD_CTR"){
        return {
            ...state,
            count: action.value
        }
    }
    return state;
}

//store
const store = createStore(reducer);
console.log("State", store.getState());

//subscribe

store.subscribe(() => {
    console.log("In subscribe", store.getState());
})


//dispatch an action

store.dispatch({type: "INC_CTR"});
//console.log("State", store.getState());
store.dispatch({type: "DECR_CTR"});
//console.log("State", store.getState());
store.dispatch({type: "UPD_CTR", value: 25});
//console.log("State", store.getState());