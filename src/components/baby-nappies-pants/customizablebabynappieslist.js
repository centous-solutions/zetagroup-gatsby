import React from 'react';
import topSheet from '../../assets/images/top-sheet.png';
import absorbantLayer from '../../assets/images/absorbent-layer.jpg';
import backSheetMaterial from '../../assets/images/back-sheet material.jpg';

const CustomizableBabyNappiesList = () => {
    return (
        <section class="product-make-wrap bg-sky pt-80 pb-80 customizable-nappy-listing">
            <div class="container">
                <div class="product-make-listing">
                    <div class="row flex-row-reverse pb-46">
                        <div class="col-md-6">
                            <div class="pro-listing-img">
                                <img src={topSheet} alt="we-make-wipes" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="pro-listing-dls">
                                <h2>Top Sheet</h2>
                                <p>
                                    The top sheet is the layer of the nappy that comes into direct contact with the baby's
                                    skin. It's designed to be soft and comfortable while allowing liquid to pass through to
                                    the absorbent layer beneath.
                                </p>
                                <div class="nappy-listing-wrap">
                                    <div class="nappy-listing-title">
                                        <h5>Choices of materials:</h5>
                                        <ul>
                                            <li>Traditional</li>
                                            <li>Ultra soft</li>
                                            <li>Cotton</li>
                                            <li>Bamboo</li>
                                        </ul>
                                    </div>
                                    <div class="nappy-listing-title">
                                        <h5>Texture options:</h5>
                                        <ul>
                                            <li>Plain</li>
                                            <li>Embossed</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row pb-46">
                        <div class="col-md-6">
                            <div class="pro-listing-img">
                                <img src={absorbantLayer} alt="nappy pants" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="pro-listing-dls">
                                <h2>Absorbent layer</h2>
                                <p>
                                    The most important part of nappies is the absorbent core, which consists of key
                                    materials designed to quickly draw in and lock away moisture, keeping babies dry and
                                    comfortable for longer periods of time. This layer typically consists of a combination
                                    of wood pulp, tissue, and SAP (super absorbent polymer) to achieve the best performance.
                                </p>
                                <p class="offer-txt">
                                    We offer traditional 3-layer solutions all the way up to ultra absorbent 7-layer
                                    designs.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row flex-row-reverse">
                        <div class="col-md-6">
                            <div class="pro-listing-img">
                                <img src={backSheetMaterial} alt="we-make-wipes" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="pro-listing-dls">
                                <h2>Back sheet Material</h2>
                                <p>
                                    The back sheet provides leak protection and helps contain blowouts. This layer prevents
                                    the wetness contained in the nappy from transferring to bedding and clothing.
                                </p>
                                <div class="nappy-listing-wrap">
                                    <div class="nappy-listing-title">
                                        <h5>Choices of materials:</h5>
                                        <ul>
                                            <li>Traditional</li>
                                            <li>Ultra soft</li>
                                            <li>Cotton</li>
                                            <li>Bamboo</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default CustomizableBabyNappiesList;
