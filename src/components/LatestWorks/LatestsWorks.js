import React, {Component} from "react";
import "./LatestsWorks.css";

import LWelement from "./LW_element/LW_element";

export default class LatestsWorks extends Component {
    render() {
        return (
            <div className="LatestsWorks">
                    <hr></hr>
                    <p id="LW_caption">LATEST WORK</p>
                    <LWelement id="0"/>
                    <LWelement id="1"/>
                    <LWelement id="2"/>
                    <LWelement id="3"/>
                    <LWelement id="4"/>
                    <LWelement id="5"/>                    
            </div>
           )
    }
}