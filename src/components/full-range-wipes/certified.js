import React from 'react';
import slide1 from '../../assets/images/certificate-slide-1.png';
import slide2 from '../../assets/images/certificate-slide-2.png';
import slide3 from '../../assets/images/certificate-slide-3.png';
import slide4 from '../../assets/images/certificate-slide-4.png';
import slide5 from '../../assets/images/certificate-slide-5.png';
import slide6 from '../../assets/images/certificate-slide-6.png';
import slide7 from '../../assets/images/certificate-slide-7.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Certified = () => {
    return (
        <section class="pt-80 pb-80 certified-sec">
            <div class="container">
                <div class="certified-title pb-80 text-center">
                    <h2 class="pb-46">Certified and Tested by Leading Organisations</h2>
                    <p>Our raw materials and products are tested or certified by the following organisations</p>
                </div>
            </div>
            <div class="slider-container">
                <Slider
                    dots={true}
                    infinite={true}
                    speed={500}
                    slidesToShow={5}
                    slidesToScroll={1}
                >
                    <div class="certified-box">
                        <img src={slide1} alt="certified-1" />
                    </div>
                    <div class="certified-box">
                        <img src={slide2} alt="certified-2" />
                    </div>
                    <div class="certified-box">
                        <img src={slide3} alt="certified-3" />
                    </div>
                    <div class="certified-box">
                        <img src={slide4} alt="certified-4" />
                    </div>
                    <div class="certified-box">
                        <img src={slide5} alt="certified-5" />
                    </div>
                    <div class="certified-box">
                        <img src={slide6} alt="certified-6" />
                    </div>
                    <div class="certified-box">
                        <img src={slide7} alt="certified-7" />
                    </div>
                </Slider>
            </div>
        </section>
    )
};

export default Certified;
