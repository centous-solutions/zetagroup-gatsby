import React from 'react';
import privateLabel from '../../assets/images/private-label.jpg';

const PrivateLabel = () => {
    return (
        <section className="pt-80 baby-nappy-sec">
            <div className="container">
                <div className="product-make-dls pb-46">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-product-name">
                                <h2>PRIVATE LABEL</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="left-product-dls">
                                <p>
                                    Since 2016 we have serviced over 176 clients at every stage of product development and
                                    launch, helping them achieve their commercial goals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="poster-img">
                <img src={privateLabel} alt="private lebel" />
            </div>
        </section>
    )
};

export default PrivateLabel;
