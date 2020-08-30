import React from "react";

import "./SideMenu.css";

const sideMenu = props => (
    <nav className="side_menu">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">All-Time</a></li>
            <li><a href="/">Records</a></li>
        </ul>
    </nav>
);

export default sideMenu;