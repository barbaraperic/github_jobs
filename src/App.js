import React from 'react';
import { GlobalStyle } from "./utils";
import { Home } from "./pages"

const App = () => {
  return (
    <React.Fragment>
      <Home />
      <GlobalStyle />
    </React.Fragment>
  )
}

export default App;