import React from 'react';

const Materials = ({ materialsData }) => {
    return (
        <section className="bg-sky pt-80 pb-80 material-sec">
            <div className="container">
                <div className="row pb-46">
                    <div className="col-md-6">
                        <div className="left-product-name">
                            <h2>{materialsData?.sectionTitle}</h2>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="left-product-dls">
                            <div dangerouslySetInnerHTML={{ __html: materialsData?.description }} />
                        </div>
                    </div>
                </div>
                <div className="material-sec-listing">
                    <div className="row">
                        {materialsData?.materials?.length ? materialsData?.materials?.map((materialsData, index) => (
                            <div className="col-lg-4 col-md-6" key={"materials-" + index}>
                                <div className="material-box">
                                    <div className="material-box-img">
                                        <img src={materialsData?.image?.node?.sourceUrl} alt={materialsData?.image?.node?.altText || materialsData?.image?.node?.title} />
                                    </div>
                                    <h5>{materialsData?.title}</h5>
                                    <div dangerouslySetInnerHTML={{ __html: materialsData?.description }} />
                                    {materialsData?.ctaButton ? (
                                        <a href={materialsData?.ctaButton?.url} className="btn btn-primary" target={materialsData?.ctaButton?.target}>
                                            {materialsData?.ctaButton?.title}
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
                        )) : null}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Materials;
