import React from 'react';
import ReactDOM from 'react-dom';
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer";
import './index.css';
import App from './App';

// Create a redux store using the reducer function from above.
// Optional second argument enables redux devtools chrome extension:
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log("Current State:", store.getState());
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>, 
    document.getElementById('root')
);
