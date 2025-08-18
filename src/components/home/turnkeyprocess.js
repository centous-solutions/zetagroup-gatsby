import React from 'react';

const TurnkeyProcess = ({ turnkeyProcessData }) => {
    return (
        <section className="bg-sky-light pt-80 pb-80">
            <div className="container">
                <div className="our-turnkey-sec">
                    <h2 className="pb-46">{turnkeyProcessData?.heading}</h2>
                    <div className="row pb-46">
                        <div className="col-md-6">
                            <div className="our-turnkey-left">
                                <div dangerouslySetInnerHTML={{ __html: turnkeyProcessData?.description }} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="our-turnkey-right">
                                {turnkeyProcessData?.ctaButton ? (
                                    <a href={turnkeyProcessData?.ctaButton?.url} className="btn btn-primary" target={turnkeyProcessData?.ctaButton?.target}>
                                        {turnkeyProcessData?.ctaButton?.title}
                                        <span>
                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M13.75 2C13.75 1.58579 13.4142 1.25 13 1.25L6.25 1.25C5.83579 1.25 5.5 1.58579 5.5 2C5.5 2.41421 5.83579 2.75 6.25 2.75H12.25V8.75C12.25 9.16421 12.5858 9.5 13 9.5C13.4142 9.5 13.75 9.16421 13.75 8.75L13.75 2ZM2 13L2.53033 13.5303L13.5303 2.53033L13 2L12.4697 1.46967L1.46967 12.4697L2 13Z"
                                                    fill="white" />
                                            </svg>
                                        </span>
                                    </a>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div className="our-turnkey-listing">
                        <div className="row">
                            {turnkeyProcessData?.processSteps?.length ? turnkeyProcessData?.processSteps?.map((step, index) => (
                                <div className="col-lg-3 col-md-6 turnkey-box-wrap" key={"process-" + index}>
                                    <div className="our-turnkey-box">
                                        <div className="turnkey-box-img">
                                            <img src={step?.stepIcon?.node?.sourceUrl} alt={step?.stepIcon?.node?.altText || step?.stepIcon?.node?.title} />
                                        </div>
                                        <h5>{step?.stepName}</h5>
                                        <div dangerouslySetInnerHTML={{ __html: step?.stepDescription }} />
                                        <a href={step?.stepLink?.url} className="aerrow-nubreic" target={step?.stepLink?.target}>
                                            <svg width="42" height="20" viewBox="0 0 42 20" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M37.5789 8.46444H0V10.6348H38.021L30.5053 18.0141L32.0526 19.5333L42 9.76667L32.0526 0L30.5053 1.51926L37.5789 8.46444Z"
                                                    fill="#444444" />
                                            </svg>
                                            <span className="box-counter">{index + 1}</span>
                                        </a>
                                    </div>
                                </div>
                            )) : null}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default TurnkeyProcess;
