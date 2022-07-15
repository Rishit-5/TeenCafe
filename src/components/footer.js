import React from "react";


function Footer() {
    return (
        <div>
            <footer className="footer-distributed">

                <div className="footer-left">
                    <img src={require("../assets/inverselogo.png")} alt="footer-logo" />

                </div>


                <div className="footer-center">
                    <div>
                        <i className="contact"></i>
                        <p>Contact Us</p>
                    </div>

                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span>114 3 Ave SW</span> Calgary, Canada</p>
                    </div>

                    <div>
                        <i className="fa fa-phone"></i>
                        <p>403-771-8158</p>
                    </div>

                    <div>
                        <i className="fa fa-phone"></i>
                        <p><a href="mailto:calgaryteencafe@gmail.com">CalgaryTeenCafe@gmail.com</a></p>
                    </div>
                    <div>
                        <i className="fa fa-phone"></i>
                        <p><a href="https://discord.gg/TmRyb88ZmV">Discord Server</a></p>
                    </div>

                </div>

            </footer>
        </div>
    );
}

export default Footer;
