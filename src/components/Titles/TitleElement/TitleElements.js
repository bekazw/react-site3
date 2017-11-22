import React, {Component} from "react";
import "./TitleElements.css";

export default class TitleElements extends Component {
    render() {
        return (
            <div className="TitleElements" id={"te"+this.props.id}>
                <div id="img"></div> 
                <p id="title">SERVICE TITLE</p>
                <p id="text">Some text without any sense and... Lorem ipsus </p>
            </div>
        )
    }
}