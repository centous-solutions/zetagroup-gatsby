import React from 'react'

const Form = () => {
    return (
        <section class="bg-dark-sky form-section-wrap pt-80 pb-80">
            <div class="container">
                <div class="form-wrap pb-80">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-section-left">
                                <h2>Partner with us</h2>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-section-right">
                                <p>Complete our form below, and one of our team members will get back to you as soon as
                                    possible!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="partner-form-list">
                    <form>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-list-field">
                                    <input type="text" class="form-control" id="name" aria-describedby="name"
                                        placeholder="Name*" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-list-field">
                                    <input type="text" class="form-control" id="company-name"
                                        aria-describedby="company-name" placeholder="Company name" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-list-field">
                                    <input type="text" class="form-control" id="company-name"
                                        aria-describedby="phone-number" placeholder="Phone number*" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-list-field">
                                    <input type="email" class="form-control" id="email" aria-describedby="email"
                                        placeholder="Email*" />
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-floating">
                                    <textarea class="form-control" placeholder="Message" id="floatingTextarea"></textarea>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-text">
                                    <p>By clicking the "Submit" button, you are agreeing to our Privacy Policy, Terms and
                                        Conditions for this shop</p>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <button type="submit" class="btn btn-primary">Submit
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
