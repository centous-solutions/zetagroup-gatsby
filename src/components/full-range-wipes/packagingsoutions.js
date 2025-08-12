import React from 'react';
import singleSachet from '../../assets/images/Single-Sachet.png';
import travelPack from '../../assets/images/travel-pack.png';
import classicPack from '../../assets/images/classic-pack.png';

const PackagingSoutions = () => {
    return (
        <section class="bg-white-gradient pt-80 pb-80 packaging-solution-sec">
            <div class="container">
                <div class="pb-46 packaging-sol-title">
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="left-product-name">
                                <h2>PACKAGING SOLUTIONS</h2>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="left-product-dls">
                                <p>
                                    We offer tailored packaging solutions for your business. Each customizable wipe size and
                                    packaging option delivers unique benefits including: cost-efficiency, streamlined
                                    logistics,
                                    new client attraction, sterility, ease of use and maximum impact on retail shelves.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="wipes-formula-listing">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 wipes-border">
                            <div class="eco-friendly-spacing">
                                <div class="eco-friendly-box">
                                    <h5>Single Sachet</h5>
                                    <p>
                                        Our pocket sized single sachets are perfect for on-the-go to sterile single use
                                        solutions.
                                    </p>
                                    <img src={singleSachet} alt="Single Sachet" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wipes-border">
                            <div class="eco-friendly-spacing">
                                <div class="eco-friendly-box">
                                    <h5>Travel Pack</h5>
                                    <p>
                                        Designed for convenience and usually intended as a compact version of customers
                                        favourite classic packs or for cost effective sampling.
                                    </p>
                                    <img src={travelPack} alt="travel pack" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wipes-border">
                            <div class="eco-friendly-spacing">
                                <div class="eco-friendly-box">
                                    <h5>Classic</h5>
                                    <p>
                                        Our classic packs are a staple in all households. Ranging from 30 to 140 wipes and a
                                        wide selection of lid formats.
                                    </p>
                                    <img src={classicPack} alt="classic pack" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default PackagingSoutions;
