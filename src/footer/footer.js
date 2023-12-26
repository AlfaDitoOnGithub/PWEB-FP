import React from "react";
import './footer.css';
import fb from './fbimg.png'
import twitter from './twitterimg.png'
import youtube from './ytimg.png'
import insta from './instaimg.png'

const Footer=()=>{
    return(
        <div className="footer">
            <div className="sb__footer section_padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <a href="/">
                            <h4>Home</h4>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Product</h4>
                        <a href="/product/listing/men">
                            <p>Men</p>
                        </a>
                        <a href="/product/listing/women">
                            <p>Women</p>
                        </a>
                        <a href="/product/listing/kids">
                            <p>Kids</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Company</h4>
                        <a href="/product/listing/men">
                            <p>About</p>
                        </a>
                        <a href="/product/listing/women">
                            <p>Career</p>
                        </a>
                        <a href="/product/listing/kids">
                            <p>Contact</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Social Media</h4>
                        <div className="socialmedia">
                            <a href="https://facebook.com/"><img src={fb} alt=" "/></a>
                            <a href="https://twitter.com/"><img src={twitter} alt=" "/></a>
                            <a href="https://youtube.com/"><img src={youtube} alt=" "/></a>
                            <a href="https://instagram.com/"><img src={insta} alt=" "/></a>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            @{new Date().getFullYear()} CodeInn. All right reserved.
                        </p>
                    </div>
                    <div className="sb__footer-below-links">
                        <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                        <a href="/terms"><div><p>Privacy</p></div></a>
                        <a href="/terms"><div><p>Security</p></div></a>
                        <a href="/terms"><div><p>Cookie Declaration</p></div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;