import React from 'react';
import babyWipesSolutions from '../../assets/images/baby-wipes-solutions.jpg';
import personalCareWipes from '../../assets/images/Personal-care-wipes.jpg';
import cleaningWipes from '../../assets/images/Cleaning-Wipes.jpg';
import petWipes from '../../assets/images/Pet-wipes.jpg';

const OurWipesSolutions = () => {
    return (
        <section class="bg-dark-sky pt-80 wipes-solution-sec">
            <div class="container">
                <div class="row pb-46">
                    <div class="col-md-6">
                        <div class="left-product-name">
                            <h2>OUR WIPES SOLUTIONS</h2>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="left-product-dls">
                            <p>
                                Our wipes are designed to provide the utmost convenience and care for various needs.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="product-make-listing">
                    <div class="row pb-46">
                        <div class="col-md-6">
                            <div class="pro-listing-img">
                                <img src={babyWipesSolutions} alt="baby-wipes-solutions" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="pro-listing-dls">
                                <h3>Baby wipes</h3>
                                <p>
                                    We are proud to produce a wide variety of the worlds finest, award winning baby wipes.
                                    Using purified New Zealand water, we are able to provide safe and gentle wipes variants
                                    for our littlest customers.
                                </p>
                                <ul>
                                    <li>All-Purpose Baby Wipes</li>
                                    <li>Sensitive Skin Baby Wipes</li>
                                    <li>Diaper Changing Wipes</li>
                                    <li>Eye wipes</li>
                                    <li>AND MORE...</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row flex-row-reverse pb-46">
                        <div class="col-md-6">
                            <div class="pro-listing-img">
                                <img src={personalCareWipes} alt="nappy pants" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="pro-listing-dls">
                                <h3>Personal care wipes</h3>
                                <p>We’ve designed an extensive range of wipes for personal hygiene made with customisable
                                    ingredients that cleanse and moisturise the entire body. Our Chemists can help you
                                    develop a unique formula that gives you an competitive advantage.</p>
                                <ul>
                                    <li>FACIAL Wipes</li>
                                    <li>Deodorant Body Wipes</li>
                                    <li>Antibacterial Hand Wipes</li>
                                    <li>Intimate Wipes</li>
                                    <li>AND MORE...</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row pb-46">
                        <div class="col-md-6">
                            <div class="pro-listing-img">
                                <img src={cleaningWipes} alt="Cleaning Wipes" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="pro-listing-dls">
                                <h3>Cleaning Wipes</h3>
                                <p>
                                    We can offer effective solutions for cleaning kitchen, appliances, bathroom fixtures and
                                    other areas of homes. Our wipes are designed to remove dirt, dust, and grime with ease,
                                    in both scented and unscented options.
                                </p>
                                <ul>
                                    <li>All-Purpose Surface Cleaning Wipes</li>
                                    <li>Bathroom Wipes</li>
                                    <li>Fitness Equipment Wipes</li>
                                    <li>Car Wipes</li>
                                    <li>AND MORE...</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row flex-row-reverse">
                        <div class="col-md-6">
                            <div class="pro-listing-img">
                                <img src={petWipes} alt="Cleaning Wipes" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="pro-listing-dls">
                                <h3>Pet wipes</h3>
                                <p>
                                    Specifically formulated for pet grooming and cleaning, our pet wipes help maintain
                                    hygiene for pets between baths. They are gentle on sensitive areas such as eyes, ears
                                    and paws, and can help reduce pet odors and dander.
                                </p>
                                <ul>
                                    <li>Paw & Fur Wipes</li>
                                    <li>Eye Wipes</li>
                                    <li>Ear Cleaning Wipes</li>
                                    <li>AND MORE...</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default OurWipesSolutions;
