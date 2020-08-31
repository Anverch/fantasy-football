import React from "react";

import "./SideMenu.css";

const sideMenu = props => {
    let menuClasses = "side_menu";

    if (props.show) {
        menuClasses = "side_menu open";
    }
    return (
        <nav className={menuClasses}>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">All-Time</a>
                </li>
                <li>
                    <a href="/">Records</a>
                </li>
            </ul>
        </nav>
    );
} 

export default sideMenu;