import React from 'react';
import wipes1 from '../../assets/images/wipes-1.jpg';
import nappies1 from '../../assets/images/nappies-1.jpg';

const ProductWeMake = () => {
    return (
        <section class="product-make-wrap bg-sky pt-80">
            <div class="container">
                <div class="product-make-dls pb-46">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="left-product-name">
                                <h2>Products we make</h2>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="left-product-dls">
                                <p>We are helping businesses worldwide create better performing, greener alternatives to
                                    conventional products.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product-make-listing">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="pro-listing-img">
                                <img src={wipes1} alt="we-make-wipes" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="pro-listing-dls">
                                <h3>Wipes</h3>
                                <p>With a wide variety of substrates, formulations, and packaging options, our wipes are
                                    designed to meet the diverse needs of multiple market segments. From personal care and
                                    household use to specialized pet care, we provide fully customizable solutions, allowing
                                    you to create products tailored to your target audience and business objectives.</p>
                                <ul>
                                    <li>Baby wipes </li>
                                    <li>Cleaning Wipes</li>
                                    <li>Personal care wipes</li>
                                    <li>Pet care wipes</li>
                                </ul>
                                <a href="#" class="btn btn-primary">FIND OUT MORE
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
                    <div class="row flex-row-reverse">
                        <div class="col-md-6">
                            <div class="pro-listing-img">
                                <img src={nappies1} alt="nappy pants" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="pro-listing-dls">
                                <h3>Nappies & Nappy pants</h3>
                                <p>We have the ability to manufacture a broad range of nappies, from conventional,
                                    affordable options to mid-range, as well as premium nappies made with the highest level
                                    of eco-friendly materials on the market today.</p>
                                <p>Our adult diaper pants provide superior comfort and performance, offering a better
                                    solution for a growing global need.</p>
                                <ul>
                                    <li>Baby Nappies & Nappy pants</li>
                                    <li>Adult Diapers & Diaper pants</li>
                                </ul>
                                <a href="#" class="btn btn-primary">FIND OUT MORE
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
            </div>
        </section>
    )
};

export default ProductWeMake;
