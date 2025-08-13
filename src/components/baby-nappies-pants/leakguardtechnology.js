import React from 'react';
import leakGuard from '../../assets/images/leak-guard.jpg';

const LeakGuardTechnology = () => {
    return (
        <section className="pt-80 pb-80 leak-technology">
            <div className="container">
                <div className="leak-technology-title">
                    <h2>Leak Guard Technology</h2>
                    <div className="row pt-80">
                        <div className="col-md-6">
                            <div className="leak-technology-left">
                                <img src={leakGuard} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="leak-technology-right">
                                <div className="leak-technology-dls">
                                    <h4>2D Leak Prevention Channel</h4>
                                    <p>
                                        Provides two layers of protection against leaks, offering practical and reliable
                                    </p>
                                </div>
                                <div className="leak-technology-dls">
                                    <h4>3D Leak Prevention Channel</h4>
                                    <p>
                                        3D Leak Guard with an active barrier prevents leaks and side spills, ensuring
                                        maximum
                                        protection. The 3D leg cuffs provide a secure fit, effectively preventing leaks and
                                        offering enhanced comfort.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default LeakGuardTechnology;
