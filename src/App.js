import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.js"

function App() {
  return (
    <Router>
      <Navigation />
      <main style={{marginTop: "64px"}}>
      <p>this is the page!</p>
      </main>
    </Router>
  );
}

export default App;
