import React from 'react';

import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.js"
import SideMenu from './components/SideMenu/SideMenu';
import Backdrop from './components/Backdrop/Backdrop';

function App() {
  return (
    <Router>
      <div style={{ height: "100%"}}>
        <Navigation />
        <SideMenu />
        <Backdrop />
        <main style={{marginTop: "64px"}}>
        <p>this is the page!</p>
        </main>

      </div>
    </Router>
  );
}

export default App;
