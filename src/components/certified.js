import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Certified = ({ brandSliderData }) => {
    return (
        <section className="pt-80 pb-80 certified-sec">
            <div className="container">
                <div className="certified-title pb-80 text-center">
                    <h2 className="pb-46">{brandSliderData?.sectionTitle}</h2>
                    <div dangerouslySetInnerHTML={{ __html: brandSliderData?.description }} />
                </div>
            </div>
            <div className="slider-container">
                {brandSliderData?.logos?.length > 0 ? (
                    <Slider
                        dots={true}
                        infinite={true}
                        speed={500}
                        slidesToShow={5}
                        slidesToScroll={1}
                        arrows={false}
                    >
                        {brandSliderData?.logos?.map((logoData, index) => (
                            <div className="certified-box" key={"logos-" + index}>
                                <img src={logoData?.sourceUrl} alt={logoData?.altText || logoData?.title} />
                            </div>
                        ))}
                    </Slider>
                ) : null}
            </div>
        </section>
    )
};

export default Certified;
