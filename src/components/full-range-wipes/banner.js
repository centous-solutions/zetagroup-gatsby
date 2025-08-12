import React from 'react';
import banner from '../../assets/images/range-wipes-banner.jpg';

const Banner = () => {
    return (
        <section className="banner-slide-wrap">
            <div className="video-wrap">
                <img src={banner} alt="range wipes banner" />
            </div>
            <div className="container">
                <div className="banner-slide-wrap banner-slide-bg">
                    <div className="banner-slide-bg-wrap">
                        <h1>COMPREHENSIVE WIPE RANGE</h1>
                        <p>
                            Our diverse selection offers solutions for every market—from premium, biodegradable materials to
                            affordable, budget conscious options. With scent, cloth and ingredient variants limitless, we
                            are
                            actively pioneering new innovation to stay ahead of trends and sustainability requirements to
                            develop the future range for our partners.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    )
};

export default Banner;
