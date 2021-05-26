import React from 'react';
import { GlobalStyle } from "./utils";
import Sidebar from "./containers/Sidebar"

const App = () => {
  return (
    <React.Fragment>
      <Sidebar />
      <GlobalStyle />
    </React.Fragment>
  )
}

export default App;