import React from 'react';
import materials from '../../assets/images/materials.svg';
import recyclable from '../../assets/images/recyclable.svg';
import chemistry from '../../assets/images/chemistry.svg';
import sustainableEnergy from '../../assets/images/sustainable-energy.svg';

const EcoFriendlyCare = () => {
    return (
        <section className="eco-friendly-sec pt-80 pb-80">
            <div className="container">
                <div className="eco-friendly-dls">
                    <h2 className="pb-46 text-center">Pioneering Eco-friendly Personal Care</h2>
                    <div className="row pb-46">
                        <div className="col-md-6">
                            <div className="eco-friendly-para">
                                <p>For the last 13 years, Zeta Group has been the leader in manufacturing eco-friendly
                                    personal care products. We created this category, and have grown it exponentially with
                                    numerous success stores for our clients.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="eco-friendly-para">
                                <p>
                                    We continuously push the boundaries of innovation when it comes to using environmentally
                                    friendly materials, and we are dedicated to leading the way to a more sustainable
                                    future.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="eco-friendly-listing">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 friendly-listing-wrap">
                                <div className="eco-friendly-spacing">
                                    <div className="eco-friendly-box">
                                        <img src={materials} alt="materials" />
                                        <a href="#">Sustainable Raw Materials</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 friendly-listing-wrap">
                                <div className="eco-friendly-spacing">
                                    <div className="eco-friendly-box">
                                        <img src={recyclable} alt="recyclable" />
                                        <a href="#">Recyclable and Biodegradable Packaging</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-end">
                            <div className="col-lg-4 col-md-6 friendly-listing-wrap">
                                <div className="eco-friendly-spacing">
                                    <div className="eco-friendly-box">
                                        <img src={chemistry} alt="chemistry" />
                                        <a href="#">Sustainable Raw Materials</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 friendly-listing-wrap">
                                <div className="eco-friendly-spacing">
                                    <div className="eco-friendly-box">
                                        <img src={sustainableEnergy} alt="sustainable energy" />
                                        <a href="#">Recyclable and Biodegradable Packaging</a>
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

export default EcoFriendlyCare;
