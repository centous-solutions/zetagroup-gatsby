import React from 'react';
import historyImg from '../../assets/images/history-zeta.jpg';

const HistoryOfZetaGroup = () => {
    return (
        <section className="pt-80 pb-80 history-zeta-sec">
            <div className="container">
                <div className="history-zeta-title">
                    <h2 className="pb-46">History of Zeta Group</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="pro-listing-img">
                                <img src={historyImg} alt="history zeta group" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="pro-listing-dls">
                                <ul>
                                    <li>
                                        Zeta starts the eco-friendly pet wipes category and firmly commits to creating zero
                                        waste personal care products.
                                    </li>
                                    <li>
                                        Zeta establishes its India office to enhance e-commerce and diversify its supply
                                        chain options.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default HistoryOfZetaGroup;
