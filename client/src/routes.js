import React from 'react';
import { 
  BrowserRouter, 
  Route,
  Switch,
} from 'react-router-dom';

import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <BrowserRouter {...props}>
    <div>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;