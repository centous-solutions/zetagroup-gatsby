import React from 'react';
import banner from '../../assets/images/baby-napy-pants.jpg';

const BabyNappiesPants = () => {
    return (
        <section className="pt-80 baby-nappy-sec">
            <div className="container">
                <div className="product-make-dls pb-46">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-product-name">
                                <h2>Baby Nappies and Pants</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="left-product-dls">
                                <p>
                                    From our award winning sustainable plant based nappies to budget friendly options, we
                                    have a solution for you. All nappies are free from harsh chemicals and are rigorously
                                    tested.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="poster-img">
                <img src={banner} alt="baby napy pants" />
            </div>
        </section>
    )
};

export default BabyNappiesPants;
