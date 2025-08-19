import React from 'react';

const WrappedHeaderBanner = ({ img, imgalt, title, description, videoLink, videoWithUrl, video, bgPatch = false }) => {
    return (
        <section className="banner-slide-wrap">
            <div className="video-wrap">
                {videoWithUrl ? (
                    <iframe
                        width="100%"
                        src={videoLink}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                ) : video ? (
                    <video width="100%" height="400" autoPlay loop muted>
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img src={img} alt={imgalt} />
                )}
            </div>
            <div className="container">
                <div className={`banner-slide-wrap${bgPatch ? " banner-slide-bg" : ""}`}>
                    {bgPatch ? (
                        <div className="banner-slide-bg-wrap">
                            <h1>{title}</h1>
                            <div dangerouslySetInnerHTML={{ __html: description }} />
                        </div>
                    ) : description ? (
                        <div className="row">
                            <div className="col-md-6">
                                <div className="banner-slide-left">
                                    <div dangerouslySetInnerHTML={{ __html: title }} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="banner-slide-right">
                                    <div dangerouslySetInnerHTML={{ __html: description }} />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div dangerouslySetInnerHTML={{ __html: title }} />
                    )}
                </div>
            </div>
        </section>
    )
};

export default WrappedHeaderBanner;
