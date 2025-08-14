import React from 'react';
import customizableItem from '../../assets/images/customizable-items.png';

const CustomizableItems = () => {
    return (
        <section className="pb-80 ingredient-formulation-sec">
            <div className="container">
                <div className="text-center pb-80 ingredient-title">
                    <h2>Customizable items</h2>
                    <p>
                        The packing, logo, SAP weight per piece, magic stick, 3D leakage prevention, sensitive wetness
                        indicator, etc. All can be customized as your requirements.
                    </p>
                </div>
                <div className="formula-img ">
                    <img src={customizableItem} alt="customizable items" />
                </div>
            </div>
        </section>
    )
};

export default CustomizableItems;
