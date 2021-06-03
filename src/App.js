import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { GlobalStyle } from "./utils";
import Test from './components/Test'
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails"

const App = () => {
  return (
    <>
    <Test />
      {/* <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/job">
            <JobDetails />
          </Route>
        </Switch>
      </Router> */}
      <GlobalStyle />
    </>
  )
}

export default App;