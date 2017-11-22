import React, {Component} from "react";
import "./Copyrights.css";

export default class Copyrights extends Component {
    render() {
        return (
            <div className="Copyrights">
                <p className="Ctext">Copyright@ 2013 DomainName - All Right Reserved </p>
                <p className="Ctext" id="Ctext2">Template by .... </p>
            </div>
        )
    }
}