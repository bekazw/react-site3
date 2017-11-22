import React, {Component} from "react";
import "./Footer.css";

export default class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <p class="Ftitle" id="Ft0">From The Blogs</p>
                    <p className="f0Text" id="f0textTitle">Post title</p>
                    <p className="f0Text" id="f0textAuthor">Admin</p>
                    <p className="f0Text" id="f0textDate">Friday, 16 april 2015</p>
                    <p className="f0Text" id="f0textContent">nancsn ckasnj kansckj nvkjnsa njkakj scnakjhvnkvnkn kjnkjansckjsnvkjn</p>
                    <p className="f0Text" id="f0textLink">Read More>></p>
                   
                <p class="Ftitle" id="Ft1">Quick Links</p>
                    <ul>
                        <li> Link1</li>
                        <li> Link2</li>
                        <li> Link3</li>
                        <li> Link4</li>
                        <li> Link5</li>
                        <li> Link6</li>
                        <li> Link7</li>
                    </ul>
                <p class="Ftitle" id="Ft2">Latests Tweets</p>
                    <p className="tweets" id="tweet0"> @author Adad asda asgwebdcf bndefbfdbfd nmfgnsdf sdgn </p>
                    <p className="tweets" id="tweet1"> @author Adad asda asgwebdcf bndefbfdbfd nmfgnsdf sdgn </p>

                <p class="Ftitle" id="Ft3">Contact Us</p>
                    <input type="text" placeholder=" Full Name" className="f3Contact" id="f3Name"/>
                    <input type="email" placeholder=" Email Adress" className="f3Contact" id="f3Mail"/>
                    <input type="text" placeholder=" Subject" className="f3Contact" id="f3Subject"/>
                    <textarea placeholder=" Message" className="f3Contact" id="f3Message"/>      
                    <p id="f3Submit">SUBMIT</p>
            </div>
        )
    }
}