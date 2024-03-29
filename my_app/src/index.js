import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './reducers/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './reducers/store'


ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider> 
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
registerServiceWorker();
