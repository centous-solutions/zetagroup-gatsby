import React from 'react';
import chaeckIn from '../../assets/images/check-in.svg';
import odourControl from '../../assets/images/odour-control.svg';
import bloodBarrier from '../../assets/images/blood-barrie.svg';
import fitsUnderpants from '../../assets/images/fits-underpants.svg';

const UniqueAdvantages = () => {
    return (
        <section className="pt-80 pb-80 unique-advanage-sec">
            <div className="container">
                <div className="pb-46">
                    <h2>Unique Advantages</h2>
                </div>
                <div className="eco-friendly-listing">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 friendly-listing-wrap">
                            <div className="eco-friendly-spacing ">
                                <div className="eco-friendly-box">
                                    <img src={chaeckIn} alt="check in" />
                                    <div className="unique-list-box">
                                        <a href="#">Fast absorption</a>
                                        <p>
                                            Featuring advanced absorbent materials, our diapers quickly lock away moisture,
                                            keeping you dry and secure for up to 12 hours.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 friendly-listing-wrap">
                            <div className="eco-friendly-spacing">
                                <div className="eco-friendly-box">
                                    <img src={odourControl} alt="recyclable" />
                                    <div className="unique-list-box">
                                        <a href="#">Odour control</a>
                                        <p>
                                            The dual odor control system captures and neutralizes bad odors, ensuring
                                            lasting
                                            freshness and confidence.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-end">
                        <div className="col-lg-4 col-md-6 friendly-listing-wrap">
                            <div className="eco-friendly-spacing">
                                <div className="eco-friendly-box">
                                    <img src={bloodBarrier} alt="chemistry" />
                                    <div className="unique-list-box">
                                        <a href="#">Anti-leak barrier</a>
                                        <p>
                                            Feature an acquisition layer that quickly pulls fluid away from the skin and
                                            anti-leak barriers for discreet, garment-like protection.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 friendly-listing-wrap">
                            <div className="eco-friendly-spacing">
                                <div className="eco-friendly-box">
                                    <img src={fitsUnderpants} alt="sustainable energy" />
                                    <div className="unique-list-box">
                                        <a href="#">Fits like underwear</a>
                                        <p>Our adult diaper features adjustable tabs, strong elastic waistbands, and a soft,
                                            cloth-like material for skin comfort.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default UniqueAdvantages;
