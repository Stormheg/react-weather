import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { configureStore } from './utils/Store';

import Weather from './routes/Weather';

const store = configureStore()

// path is used for relative routing
export default ({ path = '' }) => (
  <Provider store={store}>
    <Router basename={path}>
      <div className="App">
        <Route exact path="/" component={Weather} />
      </div>
    </Router>
  </Provider>
);
