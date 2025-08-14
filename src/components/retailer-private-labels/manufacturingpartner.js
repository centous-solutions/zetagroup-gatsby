import React from 'react';
import manufacturePartner from '../../assets/images/manufacture-partner.jpg';

const ManufacturingPartner = () => {
    return (
        <section className="bg-sky-gradient pt-80 pb-80 customizable-nappy-listing product-sizing-sec">
            <div className="container">
                <div className="product-make-listing">
                    <div className="left-product-name pb-46">
                        <h2>Your Manufacturing Partner</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="pro-listing-img">
                                <img src={manufacturePartner} alt="benefits offerd" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="leak-technology-right">
                                <div className="leak-technology-dls">
                                    <h4>ELEVATE YOUR QUALITY</h4>
                                    <p>
                                        If your current manufacturer has hit a ceiling on quality, we can help you go
                                        further. From the world’s highest-grade wipes and nappies to cost-effective
                                        alternatives, our expertise enables you to enhance your product range without
                                        compromising on value.
                                    </p>
                                </div>
                                <div className="leak-technology-dls">
                                    <h4>RANGE EXPANSION</h4>
                                    <p>
                                        Expanding your product range is a powerful way to drive growth and increase basket
                                        size. With extensive NPD capabilities in wipes and nappies, we bring the expertise
                                        and creativity to help you develop and launch innovative new solutions to your
                                        ranges.
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

export default ManufacturingPartner;
