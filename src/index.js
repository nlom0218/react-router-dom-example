import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from "react-router-dom"

import "./index.css"

// Component
import Contanct from './Component/Contact';
import Home from './Component/Home';
import Topics from './Component/Topics';
import List from './Component/List';
import './index.css';

function App() {
  return <div>
    <h1>React Router Dom Example 2021</h1>
    <List />
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path="/topics"><Topics /></Route>
      <Route path="/contact"><Contanct /></Route>
      <Route path="/">Not Found</Route>
    </Switch>
  </div>
}

ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));
