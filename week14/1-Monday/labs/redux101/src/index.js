import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import counterReducer from './reducers/counterReducer';
import { Router, Switch, Link} from 'react-router-dom';
        
import BaseLayout from './components/layout/BaseLayout';

 let store = createStore(counterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) //pass in reducer once created

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <Router>
        <BaseLayout>
          <Switch>
            <Route path = '/' component = {App} />
          </Switch>
        </BaseLayout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


