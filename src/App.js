import React from 'react';
import {BrowserRouter,Route} from "react-router-dom"

import Entrance from "./apps/entrance/index.jsx";
import './App.less';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Entrance}/>
    </BrowserRouter>
  );
}

export default App;
