import React from 'react';
import banner from '../../assets/images/baby-napy-pants.jpg';

const BabyNappiesPants = () => {
    return (
        <section class="pt-80 baby-nappy-sec">
            <div class="container">
                <div class="product-make-dls pb-46">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="left-product-name">
                                <h2>Baby Nappies and Pants</h2>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="left-product-dls">
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
            <div class="poster-img">
                <img src={banner} alt="baby napy pants" />
            </div>
        </section>
    )
};

export default BabyNappiesPants;
