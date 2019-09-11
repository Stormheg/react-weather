import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Weather from './routes/Weather';


// path is used for relative routing
export default ({ path = '' }) => (
  <Router basename={path}>
    <div className="App">
      <Route exact path="/" component={Weather} />
    </div>
  </Router>
);
