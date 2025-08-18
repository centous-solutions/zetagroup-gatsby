import React from 'react';
import worldMap from '../../assets/images/world-map.png';

const OurOffices = () => {
    return (
        <section className="pb-80 our-office-sec">
            <div className="container">
                <div className="our-office-title pb-80">
                    <h2>Our offices</h2>
                </div>
                <div className="our-office-dls">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="our-office-dls-left">
                                <ul>
                                    <li>
                                        <span>Head office</span>
                                        <a href="#">New Zealand</a>
                                    </li>
                                    <li className="active"><a href="#">Australia</a></li>
                                    <li><a href="#">China</a></li>
                                    <li><a href="#">Fiji</a></li>
                                    <li><a href="#">India</a></li>
                                    <li><a href="#">United States</a></li>
                                    <li><a href="#">United Arab Emirates</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="our-office-dls-right">
                                <div className="office-map">
                                    <img src={worldMap} alt="World Map" />
                                    <div className="office-address">
                                        <p>Suite 2/54 Davis Ave, South Yarra VIC 3141, Australia</p>
                                        <p>Tel: 1800 293 714</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default OurOffices;
