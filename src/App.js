import React from 'react';
import { GlobalStyle } from "./utils";
import Test from './components/Test'
import Cards from './containers/Cards'
// import Home from "./pages/Home";

const App = () => {
  return (
    <React.Fragment>
      <Cards />
      {/* <Test /> */}
      {/* <Home /> */}
      <GlobalStyle />
    </React.Fragment>
  )
}

export default App;