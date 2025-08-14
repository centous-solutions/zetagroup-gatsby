import React from 'react';
import partnership from '../../assets/images/partnership.svg';
import innovation from '../../assets/images/innovation.svg';
import conversation from '../../assets/images/conversation.svg';
import sustainability from '../../assets/images/sustainability.svg';

const BusinessPrinciples = () => {
    return (
        <section className="pt-80 pb-80 unique-advanage-sec">
            <div className="container">
                <div className="pb-46">
                    <h2>Business Principles</h2>
                </div>
                <div className="eco-friendly-listing">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 friendly-listing-wrap">
                            <div className="eco-friendly-spacing ">
                                <div className="eco-friendly-box">
                                    <img src={partnership} alt="check in" />
                                    <div className="unique-list-box">
                                        <a href="#">Partnership</a>
                                        <p>
                                            We build long-term relationships with our clients, guiding them through every
                                            stage of product development.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 friendly-listing-wrap">
                            <div className="eco-friendly-spacing">
                                <div className="eco-friendly-box">
                                    <img src={innovation} alt="recyclable" />
                                    <div className="unique-list-box">
                                        <a href="#">Innovation</a>
                                        <p>
                                            Since its inception, Zeta Group has led the way with forward-thinking solutions,
                                            redefining long-standing norms in the personal care industry.
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
                                    <img src={conversation} alt="chemistry" />
                                    <div className="unique-list-box">
                                        <a href="#">Service</a>
                                        <p>
                                            Our Auckland-based team embodies New Zealand’s tradition of
                                            excellence—delivering prompt, professional, and reliable support with every
                                            interaction.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 friendly-listing-wrap">
                            <div className="eco-friendly-spacing">
                                <div className="eco-friendly-box">
                                    <img src={sustainability} alt="sustainable energy" />
                                    <div className="unique-list-box">
                                        <a href="#">Sustainability</a>
                                        <p>
                                            We create personal care products that exemplify quality, sustainability, and
                                            environmental responsibility.
                                        </p>
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

export default BusinessPrinciples;
