import React from 'react';
import formullaPlan from '../../assets/images/formulla-plan.png';

const IngredientsAndFormulations = () => {
    return (
        <section class="bg-white-gradient pt-80 pb-80 ingredient-formulation-sec">
            <div class="container">
                <div class="text-center pb-80 ingredient-title">
                    <h2>Ingredients & Formulations</h2>
                    <p>We offer tested and proven formulations for the wipes we manufacture. Each formula is rigorously
                        tested by laboratories and agencies to ensure safety and effectiveness. We are widely recognized for
                        our innovative use of the world’s finest natural, sustainable, and eco-friendly ingredients.</p>
                </div>
                <div class="formula-img ">
                    <img src={formullaPlan} alt="formulla plan" />
                </div>
            </div>
        </section>
    )
};

export default IngredientsAndFormulations;
