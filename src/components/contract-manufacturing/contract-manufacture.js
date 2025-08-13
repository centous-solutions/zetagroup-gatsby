import React from 'react';
import contractManufacturing from '../../assets/images/conract-manufacuring.jpg';

const ContractManufacture = () => {
    return (
        <section className="pt-80 baby-nappy-sec">
            <div className="container">
                <div className="product-make-dls pb-46">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-product-name">
                                <h2>Contract Manufacturing</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="left-product-dls">
                                <p>
                                    We specialize in making high quality products on behalf of many brands distributed
                                    throughout the world.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="poster-img">
                <img src={contractManufacturing} alt="adult diaper" />
            </div>
        </section>
    )
};

export default ContractManufacture;
