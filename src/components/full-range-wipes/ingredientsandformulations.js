import React from 'react';

const IngredientsAndFormulations = ({ featureFormulaData }) => {
    return (
        <section className="bg-white-gradient pt-80 pb-80 ingredient-formulation-sec">
            <div className="container">
                <div className="text-center pb-80 ingredient-title">
                    <h2>{featureFormulaData?.sectionTitle}</h2>
                    <div dangerouslySetInnerHTML={{ __html: featureFormulaData?.description }} />
                </div>
                <div className="formula-img ">
                    <img src={featureFormulaData?.image?.mode?.sourceUrl} alt={featureFormulaData?.image?.mode?.altText || featureFormulaData?.image?.mode?.title} />
                </div>
            </div>
        </section>
    )
};

export default IngredientsAndFormulations;
