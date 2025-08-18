import React from 'react';

function chunkArray(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}

const EcoFriendlyCare = ({ ecoFriendlyCareData }) => {
    const keyPointGroups = chunkArray(ecoFriendlyCareData?.ecoFriendlyKeyPoints || [], 2);

    return (
        <section className="eco-friendly-sec pt-80 pb-80">
            <div className="container">
                <div className="eco-friendly-dls">
                    <h2 className="pb-46 text-center">{ecoFriendlyCareData?.sectionTitle}</h2>
                    <div className="row pb-46">
                        {ecoFriendlyCareData?.descriptions?.length > 0 ? ecoFriendlyCareData?.descriptions?.map((descriptionData, index) => (
                            <div className="col-md-6" key={"ecofriendly-desc-" + index}>
                                <div className="eco-friendly-para">
                                    <div dangerouslySetInnerHTML={{ __html: descriptionData?.description }} />
                                </div>
                            </div>
                        )) : null}
                    </div>
                    <div className="eco-friendly-listing">
                        {ecoFriendlyCareData?.ecoFriendlyKeyPoints?.length > 0 ? keyPointGroups?.map((group, groupIndex) => (
                            <div className={`row${groupIndex % 2 !== 0 ? " justify-content-end" : ""}`} key={"ecofriendly-group-" + groupIndex}>
                                {group?.length > 0 ? group?.map((keyPoint, index) => (
                                    <div className="col-lg-4 col-md-6 friendly-listing-wrap" key={"ecofriendly-keypoint-" + index}>
                                        <div className="eco-friendly-spacing">
                                            <div className="eco-friendly-box">
                                                <img src={keyPoint?.iconImage?.node?.sourceUrl} alt={keyPoint?.iconImage?.node?.altText || keyPoint?.iconImage?.node?.title} />
                                                <a href="#">{keyPoint?.keyPoint}</a>
                                            </div>
                                        </div>
                                    </div>
                                )) : null}
                            </div>
                        )) : null}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default EcoFriendlyCare;
