import React from "react";

import SideMenuButton from "../SideMenu/SideMenuButton"
import "./Navigation.css"

const navigation = props => (
    <header className="navigation">
        <nav className="navigation_tool">
            <div>
                <SideMenuButton click={props.menuClickHandler} />
            </div>
            <div className="nav_logo">Saiyan League</div>
            <div className="spacer"></div>
            <div className="nav_tool_items">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">All-Time</a></li>
                    <li><a href="/">Records</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default navigation;