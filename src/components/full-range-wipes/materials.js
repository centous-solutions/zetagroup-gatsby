import React from 'react';
import material1 from '../../assets/images/material-1.jpg';
import material2 from '../../assets/images/material-2.jpg';
import material3 from '../../assets/images/material-3.jpg';

const Materials = () => {
    return (
        <section class="bg-sky pt-80 pb-80 material-sec">
            <div class="container">
                <div class="row pb-46">
                    <div class="col-md-6">
                        <div class="left-product-name">
                            <h2>Material</h2>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="left-product-dls">
                            <p>
                                We offer several materials from which we craft the world’s finest wipes. Choose from our
                                various options to start your project.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="material-sec-listing">
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="material-box">
                                <div class="material-box-img">
                                    <img src={material1} alt="material wipes" />
                                </div>
                                <h5>BIODEGRADABLE BAMBOO CLOTH</h5>
                                <p>
                                    We are globally recognized for our FSC certified 100% bamboo cloth as it is the most
                                    sustainable material for wipes. Bamboo cloth is soft, absorbent with natural
                                    antibacterial properties. Bamboo is a renewable resource, biodegradable and requires
                                    fewer resources to grow making it the most eco friendly choice.
                                </p>
                                <a href="#" class="btn btn-primary">See Bamboo Cloth Testing
                                    <span>
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M13.75 2C13.75 1.58579 13.4142 1.25 13 1.25L6.25 1.25C5.83579 1.25 5.5 1.58579 5.5 2C5.5 2.41421 5.83579 2.75 6.25 2.75H12.25V8.75C12.25 9.16421 12.5858 9.5 13 9.5C13.4142 9.5 13.75 9.16421 13.75 8.75L13.75 2ZM2 13L2.53033 13.5303L13.5303 2.53033L13 2L12.4697 1.46967L1.46967 12.4697L2 13Z"
                                                fill="white" />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="material-box">
                                <div class="material-box-img">
                                    <img src={material2} alt="material wipes" />
                                </div>
                                <h5>plant-based Viscose cloth</h5>
                                <p>
                                    Viscose is a semi-synthetic fibre made from cellulose, known for its softness, high
                                    absorbency, and breathability. It is biodegradable and offers a comfortable, more
                                    affordable plant-based option for wet wipes. This viscose material provides softness and
                                    strength, while minimizing any skin irritation.
                                </p>
                                <a href="#" class="btn btn-primary">See Bamboo Cloth Testing
                                    <span>
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M13.75 2C13.75 1.58579 13.4142 1.25 13 1.25L6.25 1.25C5.83579 1.25 5.5 1.58579 5.5 2C5.5 2.41421 5.83579 2.75 6.25 2.75H12.25V8.75C12.25 9.16421 12.5858 9.5 13 9.5C13.4142 9.5 13.75 9.16421 13.75 8.75L13.75 2ZM2 13L2.53033 13.5303L13.5303 2.53033L13 2L12.4697 1.46967L1.46967 12.4697L2 13Z"
                                                fill="white" />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="material-box">
                                <div class="material-box-img">
                                    <img src={material3} alt="material wipes" />
                                </div>
                                <h5>Rayon cloth</h5>
                                <p>
                                    Rayon is a versatile and widely used substrate in the wipe industry, commonly found in
                                    industrial, cleaning, and multi-purpose wipes. We also manufacture gentle, affordable
                                    baby wipes using Rayon, balancing softness, safety, and cost-efficiency.
                                </p>
                                <a href="#" class="btn btn-primary">See Bamboo Cloth Testing
                                    <span>
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M13.75 2C13.75 1.58579 13.4142 1.25 13 1.25L6.25 1.25C5.83579 1.25 5.5 1.58579 5.5 2C5.5 2.41421 5.83579 2.75 6.25 2.75H12.25V8.75C12.25 9.16421 12.5858 9.5 13 9.5C13.4142 9.5 13.75 9.16421 13.75 8.75L13.75 2ZM2 13L2.53033 13.5303L13.5303 2.53033L13 2L12.4697 1.46967L1.46967 12.4697L2 13Z"
                                                fill="white" />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Materials;
