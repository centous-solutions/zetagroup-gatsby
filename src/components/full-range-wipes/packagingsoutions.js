import React from 'react';

const PackagingSoutions = ({ packagingData }) => {
    return (
        <section className="bg-white-gradient pt-80 pb-80 packaging-solution-sec">
            <div className="container">
                <div className="pb-46 packaging-sol-title">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="left-product-name">
                                <h2>{packagingData?.packagingData}</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="left-product-dls">
                                <div dangerouslySetInnerHTML={{ __html: packagingData?.description }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wipes-formula-listing">
                    <div className="row">
                        {packagingData?.cards?.length > 0 ? packagingData?.cards?.map((cardData, index) => (
                            <div className="col-lg-4 col-md-6 wipes-border" key={"cards-" + index}>
                                <div className="eco-friendly-spacing">
                                    <div className="eco-friendly-box">
                                        <h5>{cardData?.title}</h5>
                                        <div dangerouslySetInnerHTML={{ __html: cardData?.description }} />
                                        <img src={cardData?.image?.mode?.sourceUrl} alt={cardData?.image?.mode?.altText || cardData?.image?.mode?.title} />
                                    </div>
                                </div>
                            </div>
                        )) : null}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default PackagingSoutions;
