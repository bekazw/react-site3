import React, {Component} from "react";
import "./MenuElement.css";

export default class MenuElement extends Component {      
    render () {
        return (
            <p id={"e"+this.props.id} className="el">{this.props.text}</p>
        )
    }
}