import React from 'react';
import { Provider as StyletronProvider, DebugEngine } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const debug =
  process.env.NODE_ENV === 'production' ? void 0 : new DebugEngine();

const engine = new Styletron();

function App() {
  return (
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <Router>
        <Switch>
          <Route path='/product'>
            <ProductPage />
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </StyletronProvider>
  );
}

export default App;
