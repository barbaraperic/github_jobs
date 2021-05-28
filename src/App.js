import React from 'react';
import { GlobalStyle } from "./utils";
import Test from './components/Test'
// import Home from "./pages/Home";

const App = () => {
  return (
    <React.Fragment>
      <Test />
      {/* <Home /> */}
      <GlobalStyle />
    </React.Fragment>
  )
}

export default App;