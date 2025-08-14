import React from 'react';

const WrappedHeaderBanner = ({ img, imgalt, title, description }) => {
    return (
        <section className="banner-slide-wrap">
            <div className="video-wrap">
                <img src={img} alt={imgalt} />
            </div>
            <div className="container">
                <div className="banner-slide-wrap">
                    {description ? (
                        <div className="row">
                            <div className="col-md-6">
                                <div className="banner-slide-left">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="banner-slide-right">
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <h1>{title}</h1>
                    )}
                </div>
            </div>
        </section>
    )
};

export default WrappedHeaderBanner;
