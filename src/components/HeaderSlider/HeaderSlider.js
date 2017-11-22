import React, {Component} from "react";
import "./HeaderSlider.css";

import SlideElement from "./SlideElement/SlideElement";

export default class HeaderSlider extends Component {
    render () {
        return (
            <div className="HeaderSlider">
                 <div className="HSarrow" id="HSarrow0"></div>
                 <div className="HSarrow" id="HSarrow1"></div>
                 <SlideElement id={0} />
                 <SlideElement id={1} />
                 <SlideElement id={2} />    
            </div>
        )
    }
}