import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Component App
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Confirmation from './components/Confirmation';
import Instructive from './components/Instructive';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Register" component={Register}/>
        <Route exact path="/Confirmation" component={Confirmation}/>
        <Route exact path="/Instructive" component={Instructive} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
