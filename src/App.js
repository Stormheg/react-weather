import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { configureStore } from './utils/Store';

import WeatherPage from './routes/WeatherPage';
import HomePage from './routes/HomePage';
import NotFoundPage from './routes/NotFoundPage';


const store = configureStore()

// path is used for relative routing
export default ({ path = '' }) => (
  <Provider store={store}>
    <Router basename={path}>
      <Switch> 
        <Route exact path="/" component={HomePage} />
        <Route exact path="/forecast/:city?" component={WeatherPage} />
        <Route exact path="/*" component={NotFoundPage} />
      </Switch>
    </Router>
  </Provider>
);
