import React from 'react';
import bannerGIF from '../../assets/images/zeta-group-slider.gif';

const Banner = () => {
    return (
        <section class="banner-slide-wrap">
            <div class="video-wrap">
                <img src={bannerGIF} alt="" />
            </div>
            <div class="container">
                <div class="banner-slide-wrap">
                    <h1>We specialize in crafting innovative personal care products with a full-service approach.</h1>
                </div>
            </div>
        </section>
    )
};

export default Banner;
