import React, {Component} from "react";
import "./LW_element.css";

export default class LWelement extends Component {
    render() {
        return (
            <div className="LW_element" id={"LW_el"+this.props.id}>
                <p id="LW_el_text">LOREM IPSUS</p>
            </div> 
        )
    }
}