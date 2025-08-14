import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import WrappedHeaderBanner from '../components/wrappedheaderbanner';
import bannerimg from '../assets/images/contact-us-slider.jpg';
import Form from '../components/form';
import EmailContact from '../components/emailcontact';
import ContactInfo from '../components/contact-us/contactinfo';

const ContactUs = (props) => {
    const seoData = props.data?.site?.siteMetadata || {};

    return (
        <Layout headerClass="header-main white-bg-header">
            <Seo
                title={seoData?.title}
                metaDesc={seoData?.metaDesc}
            />
            <WrappedHeaderBanner
                img={bannerimg}
                imgalt="contact us slider"
                title="Contact us"
                description="For any questions, assistance, or interest in our offerings, please feel free to contact our team"
            />
            <Form
                bgclass="contact-from"
                title="Get in Touch"
                description='Have you a question or request? Fill out the form below, and our team will get back to you as soon as possible'
            />
            <ContactInfo />
            <EmailContact />
        </Layout>
    )
};

export default ContactUs;
