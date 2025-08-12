import React from 'react';
import wipesIdea from '../../assets/images/wipes-idea.svg';
import wipesMaterial from '../../assets/images/wipes-material.svg';
import wipesFormulations from '../../assets/images/wipes-formulations.svg';
import wipesPacking from '../../assets/images/wipes-packing.svg';
import wipesDesign from '../../assets/images/wipes-design.svg';

const CustomWetWipes = () => {
    return (
        <section className="bg-sky-light custom-wet-wipes">
            <div className="container">
                <div className="pt-80 custom-wipes-sec">
                    <div className="custom-wipes-wrap pt-80 pb-80">
                        <div className="row pb-46">
                            <div className="col-md-6">
                                <div className="left-product-name">
                                    <h2>Custom Wet Wipes</h2>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="left-product-dls">
                                    <p>
                                        We offer a diverse range of we wipes with fully customizable options. Tailor the
                                        scent, cloth, ingredients and packaging to suit your market.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="wipes-formula-listing">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 friendly-listing-wrap">
                                    <div className="eco-friendly-spacing">
                                        <div className="eco-friendly-box">
                                            <div className="wipes-title">
                                                <h5><span>1</span>Start With An Idea</h5>
                                                <img src={wipesIdea} alt="wipes idea" />
                                            </div>
                                            <p>We’ll help bring your ideas to life and into production.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 friendly-listing-wrap">
                                    <div className="eco-friendly-spacing">
                                        <div className="eco-friendly-box">
                                            <div className="wipes-title">
                                                <h5><span>2</span>Material</h5>
                                                <img src={wipesMaterial} alt="wipes idea" />
                                            </div>
                                            <p>Select from high-quality fabrics: Plant-Based Wipes for eco-friendly
                                                solutions or Conventional Wipes.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 friendly-listing-wrap">
                                    <div className="eco-friendly-spacing">
                                        <div className="eco-friendly-box">
                                            <div className="wipes-title">
                                                <h5><span>3</span>Formulations</h5>
                                                <img src={wipesFormulations} alt="wipes idea" />
                                            </div>
                                            <p>Choose from our exclusive formulations, craft a custom hybrid, or select your
                                                own.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 friendly-listing-wrap">
                                    <div className="eco-friendly-spacing">
                                        <div className="eco-friendly-box">
                                            <div className="wipes-title">
                                                <h5><span>4</span>Packaging</h5>
                                                <img src={wipesPacking} alt="wipes packing" />
                                            </div>
                                            <p>Select packaging that reflects your brand and fits your product. We offer
                                                diverse, sustainable options.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 friendly-listing-wrap">
                                    <div className="eco-friendly-spacing">
                                        <div className="eco-friendly-box">
                                            <div className="wipes-title">
                                                <h5><span>5</span>Design</h5>
                                                <img src={wipesDesign} alt="wipes idea" />
                                            </div>
                                            <p>From logos to packaging, we help you build a brand that stands out and
                                                resonates with your audience.</p>
                                        </div>
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

export default CustomWetWipes;
