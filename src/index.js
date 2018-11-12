import React from 'react';
import ReactDOM from 'react-dom';
import App from './Component/App';
import { createStore } from 'redux';
import counterReducer from './Reducer/counterReducer';
import { Provider } from 'react-redux';


const store = createStore(
    counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));


