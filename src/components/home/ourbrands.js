import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurBrands = ({ brandData }) => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: function(i) {
            return (
                <div className="thubnail-brands">
                    <img
                        src={brandData?.imageSlider?.[i]?.brandLogo?.node?.sourceUrl}
                        alt={brandData?.imageSlider?.[i]?.brandLogo?.node?.altText || brandData?.imageSlider?.[i]?.brandLogo?.node?.title}
                    />
                </div>
            );
        },
        dotsClass: "brands-thubnail-wrap",
        arrows: false,
        fade: true
    };

    return (
        <section className="bg-dark-sky our-brands-sec">
            <Slider {...sliderSettings}>
                {brandData?.imageSlider?.map((slide, idx) => (
                    <div key={"ourbrand-slide-" + idx}>
                        <div className='row'>
                            <div className="col-lg-4 our-brands-col">
                                <div className="our-brands-dls">
                                    <div className="container">
                                        <div className="our-brands-left">
                                            <h2>{brandData?.sectionTitle}</h2>
                                            <div dangerouslySetInnerHTML={{ __html: brandData?.description }} />
                                            <a href="#" className="btn btn-primary">Become Our Distributor
                                                <span>
                                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M13.75 2C13.75 1.58579 13.4142 1.25 13 1.25L6.25 1.25C5.83579 1.25 5.5 1.58579 5.5 2C5.5 2.41421 5.83579 2.75 6.25 2.75H12.25V8.75C12.25 9.16421 12.5858 9.5 13 9.5C13.4142 9.5 13.75 9.16421 13.75 8.75L13.75 2ZM2 13L2.53033 13.5303L13.5303 2.53033L13 2L12.4697 1.46967L1.46967 12.4697L2 13Z"
                                                            fill="white" />
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 our-brands-col">
                                <div className="our-brands-slide">
                                    <img src={slide?.image?.node?.sourceUrl} alt={slide?.image?.node?.altText || slide?.image?.node?.title} />
                                    <div className="brands-thubnail">
                                        <img src={slide?.brandLogo?.node?.sourceUrl} alt={slide?.brandLogo?.node?.altText || slide?.brandLogo?.node?.title} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    )
};

export default OurBrands;
