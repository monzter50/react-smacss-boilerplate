import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { store, history } from "./redux/store";
// import './index.css';
import PublicRoutes from './routes';
import './scss/styles.scss';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <PublicRoutes />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();