import React from "react";
import "./SideMenuButton.css";

const sideMenuButton = props => (
    <button className="menu_button" onClick={props.click}>
        <div className="menu_button_line"/>
        <div className="menu_button_line"/>
        <div className="menu_button_line"/>
    </button>
);

export default sideMenuButton;