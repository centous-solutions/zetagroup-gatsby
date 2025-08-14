import React from 'react';
import ourProven from '../../assets/images/our-proven.jpg';

const ProvenExperience = () => {
    return (
        <section className="pt-80 pb-80 our-proven-sec">
            <div className="container">
                <div className="product-make-listing">
                    <div className="row flex-row-reverse pb-46">
                        <div className="col-md-6">
                            <div className="pro-listing-img">
                                <img src={ourProven} alt="our proven" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="pro-listing-dls">
                                <h2>OUR PROVEN EXPERIENCE</h2>
                                <p>
                                    Since 2016, we have continuously developed our customers ranges to deliver a competitive
                                    advantage that drives revenue and market leadership. We’ve guided customers through
                                    range renovations while maintaining consumer trust and loyalty as well as existing
                                    retail prices. We love a challenge and have real examples, awards and accolades to prove
                                    it.
                                </p>
                                <p className="offer-txt">
                                    These achievements are backed by results and awards.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ProvenExperience;
