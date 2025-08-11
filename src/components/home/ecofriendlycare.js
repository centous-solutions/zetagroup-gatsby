import React from 'react';
import materials from '../../assets/images/materials.svg';
import recyclable from '../../assets/images/recyclable.svg';
import chemistry from '../../assets/images/chemistry.svg';
import sustainableEnergy from '../../assets/images/sustainable-energy.svg';

const EcoFriendlyCare = () => {
    return (
        <section class="eco-friendly-sec pt-80 pb-80">
            <div class="container">
                <div class="eco-friendly-dls">
                    <h2 class="pb-46 text-center">Pioneering Eco-friendly Personal Care</h2>
                    <div class="row pb-46">
                        <div class="col-md-6">
                            <div class="eco-friendly-para">
                                <p>For the last 13 years, Zeta Group has been the leader in manufacturing eco-friendly
                                    personal care products. We created this category, and have grown it exponentially with
                                    numerous success stores for our clients.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="eco-friendly-para">
                                <p>
                                    We continuously push the boundaries of innovation when it comes to using environmentally
                                    friendly materials, and we are dedicated to leading the way to a more sustainable
                                    future.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="eco-friendly-listing">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 friendly-listing-wrap">
                                <div class="eco-friendly-spacing">
                                    <div class="eco-friendly-box">
                                        <img src={materials} alt="materials" />
                                        <a href="#">Sustainable Raw Materials</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 friendly-listing-wrap">
                                <div class="eco-friendly-spacing">
                                    <div class="eco-friendly-box">
                                        <img src={recyclable} alt="recyclable" />
                                        <a href="#">Recyclable and Biodegradable Packaging</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-end">
                            <div class="col-lg-4 col-md-6 friendly-listing-wrap">
                                <div class="eco-friendly-spacing">
                                    <div class="eco-friendly-box">
                                        <img src={chemistry} alt="chemistry" />
                                        <a href="#">Sustainable Raw Materials</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 friendly-listing-wrap">
                                <div class="eco-friendly-spacing">
                                    <div class="eco-friendly-box">
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
