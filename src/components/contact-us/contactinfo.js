import React from 'react';

const ContactInfo = () => {
    return (
        <section className="bg-dark-sky pt-80 pb-80 our-office-sec contact-info-sec">
            <div className="container">
                <div className="our-office-title pb-80">
                    <h2>Contact information</h2>
                </div>
                <div className="our-office-dls">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="our-office-dls-left">
                                <ul>
                                    <li className="active">
                                        <label for="">
                                            <span>Head office</span>
                                            <a href="#">New Zealand</a>
                                        </label>
                                    </li>
                                    <li>
                                        <label for="">
                                            <a href="#">Australia</a>
                                        </label>
                                    </li>
                                    <li>
                                        <label for="">
                                            <a href="#">China</a>
                                        </label>
                                    </li>
                                    <li>
                                        <label for="">
                                            <a href="#">Fiji</a>
                                        </label>
                                    </li>
                                    <li>
                                        <label for="">
                                            <a href="#">India</a>
                                        </label>
                                    </li>
                                    <li>
                                        <label for="">
                                            <a href="#">United States</a>
                                        </label>
                                    </li>
                                    <li>
                                        <label for="">
                                            <a href="#">United Arab Emirates</a>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="our-office-dls-right">
                                <div className="right-contact-info">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="contact-info-dls">
                                                <span>Address</span>
                                                <h5>27 Timberly Road, Māngere, Auckland 2022</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="contact-info-dls">
                                                <span>Email</span>
                                                <h5>admin@zetagroup.co.nz</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="contact-info-dls">
                                                <span>Phone number</span>
                                                <h5>0800 020 101</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="contact-info-dls">
                                                <span>Business Hour</span>
                                                <h5>Monday to Friday: 9am – 5pm (GMT +13)</h5>
                                            </div>
                                        </div>
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

export default ContactInfo;
