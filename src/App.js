import React, {Component} from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.js"
import SideMenu from './components/SideMenu/SideMenu';
import Backdrop from './components/Backdrop/Backdrop';

class App extends Component {

  state = {
    sideMenuOpen: false
  };

  navigationClickHandler = () => {
    this.setState((prevState)=>{
      return {sideMenuOpen: !prevState.sideMenuOpen};
    });
  };

  render() {
    let sideMenu;
    let backdrop;
  
    if (this.state.sideMenuOpen ){
      sideMenu = <SideMenu />
      backdrop = <Backdrop />
    }

    return (
      <Router>
        <div style={{ height: "100%"}}>
          <Navigation menuClickHandler={this.navigationClickHandler} />
          {sideMenu}
          {backdrop}
          <main style={{marginTop: "64px"}}>
          <p>this is the page!</p>
          </main>
  
        </div>
      </Router>
    );
  };
}

export default App;
