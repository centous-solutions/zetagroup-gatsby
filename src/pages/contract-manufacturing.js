import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import DifferentHeaderBanner from '../components/differentheaderbanner';
import bannerimg from '../assets/images/conract-manufacuring.jpg';
import StressFreeProject from '../components/contract-manufacturing/stressfreeproject';
import Quote from '../components/contract-manufacturing/quote';
import Form from '../components/form';
import EmailContact from '../components/emailcontact';
import YourBenefitsWithUs from '../components/contract-manufacturing/yourbenefitswithus';
import DiverseRange from '../components/contract-manufacturing/diverserange';

const ContractManufacturing = (props) => {
    const seoData = props.data?.site?.siteMetadata || {};

    return (
        <Layout headerClass="header-main">
            <Seo
                title={seoData?.title}
                metaDesc={seoData?.metaDesc}
            />
            <DifferentHeaderBanner
                image={bannerimg}
                imgalt="adult diaper"
                title="Contract Manufacturing"
                description="We specialize in making high quality products on behalf of many brands distributed throughout the world."
            />
            <StressFreeProject />
            <Quote />
            <YourBenefitsWithUs />
            <DiverseRange />
            <Form
                title='Partner with us'
                description='Complete our form below, and one of our team members will get back to you as soon as possible!'
            />
            <EmailContact />
        </Layout>
    )
};

export default ContractManufacturing;
