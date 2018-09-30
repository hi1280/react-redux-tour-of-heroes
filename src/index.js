import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import { Link } from 'react-router-dom';

import reducers from './reducers';
import Dashboard from './components/dashboard';
import HeroDetail from './components/hero-detail';
import Heroes from './components/heroes';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <h1>Tour of Heroes</h1>
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/heroes">Heroes</Link>
        </nav>
        <Switch>
          <Route path="/heroes" component={Heroes}/>
          <Route path="/detail/:id" component={HeroDetail}/>
          <Route path="/" component={Dashboard}/>
        </Switch>
      </div>
    </BrowserRouter>    
  </Provider>
  , document.querySelector('.container'));
