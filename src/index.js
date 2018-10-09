import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import reducers from './reducers';
import Dashboard from './components/dashboard';
import HeroDetail from './components/hero-detail';
import Heroes from './components/heroes';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const Main = styled.div`
  h3 {
    text-align: center; margin-bottom: 0;
  }
  h1 {
    font-size: 1.2em;
    color: #999;
    margin-bottom: 0;
  }
`

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Main>
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
      </Main>
    </BrowserRouter>    
  </Provider>
  , document.querySelector('.container'));
