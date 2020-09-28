import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './components/pages/Dashboard';
import EditRequsition from './components/pages/EditRequsition';
import Login from './components/pages/Login';

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
