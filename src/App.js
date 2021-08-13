import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import UserDetails from "./components/User/UserDetails";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/user/:login" component={UserDetails} />
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
