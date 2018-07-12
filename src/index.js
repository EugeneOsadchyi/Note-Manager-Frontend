import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider, compose } from 'react-redux';

import rootReducer from './store/reducers';
import App from './containers/App';

const composeEnhancers = process.env.NODE_ENV === 'development'
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : (null || compose);

render(
  <Provider store={createStore(rootReducer, composeEnhancers())}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
