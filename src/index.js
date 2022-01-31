import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';

// just done this basic setup
const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

/*
// to create the store we need this method called from reduxt
import { createStore } from 'redux';

// STORE -> GLOBAL STATE (you can assume this is a global variable), which can be access from anywhere of the application. I mean from any component this can be access (modify the data, get teh data etc)

// ACTION -> just this means the what is going to be happend. for example 
// for a counter method here one cantion can be "INCREMENT"
// for ecommerce platform one action can be "ADD_TO_CART"
// for authontication system some action can be "SIGN_IN", "SIGN_OUT" etc

const increment = () => {
  return {
    type: 'INCREMENT'
  }
}
const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

// REDUCER -> reducer just the do the main operation of that state according to the ACTION. for example if ACTION is "INCREMENT" then reducter will just do that state variable increment. if ACTION is "SIGN_IN" then reducer will just do change the authuntication state or varialble or whatver change will the  
const counter = (state = 0, action) => {
  switch(action.type){
    case "INCREMENT":
      return state + 1;
    case "DECREMENT": 
      return state - 1;
  }
}
// create store
let store = createStore(counter);
// display this on console
store.subscribe(() => console.log(store.getState()));
store.dispatch(increment());
store.dispatch(increment()); // 18.44
*/
// DISPATCH -> this will just execute the ACTION. and according the ACTION reducer will called and the value / state will be updated at store. very very simple
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);