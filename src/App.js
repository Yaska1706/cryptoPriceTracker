import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route } from 'react-router-dom'
import Header from './components/common/Header'
import List from './components/List/List'
import NotFound from './components/NotFound/NotFound'
import Detail from './components/Detail/Detail'

function App() {
  return (

    <BrowserRouter>

      <div>
        <Header/>
        <Switch>
          <Route path="/" component={List} exact/>
          <Route path="/currency/:id" component={Detail} exact/>
          <Route component={NotFound} />
        </Switch>
      </div>
      
    </BrowserRouter>
    
     
  );
}

export default App;
