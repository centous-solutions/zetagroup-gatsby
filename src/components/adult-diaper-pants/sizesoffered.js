import React from 'react';
import sizeOffered from '../../assets/images/size-offerd.jpg';

const SizesOffered = () => {
    return (
        <section className="bg-sky pt-80 pb-80 customizable-nappy-listing product-sizing-sec">
            <div className="container">
                <div className="product-make-listing">
                    <div className="row pb-46">
                        <div className="col-md-6">
                            <div className="left-product-name">
                                <h2>Sizes Offered</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="left-product-dls">
                                <p>
                                    Our adult diaper pants are designed to be unisex, providing a comfortable fit for
                                    everyone.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row pb-46">
                        <div className="col-md-6">
                            <div className="pro-listing-img">
                                <img src={sizeOffered} alt="size offerd" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="leak-technology-right">
                                <div className="leak-technology-dls">
                                    <h4>Medium</h4>
                                    <p>
                                        Designed to fit a waist size of 590 mm, with a length of 760 mm and an absorbency of
                                        800 ml, providing a snug and secure fit. </p>
                                </div>
                                <div className="leak-technology-dls">
                                    <h4>Large</h4>
                                    <p>
                                        Accommodates a waist size of 710 mm, with a length of 800 mm and an absorbency of
                                        1000 ml, offering ample coverage.
                                    </p>
                                </div>
                                <div className="leak-technology-dls">
                                    <h4>XLarge</h4>
                                    <p>
                                        Fits a waist size of 850 mm, with a length of 880 mm and an absorbency of 1200 ml.
                                    </p>
                                </div>
                                <div className="leak-technology-dls">
                                    <h4>Customize size</h4>
                                    <p>
                                        The waist size, length, and absorbency can be customized to meet your specific
                                        requirements! </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default SizesOffered;
