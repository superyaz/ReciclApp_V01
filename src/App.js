import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Corresponde al Dashboard
import Dashboard from './screens/Dashboard';
import Confirmation from './screens/Confirmation';
import Users from './screens/Users';
import Signin from './screens/Signin';
import Collector from './screens/Collector';
import Appointment from "./screens/Appointment";


function App() {
  return (
    <BrowserRouter>
      <Switch>
      {/* //Corresponde al Dashboard */}
        <Route exact path="/" component={Signin} />
        <Route exact path="/Collector" component={Collector} />
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/Users" component={Users} />
        <Route exact path="/Confirmation" component={Confirmation} />
        <Route exact path="/Appointment" component={Appointment} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
