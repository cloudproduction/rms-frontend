import React from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './components/pages/Dashboard';
import EditRequsition from './components/pages/EditRequsition';
import Login from './components/pages/Login';
// axios.defaults.baseURL = window.$baseURL = "http://localhost:8000/";

function App() {
  return (
    <div className="App">
      
      <Router>

        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/dashboard/edit-requisition" component={EditRequsition} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
