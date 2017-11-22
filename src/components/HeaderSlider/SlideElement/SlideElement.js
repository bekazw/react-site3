import React, {Component} from "react";
import "./SlideElement.css";

export default class SlideElement extends Component {
    elementInfo=[];    
    render() {
        this.elementInfo[0] = "Custis penati saccum nulla.@Nullamlacus dui ipsuNullamlacus dui ipsuNullamlacus dui ipsu";
        this.elementInfo[1] = "1Custis penati saccum nulla.@Nullamlacus dui ipsuNullamlacus dui ipsuNullamlacus dui ipsu";
        this.elementInfo[2] = "2Custis penati saccum nulla.@Nullamlacus dui ipsuNullamlacus dui ipsuNullamlacus dui ipsu";
        
        return (
            <div className="SlideElement" id={"se"+this.props.id/1}>
                <p className="slideCap">{this.elementInfo[this.props.id/1].split("@")[0]}</p>
                <p className="slideText">{this.elementInfo[this.props.id/1].split("@")[1]}</p>
                <div className="slideButton" >Read More Here>></div>
                <div className="slideImage"></div>
            </div>
        )
    }
}