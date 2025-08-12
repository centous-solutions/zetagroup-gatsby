import React from "react";
import svgLogo from "../assets/images/zeta-group-logo.svg";

const Footer = () => {
    return (
        <footer className="bg-sky-light pt-80">
            <div className="container">
                <div className="footert-wrap pb-60">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-logo">
                                <a href="#">
                                    <img src={svgLogo} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-navs">
                                <h5>Quick link</h5>
                                <ul>
                                    <li><a href="#">Products We Make</a></li>
                                    <li><a href="#">Our Services</a></li>
                                    <li><a href="#">Become Our Distributor</a></li>
                                    <li><a href="#">Wholesale</a></li>
                                    <li><a href="#">Production Capabilities</a></li>
                                    <li><a href="#">Sustainability & Innovation</a></li>
                                    <li><a href="#">About us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-navs">
                                <h5>Product we make</h5>
                                <ul>
                                    <li><a href="#">Facebook</a></li>
                                    <li><a href="#">Youtube</a></li>
                                    <li><a href="#">LinkedIn</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-navs footer-address">
                                <h5>Address</h5>
                                <p>27 Timberly Road, Māngere, Auckland 2022, New Zealand</p>
                            </div>
                            <div className="footer-navs footer-address">
                                <h5>Business hours</h5>
                                <p>Monday to Friday: 9am – 5pm (GMT +13)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <a href="#">Privacy Policy</a>
                    <p>© ZETA GROUP NZ Ltd 2024</p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;