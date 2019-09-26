import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { configureStore } from './utils/Store';

import WeatherPage from './routes/WeatherPage';

const store = configureStore()

// path is used for relative routing
export default ({ path = '' }) => (
  <Provider store={store}>
    <Router basename={path}>
      <div className="App">
        <Route exact path="/" component={WeatherPage} />
      </div>
    </Router>
  </Provider>
);
