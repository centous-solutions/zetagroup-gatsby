import React from "react";

import Layout from "../components/layout"
import Seo from "../components/seo"
import Banner from "../components/home/banner";
import ProductWeMake from "../components/home/productwemake";
import ManufacturingPartner from "../components/home/manufacturingpartner";
import TurnkeyProcess from "../components/home/turnkeyprocess";
import EcoFriendlyCare from "../components/home/ecofriendlycare";
import OurBrands from "../components/home/ourbrands";
import ZetaGroupSuccess from "../components/home/zetagroupsuccess";
import Video from "../components/home/video";
import GlobalPresence from "../components/home/globalpresence";
import Form from "../components/form";
import EmailContact from "../components/emailcontact";

const IndexPage = (props) => {
    const seoData = props.data?.site?.siteMetadata || {};

    return (
        <Layout headerClass="header-main white-bg-header">
            <Seo
                title={seoData?.title}
                metaDesc={seoData?.metaDesc}
            />
            <Banner />
            <ProductWeMake />
            <ManufacturingPartner />
            <TurnkeyProcess />
            <EcoFriendlyCare />
            <OurBrands />
            <ZetaGroupSuccess />
            <Video />
            <GlobalPresence />
            <Form
                title='Partner with us'
                description='Complete our form below, and one of our team members will get back to you as soon as possible!'
            />
            <EmailContact />
        </Layout>
    )
};

export default IndexPage;
