import React from 'react';

const DifferentHeaderBanner = ({ image, title, description }) => {
    return (
        <section className="pt-80 baby-nappy-sec">
            <div className="container">
                <div className="product-make-dls pb-46">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-product-name">
                                <h2>{title}</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="left-product-dls">
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="poster-img">
                <img src={image} alt="baby napy pants" />
            </div>
        </section>
    )
};

export default DifferentHeaderBanner;
