import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import PrivateLabel from '../components/retailer-private-labels/privatelabel';
import GrowthStrategy from '../components/retailer-private-labels/growthstrategy';
import ManufacturingPartner from '../components/retailer-private-labels/manufacturingpartner';
import ProvenExperience from '../components/retailer-private-labels/provenexperience';
import Quote from '../components/retailer-private-labels/quote';
import Form from '../components/form';
import EmailContact from '../components/emailcontact';

const RetailerPrivateLabelsPage = (props) => {
    const seoData = props.data?.site?.siteMetadata || {};

    return (
        <Layout headerClass="header-main">
            <Seo
                title={seoData?.title}
                metaDesc={seoData?.metaDesc}
            />
            <PrivateLabel />
            <GrowthStrategy />
            <ManufacturingPartner />
            <ProvenExperience />
            <Quote />
            <Form
                title='Partner with us'
                description='Complete our form below, and one of our team members will get back to you as soon as possible!'
            />
            <EmailContact />
        </Layout>
    )
};

export default RetailerPrivateLabelsPage;
