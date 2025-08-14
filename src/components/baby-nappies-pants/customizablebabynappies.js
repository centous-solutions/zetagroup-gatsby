import React from 'react';
import customNappies from '../../assets/images/customizable-nappies.png';

const CustomizableBabyNappies = () => {
    return (
        <section className="pb-80 ingredient-formulation-sec">
            <div className="container">
                <div className="text-center pb-80 ingredient-title">
                    <h2>Customizable Baby Nappies</h2>
                    <p>
                        Bring your ideas to life with our comprehensive OEM solutions with limitless customization options.
                        From top and back sheet materials, printing and designs to super absorbent polymers, you have the
                        ability to tailor specifications for your market.   
                    </p>
                </div>
                <div className="formula-img">
                    <img src={customNappies} alt="customizable nappies" />
                </div>
            </div>
        </section>
    )
};

export default CustomizableBabyNappies;
