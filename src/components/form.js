import React from 'react';

const Form = ({ title, description }) => {
    return (
        <section className="bg-dark-sky form-section-wrap pt-80 pb-80">
            <div className="container">
                <div className="form-wrap pb-80">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-section-left">
                                <h2>{title}</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-section-right">
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="partner-form-list">
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-list-field">
                                    <input type="text" className="form-control" id="name" aria-describedby="name"
                                        placeholder="Name*" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-list-field">
                                    <input type="text" className="form-control" id="company-name"
                                        aria-describedby="company-name" placeholder="Company name" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-list-field">
                                    <input type="text" className="form-control" id="company-name"
                                        aria-describedby="phone-number" placeholder="Phone number*" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-list-field">
                                    <input type="email" className="form-control" id="email" aria-describedby="email"
                                        placeholder="Email*" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Message" id="floatingTextarea"></textarea>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-text">
                                    <p>By clicking the "Submit" button, you are agreeing to our Privacy Policy, Terms and
                                        Conditions for this shop</p>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <button type="submit" className="btn btn-primary">Submit
                                    <span>
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M13.75 2C13.75 1.58579 13.4142 1.25 13 1.25L6.25 1.25C5.83579 1.25 5.5 1.58579 5.5 2C5.5 2.41421 5.83579 2.75 6.25 2.75H12.25V8.75C12.25 9.16421 12.5858 9.5 13 9.5C13.4142 9.5 13.75 9.16421 13.75 8.75L13.75 2ZM2 13L2.53033 13.5303L13.5303 2.53033L13 2L12.4697 1.46967L1.46967 12.4697L2 13Z"
                                                fill="white">
                                            </path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
};

export default Form;
