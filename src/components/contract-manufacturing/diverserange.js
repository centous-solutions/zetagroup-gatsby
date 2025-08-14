import React from 'react';
import ecoEnergy from '../../assets/images/eco-energy.svg';
import awardPremium from '../../assets/images/award-premium.svg';
import shopingBag from '../../assets/images/shopping-bag-favorite.svg';
import hotPrice from '../../assets/images/hot-price.svg';

const DiverseRange = () => {
    return (
        <section className="pt-80 pb-80 diverse-range-sec">
            <div className="container">
                <div className="contract-project">
                    <div className="row pb-46">
                        <div className="col-md-6">
                            <div className="left-product-name">
                                <h2>Diverse range
                                    of our products</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="left-product-dls">
                                <p>
                                    Our extensive industry experience has taught us that there isn’t a 'one size fits all'
                                    approach. We create the product mix to meet diverse customer needs.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="wipes-formula-listing">
                        <div className="row">
                            <div className="col-md-6 friendly-listing-wrap">
                                <div className="eco-friendly-spacing">
                                    <div className="eco-friendly-box">
                                        <div className="wipes-title">
                                            <h5>Premium eco organic</h5>
                                            <img src={ecoEnergy} alt="" />
                                        </div>
                                        <p>
                                            Write to us and leave your contact details. Our specialists will reach out to
                                            you as soon as possible to discuss your specific needs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 friendly-listing-wrap">
                                <div className="eco-friendly-spacing">
                                    <div className="eco-friendly-box">
                                        <div className="wipes-title">
                                            <h5>Premium</h5>
                                            <img src={awardPremium} alt="" />
                                        </div>
                                        <p>
                                            Carefully crafted diapers and wipes, engineered to elevate daily comfort and
                                            convenience. While they contain fewer plant-based materials, they're crafted to
                                            the highest standards.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 friendly-listing-wrap">
                                <div className="eco-friendly-spacing">
                                    <div className="eco-friendly-box">
                                        <div className="wipes-title">
                                            <h5>Mainstream</h5>
                                            <img src={shopingBag} alt="" />
                                        </div>
                                        <p>
                                            Where quality meets affordability for modern families. Tailored to suit everyday
                                            needs, our smart solutions offer convenience without compromise.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 friendly-listing-wrap">
                                <div className="eco-friendly-spacing">
                                    <div className="eco-friendly-box">
                                        <div className="wipes-title">
                                            <h5>Price fighter</h5>
                                            <img src={hotPrice} alt="" />
                                        </div>
                                        <p>
                                            Designed to be budget-friendly without sacrificing performance, our products
                                            provide alternative options for savvy shoppers.
                                        </p>
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

export default DiverseRange;
