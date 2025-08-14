import React from 'react';
import featureImg from '../../assets/images/features-img.jpg';

const AddOnFeatures = () => {
    return (
        <section className="pt-80 pb-80 add-on-features-sec">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="on-features-sec-left">
                            <h2>Add-on Features</h2>
                            <p className="offer-txt">
                                We offer natural ingredients like manuka honey, essential oils and other enhancements for
                                skin health.
                            </p>
                            <p>
                                Over the years, serving many different types of customers including premium brands as well
                                as retailers’ private label programs, we’ve helped develop innovative additional features to
                                enhance the performance of the nappies we make. We are constantly pushing the boundaries in
                                order to give our customers a competitive edge.
                            </p>
                            <a href="#" className="btn btn-primary">Contact us
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
                    <div className="col-md-6">
                        <div className="on-features-sec-right">
                            <img src={featureImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default AddOnFeatures;
