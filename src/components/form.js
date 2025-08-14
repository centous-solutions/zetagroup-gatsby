import React from 'react';

const Form = ({ bgclass, title, description }) => {
    return (
        <section className={`${bgclass ? bgclass : "bg-dark-sky"} form-section-wrap pt-80 pb-80`}>
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
                                <div className="file-upload">
                                    <label for="fileInput" className="file-label">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8 8.00049V6.00049C8 3.79135 9.79086 2.00049 12 2.00049C14.2091 2.00049 16 3.79135 16 6.00049V18.0005C16 20.2096 14.2091 22.0005 12 22.0005C9.79086 22.0005 8 20.2096 8 18.0005V13.5005C8 12.1198 9.11929 11.0005 10.5 11.0005C11.8807 11.0005 13 12.1198 13 13.5005V16.0005"
                                                stroke="#494A52" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                        Attach file
                                    </label>
                                    <input type="file" id="fileInput" hidden />
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
