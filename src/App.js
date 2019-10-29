import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Component App
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Register" component={Register}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
