import React from 'react';
import benefitsUs from '../../assets/images/benefits-us.jpg';

const YourBenefitsWithUs = () => {
    return (
        <section className="bg-sky pt-80 customizable-nappy-listing product-sizing-sec">
            <div className="container">
                <div className="product-make-listing">
                    <div className="left-product-name pb-46">
                        <h2>Your Benefits with Us</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="pro-listing-img">
                                <img src={benefitsUs} alt="benefits offerd" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="leak-technology-right">
                                <div className="leak-technology-dls">
                                    <h4>Manufacturing Capabilities</h4>
                                    <p>
                                        Our state-of-the-art manufacturing capabilities make us one of the most innovative
                                        personal care manufacturers.
                                    </p>
                                </div>
                                <div className="leak-technology-dls">
                                    <h4>Professional and Experienced Team</h4>
                                    <p>
                                        Our expert team ensures that critical errors are avoided, saving you time, money,
                                        and protecting your product.
                                    </p>
                                </div>
                                <div className="leak-technology-dls">
                                    <h4>Regulatory & Quality Assurance</h4>
                                    <p>
                                        We have significant experience and can assist our customers in obtaining any kind of
                                        regulatory approval they require, such as FSC, GMP, Dangers good, FDA.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default YourBenefitsWithUs;
