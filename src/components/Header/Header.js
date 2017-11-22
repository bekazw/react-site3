import React, {Component} from "react";
import "./Header.css";

import MenuElement from "../MenuElement/MenuElement";

export default class Header extends Component {
    render() {
        return (
           <div className="Header"> 
               <div id="LOGO"></div>
            <MenuElement id={0} text="HOME"/>
            <MenuElement id={1} text="STYLE DEMO"/>
            <MenuElement id={2} text="FULL WIDTH"/>
            <MenuElement id={3} text="DROPDOWN"/>
            <MenuElement id={4} text="PORTFOLIO"/>
            <MenuElement id={5} text="GALERY"/>
           </div> 
        );
    }
}