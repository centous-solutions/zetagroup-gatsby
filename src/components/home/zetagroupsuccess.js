import React from 'react'

const ZetaGroupSuccess = ({ zetaGrpSuccessData }) => {
    return (
        <section className="drives-success-sec pt-80 pb-80">
            <div className="container">
                <div className="drives-success-title pb-46">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="drives-success-left">
                                <h2>{zetaGrpSuccessData?.sectionTitle}</h2>
                                <div dangerouslySetInnerHTML={{ __html: zetaGrpSuccessData?.description }} />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="drives-success-right">
                                {zetaGrpSuccessData?.ctaButton ? (
                                    <a href={zetaGrpSuccessData?.ctaButton?.url} className="btn btn-primary" target={zetaGrpSuccessData?.ctaButton?.target}>
                                        {zetaGrpSuccessData?.ctaButton?.title}
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
                </div>
                <div className="drives-counter">
                    <div className="row">
                        {zetaGrpSuccessData?.statistics?.length > 0 ? zetaGrpSuccessData?.statistics?.map((statData, index) => (
                            <div className="col-md-3" key={"statistics-" + index}>
                                <div className="counter-wrap">
                                    <h2>{statData?.statisticsNumber}<span>{statData?.statisticsPostfix}</span></h2>
                                    <p>{statData?.statisticsLabel}</p>
                                </div>
                            </div>
                        )) : null}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ZetaGroupSuccess;
