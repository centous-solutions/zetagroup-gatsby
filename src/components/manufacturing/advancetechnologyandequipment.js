import React from 'react';
import bioEnergy from '../../assets/images/bio-energy.svg';
import automation from '../../assets/images/automation.svg';
import artificialIntelligence from '../../assets/images/artificial-intelligence-07.svg';

const AdvanceTechnologyAndEquipment = () => {
    return (
        <section className="bg-sky-gradient pt-80 pb-80 advanced-technologics">
            <div className="container">
                <div className="contract-project">
                    <div className="technologics-">
                        <div className="row pb-46">
                            <div className="col-md-8">
                                <div className="drives-success-left">
                                    <h2>Advanced Technologies and Equipment</h2>
                                    <p>
                                        Our commitment to innovation and quality drives us to utilize the most advanced
                                        technologies and state-of-the-art equipment in our production processes.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="drives-success-right">
                                    <a href="#" className="btn btn-primary">Start Partnering Now
                                        <span>
                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M13.75 2C13.75 1.58579 13.4142 1.25 13 1.25L6.25 1.25C5.83579 1.25 5.5 1.58579 5.5 2C5.5 2.41421 5.83579 2.75 6.25 2.75H12.25V8.75C12.25 9.16421 12.5858 9.5 13 9.5C13.4142 9.5 13.75 9.16421 13.75 8.75L13.75 2ZM2 13L2.53033 13.5303L13.5303 2.53033L13 2L12.4697 1.46967L1.46967 12.4697L2 13Z"
                                                    fill="white"></path>
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="eco-friendly-listing">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 friendly-listing-wrap">
                                <div className="eco-friendly-spacing ">
                                    <div className="eco-friendly-box">
                                        <img src={bioEnergy} alt="bio energy" />
                                        <div className="unique-list-box">
                                            <a href="#">SUSTAINABLE PRACTICES</a>
                                            <p>
                                                We are committed to sustainability by using natural materials and practices
                                                that have the least impact on the environment. Our efforts support
                                                commercial composting systems and waste-to-energy initiatives, contributing
                                                to a greener future.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 friendly-listing-wrap">
                                <div className="eco-friendly-spacing">
                                    <div className="eco-friendly-box">
                                        <img src={automation} alt="automation" />
                                        <div className="unique-list-box">
                                            <a href="#">Automation and Precision</a>
                                            <p>
                                                Our production line features advanced technology, including robots for
                                                precise picking, placing, and palletizing. This minimizes human
                                                intervention, reduces contamination risk, and ensures consistent product
                                                quality and hygiene.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 friendly-listing-wrap">
                                <div className="eco-friendly-spacing">
                                    <div className="eco-friendly-box">
                                        <img src={artificialIntelligence} alt="artificial" />
                                        <div className="unique-list-box">
                                            <a href="#">Integrated Processes</a>
                                            <p>
                                                Our processes utilize automatic dosing of additives to maintain accuracy and
                                                quality. Advanced detection systems identify and reject any foreign objects
                                                or metal, ensuring that only the highest quality products reach our
                                                customers.
                                            </p>
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

export default AdvanceTechnologyAndEquipment;
