import React from 'react';
import productCreative from '../../assets/images/product-creative.svg';
import researchDevelopment from '../../assets/images/research-development.svg';
import designWork from '../../assets/images/design-wrok.svg';
import contractManufacturing from '../../assets/images/contract-manufactring.svg';
import logisticsServices from '../../assets/images/logistics-services.svg';
import launchStrategies from '../../assets/images/launch-strategies.svg';
import digitalServices from '../../assets/images/digital-services.svg';
import accountManagement from '../../assets/images/account-management.svg';

const TurnkeyProcess = () => {
    return (
        <section className="bg-sky-light pt-80 pb-80">
            <div className="container">
                <div className="our-turnkey-sec">
                    <h2 className="pb-46">Our Turnkey Process</h2>
                    <div className="row pb-46">
                        <div className="col-md-6">
                            <div className="our-turnkey-left">
                                <p>We offer a comprehensive process from initial idea to final product. There's no need to
                                    engage and manage multiple parties.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="our-turnkey-right">
                                <a href="#" className="btn btn-primary">FIND OUT MORE
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
                    <div className="our-turnkey-listing">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 turnkey-box-wrap">
                                <div className="our-turnkey-box">
                                    <div className="turnkey-box-img">
                                        <img src={productCreative} alt="product creative" />
                                    </div>
                                    <h5>Product creative</h5>
                                    <p>We kickstart our process by crafting a compelling product concept and design that
                                        aligns with your vision and fulfills the goals of your business, while addressing
                                        the needs of the market.
                                    </p>
                                    <div className="aerrow-nubreic">
                                        <svg width="42" height="20" viewBox="0 0 42 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M37.5789 8.46444H0V10.6348H38.021L30.5053 18.0141L32.0526 19.5333L42 9.76667L32.0526 0L30.5053 1.51926L37.5789 8.46444Z"
                                                fill="#444444" />
                                        </svg>
                                        <span className="box-counter">1</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 turnkey-box-wrap">
                                <div className="our-turnkey-box">
                                    <div className="turnkey-box-img">
                                        <img src={researchDevelopment} alt="research-development" />
                                    </div>
                                    <h5>RESEARCH & DEVELOPMENT</h5>
                                    <p>
                                        We conduct comprehensive scientific research to develop and improve our products,
                                        ensuring they meet high standards of quality.
                                    </p>
                                    <div className="aerrow-nubreic">
                                        <svg width="42" height="20" viewBox="0 0 42 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M37.5789 8.46444H0V10.6348H38.021L30.5053 18.0141L32.0526 19.5333L42 9.76667L32.0526 0L30.5053 1.51926L37.5789 8.46444Z"
                                                fill="#444444" />
                                        </svg>
                                        <span className="box-counter">2</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 turnkey-box-wrap">
                                <div className="our-turnkey-box">
                                    <div className="turnkey-box-img">
                                        <img src={designWork} alt="design wrok" />
                                    </div>
                                    <h5>DESIGN WORK</h5>
                                    <p>
                                        Our experienced and adept design team knows all the technical requirements for
                                        products and packaging.
                                    </p>
                                    <div className="aerrow-nubreic">
                                        <svg width="42" height="20" viewBox="0 0 42 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M37.5789 8.46444H0V10.6348H38.021L30.5053 18.0141L32.0526 19.5333L42 9.76667L32.0526 0L30.5053 1.51926L37.5789 8.46444Z"
                                                fill="#444444" />
                                        </svg>
                                        <span className="box-counter">3</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 turnkey-box-wrap">
                                <div className="our-turnkey-box">
                                    <div className="turnkey-box-img">
                                        <img src={contractManufacturing} alt="contract manufactring" />
                                    </div>
                                    <h5>CONTRACT MANUFACTURING</h5>
                                    <p>
                                        We are using the most advanced and specialized equipment available in the world. Our
                                        quality control measures are the most stringent in the industry.
                                    </p>
                                    <div className="aerrow-nubreic">
                                        <svg width="42" height="20" viewBox="0 0 42 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M37.5789 8.46444H0V10.6348H38.021L30.5053 18.0141L32.0526 19.5333L42 9.76667L32.0526 0L30.5053 1.51926L37.5789 8.46444Z"
                                                fill="#444444" />
                                        </svg>
                                        <span className="box-counter">4</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 turnkey-box-wrap">
                                <div className="our-turnkey-box">
                                    <div className="turnkey-box-img">
                                        <img src={logisticsServices} alt="logistics services" />
                                    </div>
                                    <h5>LOGISTICS SERVICES</h5>
                                    <p>
                                        We manage the logistics of international transport from our factory to your
                                        warehouse, ensuring timely and reliable deliveries.
                                    </p>
                                    <div className="aerrow-nubreic">
                                        <svg width="42" height="20" viewBox="0 0 42 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M37.5789 8.46444H0V10.6348H38.021L30.5053 18.0141L32.0526 19.5333L42 9.76667L32.0526 0L30.5053 1.51926L37.5789 8.46444Z"
                                                fill="#444444" />
                                        </svg>
                                        <span className="box-counter">5</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 turnkey-box-wrap">
                                <div className="our-turnkey-box">
                                    <div className="turnkey-box-img">
                                        <img src={launchStrategies} alt="aunch strategies" />
                                    </div>
                                    <h5>LAUNCH STRATEGIES</h5>
                                    <p>
                                        Through careful planning and execution, we help guarantee a seamless and successful
                                        launch, maximizing impact and setting the stage for long-term success in the market.
                                    </p>
                                    <div className="aerrow-nubreic">
                                        <svg width="42" height="20" viewBox="0 0 42 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M37.5789 8.46444H0V10.6348H38.021L30.5053 18.0141L32.0526 19.5333L42 9.76667L32.0526 0L30.5053 1.51926L37.5789 8.46444Z"
                                                fill="#444444" />
                                        </svg>
                                        <span className="box-counter">6</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 turnkey-box-wrap">
                                <div className="our-turnkey-box">
                                    <div className="turnkey-box-img">
                                        <img src={digitalServices} alt="digital services" />
                                    </div>
                                    <h5>DIGITAL MARKETING SERVICES</h5>
                                    <p>
                                        We leverage cutting-edge digital tools and analytics, we ensure maximum engagement
                                        and visibility for your brand in the ever-evolving e-commerce landscape.
                                    </p>
                                    <div className="aerrow-nubreic">
                                        <svg width="42" height="20" viewBox="0 0 42 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M37.5789 8.46444H0V10.6348H38.021L30.5053 18.0141L32.0526 19.5333L42 9.76667L32.0526 0L30.5053 1.51926L37.5789 8.46444Z"
                                                fill="#444444" />
                                        </svg>
                                        <span className="box-counter">7</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 turnkey-box-wrap">
                                <div className="our-turnkey-box">
                                    <div className="turnkey-box-img">
                                        <img src={accountManagement} alt="account management" />
                                    </div>
                                    <h5>ACCOUNT MANAGEMENT</h5>
                                    <p>
                                        We will be available to provide continuous service and support on an ongoing basis
                                        regardless of whether or not we are working on an active order.
                                    </p>
                                    <div className="aerrow-nubreic">
                                        <svg width="42" height="20" viewBox="0 0 42 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M37.5789 8.46444H0V10.6348H38.021L30.5053 18.0141L32.0526 19.5333L42 9.76667L32.0526 0L30.5053 1.51926L37.5789 8.46444Z"
                                                fill="#444444" />
                                        </svg>
                                        <span className="box-counter">8</span>
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

export default TurnkeyProcess;
