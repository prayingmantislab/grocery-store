import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import './App.css';

const HomePage = () => {
  
  return (
    <div>
      <h1>HOME PAGE</h1>
    </div>
  );
};

const PicklesPage = () => (
  <div>
    <h1>חמוצים</h1>
  </div>
);



function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/pickles' component={PicklesPage} />
      </Switch>
    </div>
  );
}

export default App;
