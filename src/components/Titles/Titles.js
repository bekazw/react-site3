import React, {Component} from "react";
import "./Titles.css";

import TitleElements from "./TitleElement/TitleElements";

export default class Titles extends Component {
    render() {
        return (
            <div className="Titles">
                <TitleElements id="0"/>
                <TitleElements id="1"/>
                <TitleElements id="2"/>
                <TitleElements id="3"/>
            </div>
        )
    }
}