import React, {Component} from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.js"
import SideMenu from './components/SideMenu/SideMenu';
import Backdrop from './components/Backdrop/Backdrop';
import Footer from './components/Footer/Footer.js';
import "./App.css"

class App extends Component {

  state = {
    sideMenuOpen: false
  };

  navigationClickHandler = () => {
    this.setState((prevState)=>{
      return {sideMenuOpen: !prevState.sideMenuOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideMenuOpen: false})
  }

  render() {
    let backdrop;
  
    if (this.state.sideMenuOpen ){
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <Router>
        <div style={{ height: "100%"}}>
          <Navigation menuClickHandler={this.navigationClickHandler} />
          <SideMenu show={this.state.sideMenuOpen}/>
          {backdrop}
          <main className="main" style={{marginTop: "56px" }}>
          <p>this is the page!</p>
          </main>
          <Footer />
        </div>
      </Router>
    );
  };
}

export default App;
