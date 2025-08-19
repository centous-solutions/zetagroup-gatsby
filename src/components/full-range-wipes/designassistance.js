import React from 'react';

const DesignAssistance = ({ leftImgRightContent }) => {
    return (
        <section className="bg-sky-primary manu-parter-reverse design-assistance-sec">
            <div className="manu-parter-dls">
                <div className="manu-parter-dls-img">
                    <img src={leftImgRightContent?.image?.mode?.sourceUrl} alt={leftImgRightContent?.image?.mode?.altText || leftImgRightContent?.image?.mode?.title} />
                </div>
                <div className="container">
                    <div className="manu-parter-dls-txt">
                        <h2>{leftImgRightContent?.sectionTitle}</h2>
                        <div dangerouslySetInnerHTML={{ __html: leftImgRightContent?.description }} />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default DesignAssistance;
