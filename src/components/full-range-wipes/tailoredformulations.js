import React from 'react';
import tailoredFormulations from '../../assets/images/tailored-frmulations.jpg';

const TailoredFormulations = () => {
    return (
        <section className="tailored-frmulations-sec pt-46 pb-46">
            <div className="manu-parter-dls">
                <div className="container">
                    <div className="manu-parter-dls-txt">
                        <h2>TAILORED FORMULATIONS TO MEET YOUR SPECIFIC NEEDS</h2>
                        <p>
                            Our experienced in-house chemists specialize in developing customized formulations to
                            meet
                            unique market requirements. With deep industry expertise, our team delivers expert
                            guidance
                            and innovative solutions designed to give you a competitive edge.
                        </p>
                        <a href="#" className="btn btn-primary">Start your wipes project now
                            <span>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.75 2C13.75 1.58579 13.4142 1.25 13 1.25L6.25 1.25C5.83579 1.25 5.5 1.58579 5.5 2C5.5 2.41421 5.83579 2.75 6.25 2.75H12.25V8.75C12.25 9.16421 12.5858 9.5 13 9.5C13.4142 9.5 13.75 9.16421 13.75 8.75L13.75 2ZM2 13L2.53033 13.5303L13.5303 2.53033L13 2L12.4697 1.46967L1.46967 12.4697L2 13Z"
                                        fill="white"></path>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
                <div className="manu-parter-dls-img">
                    <img src={tailoredFormulations} alt="Manufacturing partner" />
                </div>

            </div>
        </section>
    )
};

export default TailoredFormulations;
