import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import DifferentHeaderBanner from '../components/differentheaderbanner';
import bannerimg from '../assets/images/about-us-slider.jpg';
import HistoryOfZetaGroup from '../components/about-us/historyofzetagroup';
import Quote from '../components/about-us/quote';
import BusinessPrinciples from '../components/about-us/businessprinciples';
import OurOffices from '../components/about-us/ouroffices';
import Form from '../components/form';
import EmailContact from '../components/emailcontact';

const AboutUs = (props) => {
    const seoData = props.data?.site?.siteMetadata || {};

    return (
        <Layout headerClass="header-main">
            <Seo
                title={seoData?.title}
                metaDesc={seoData?.metaDesc}
            />
            <DifferentHeaderBanner
                image={bannerimg}
                imgalt="about us slider"
                title="About us"
                description="ZETA Group is a New Zealand-owned and operated FMCG manufacturer specializing in nappies and wipes. We are a leading manufacturer in this sector, with customers across Oceania, Europe, North America, South America, and Asia."
            />
            <HistoryOfZetaGroup />
            <Quote />
            <BusinessPrinciples />
            <OurOffices />
            <Form
                title="Let's create new products together!"
                description='See how we can make a difference to your next project. Simply complete our contact form and one of our team members will get back to you as soon as possible.'
            />
            <EmailContact />
        </Layout>
    )
};

export default AboutUs;
