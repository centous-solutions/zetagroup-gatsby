import React from 'react';

const QuestionAnswer = () => {
    return (
        <section className="pt-80 pb-80 faq-sec">
            <div className="container">
                <div className="faq-sec-title pb-80">
                    <h1> FAQs</h1>
                    <p>Frequently Asked Questions.</p>
                    <p>Here are some common questions about ZETA GROUP</p>
                </div>
                <div className="faq-dls-wrap">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    What does ZETA Group specialize in?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    ZETA Group is a New Zealand-owned and operated manufacturer specializing in personal
                                    care and hygiene products, including nappies and wipes.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Where are ZETA Group's products manufactured?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    ZETA Group is a New Zealand-owned and operated manufacturer specializing in personal
                                    care and hygiene products, including nappies and wipes.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Are ZETA Group's products eco-friendly?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    ZETA Group is a New Zealand-owned and operated manufacturer specializing in personal
                                    care and hygiene products, including nappies and wipes.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Does ZETA Group offer OEM services?
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    ZETA Group is a New Zealand-owned and operated manufacturer specializing in personal
                                    care and hygiene products, including nappies and wipes.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    What sustainability practices does ZETA Group follow?
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    ZETA Group is a New Zealand-owned and operated manufacturer specializing in personal
                                    care and hygiene products, including nappies and wipes.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    Are ZETA Group's products available internationally?
                                </button>
                            </h2>
                            <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    ZETA Group is a New Zealand-owned and operated manufacturer specializing in personal
                                    care and hygiene products, including nappies and wipes.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default QuestionAnswer;
