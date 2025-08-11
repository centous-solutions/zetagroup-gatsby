import React from 'react';
import ourBrandSliders from '../../assets/images/our-brands-slider.jpg';
import ourBrandThumbnail from '../../assets/images/our-brands-thubnail.png';
import teraThumbnail from '../../assets/images/tera-thubnail.svg';
import kiddicareThumbnail from '../../assets/images/kiddicare-thubnail.svg';
import betterLivingThumbnail from '../../assets/images/better-living-thubnail.svg';
import miniStartsThumbnail from '../../assets/images/mini-starts-thubnail.svg';

const OurBrands = () => {
    return (
        <section class="bg-dark-sky our-brands-sec">
            <div class="row">
                <div class="col-lg-4 our-brands-col">
                    <div class="our-brands-dls">
                        <div class="container">
                            <div class="our-brands-left">
                                <h2>Our Brands</h2>
                                <p>
                                    Our portfolio of award-winning brands is proudly developed in New Zealand and supported
                                    by
                                    trusted global distribution partners. With a tiered brand architecture, we cater to a
                                    broad
                                    spectrum of retailer and consumer needs.
                                </p>
                                <a href="#" class="btn btn-primary">Become Our Distributor
                                    <span>
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M13.75 2C13.75 1.58579 13.4142 1.25 13 1.25L6.25 1.25C5.83579 1.25 5.5 1.58579 5.5 2C5.5 2.41421 5.83579 2.75 6.25 2.75H12.25V8.75C12.25 9.16421 12.5858 9.5 13 9.5C13.4142 9.5 13.75 9.16421 13.75 8.75L13.75 2ZM2 13L2.53033 13.5303L13.5303 2.53033L13 2L12.4697 1.46967L1.46967 12.4697L2 13Z"
                                                fill="white" />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 our-brands-col">
                    <div class="our-brands-slide">
                        <img src={ourBrandSliders} alt="our-brands-slider" />
                        <div class="brands-thubnail">
                            <img src={ourBrandThumbnail} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="brands-thubnail-wrap">
                <div class="row">
                    <div class="col-md-4 thubnail-wrap-col active">
                        <div class="thubnail-brands">
                            <img src={teraThumbnail} alt="" />
                        </div>
                    </div>
                    <div class="col-md-2 thubnail-wrap-col">
                        <div class="thubnail-brands">
                            <img src={kiddicareThumbnail} alt="" />
                        </div>
                    </div>
                    <div class="col-md-2 thubnail-wrap-col">
                        <div class="thubnail-brands">
                            <img src={betterLivingThumbnail} alt="" />
                        </div>
                    </div>
                    <div class="col-md-4 thubnail-wrap-col">
                        <div class="thubnail-brands">
                            <img src={miniStartsThumbnail} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default OurBrands;
