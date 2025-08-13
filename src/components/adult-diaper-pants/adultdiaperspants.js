import React from 'react';
import adultDiaper from '../../assets/images/adult-diaper.jpg';

const AdultDiapersPants = () => {
    return (
        <section className="pt-80 baby-nappy-sec">
            <div className="container">
                <div className="product-make-dls pb-46">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-product-name">
                                <h2>Adult Diapers and Pants</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="left-product-dls">
                                <p>
                                    Our adult diaper pants are made with high quality materials to ensure maximum comfort
                                    and superior absorbency. We offer several tiers of diaper pants at various price options
                                    to meet the needs of diverse retail channels.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="poster-img">
                <img src={adultDiaper} alt="adult diaper" />
            </div>
        </section>
    )
};

export default AdultDiapersPants;
