import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import AppleBusket from '../components/appleBusket';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from '../redux/reducers/index';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <AppleBusket />
  </Provider>,
  document.getElementById('root'),
);
