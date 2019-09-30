import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { configureStore } from './utils/Store';

import WeatherPage from './routes/WeatherPage';
import HomePage from './routes/HomePage';


const store = configureStore()

// path is used for relative routing
export default ({ path = '' }) => (
  <Provider store={store}>
    <Router basename={path}>
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/forecast/:city?" component={WeatherPage} />
      </div>
    </Router>
  </Provider>
);
