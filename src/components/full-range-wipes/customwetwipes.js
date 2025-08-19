import React from 'react';

const CustomWetWipes = ({ customWipesData }) => {
    return (
        <section className="bg-sky-light custom-wet-wipes">
            <div className="container">
                <div className="pt-80 custom-wipes-sec">
                    <div className="custom-wipes-wrap pt-80 pb-80">
                        <div className="row pb-46">
                            <div className="col-md-6">
                                <div className="left-product-name">
                                    <h2>{customWipesData?.sectionTitle}</h2>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="left-product-dls">
                                    <div dangerouslySetInnerHTML={{ __html: customWipesData?.description }} />
                                </div>
                            </div>
                        </div>
                        <div className="wipes-formula-listing">
                            <div className="row">
                                {customWipesData?.keyPoint?.length > 0 ? customWipesData?.keyPoint?.map((keyData, index) => (
                                    <div className="col-lg-4 col-md-6 friendly-listing-wrap" key={"wipes-" + index}>
                                        <div className="eco-friendly-spacing">
                                            <div className="eco-friendly-box">
                                                <div className="wipes-title">
                                                    <h5><span>{index + 1}</span>{keyData?.title}</h5>
                                                    <img src={keyData?.iconSvg?.node?.sourceUrl} alt={keyData?.iconSvg?.node?.altText || keyData?.iconSvg?.node?.title} />
                                                </div>
                                                <div dangerouslySetInnerHTML={{ __html: keyData?.description }} />
                                            </div>
                                        </div>
                                    </div>
                                )) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default CustomWetWipes;
